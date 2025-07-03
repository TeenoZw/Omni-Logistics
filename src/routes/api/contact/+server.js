import { json } from "@sveltejs/kit";
import {
  SMTP_HOST,
  SMTP_PORT,
  EMAIL_USER,
  EMAIL_PASS,
  ADMIN_EMAIL,
  WEBSITE_URL,
} from "$env/static/private";
import nodemailer from "nodemailer";

export async function POST({ request }) {
  console.log("=== CONTACT FORM API ROUTE CALLED ===");

  try {
    const formData = await request.json();
    console.log("Form data received:", formData);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      return json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, Message)",
        },
        { status: 400 }
      );
    }

    // Get environment variables
    const smtpConfig = {
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || "465"),
      secure: true, // use SSL
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    };

    console.log("SMTP Config (without password):", {
      ...smtpConfig,
      auth: { ...smtpConfig.auth, pass: "[HIDDEN]" },
    });

    // Check if all required environment variables are present
    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error("Missing environment variables:", {
        SMTP_HOST: !!SMTP_HOST,
        EMAIL_USER: !!EMAIL_USER,
        EMAIL_PASS: !!EMAIL_PASS,
      });
      return json(
        {
          success: false,
          message: "Server configuration error",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Create email content
    const emailContent = `
New Contact Form Submission from Omni Logistics Website

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Plan Type: ${formData.planType || "Not provided"}
Fleet Size: ${formData.fleetSize || "Not provided"}

Message:
${formData.message}

---
Submitted at: ${new Date().toLocaleString()}
Website: ${WEBSITE_URL || "https://omnilogistics.co.zw"}
    `.trim();

    const mailOptions = {
      from: `"${formData.fullName}" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL || EMAIL_USER,
      replyTo: formData.email,
      subject: `Contact Form Submission from ${formData.fullName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    };

    console.log("Sending email with options:", {
      ...mailOptions,
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We will get back to you within 24 hours.",
      debug: {
        messageId: info.messageId,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Return user-friendly error messages
    let errorMessage =
      "Sorry, there was an error sending your message. Please try again.";

    if (error.code === "EAUTH") {
      errorMessage = "Email authentication failed. Please contact support.";
    } else if (error.code === "ECONNECTION") {
      errorMessage =
        "Unable to connect to email server. Please try again later.";
    }

    return json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
