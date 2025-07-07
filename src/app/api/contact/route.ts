import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  console.log("=== CONTACT FORM API ROUTE CALLED ===");

  try {
    const formData = await request.json();
    console.log("Form data received:", formData);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields (Name, Email, Message)",
        },
        { status: 400 }
      );
    }

    // Get environment variables
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    console.log("SMTP Config (without password):", {
      ...smtpConfig,
      auth: { ...smtpConfig.auth, pass: "[HIDDEN]" },
    });

    // Check if all required environment variables are present
    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error("Missing environment variables:", {
        SMTP_HOST: !!process.env.SMTP_HOST,
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS,
      });
      return NextResponse.json(
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
Website: ${process.env.WEBSITE_URL || "https://omnilogistics.co.zw"}
    `.trim();

    const mailOptions = {
      from: `"${formData.fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
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

    // Send admin notification email
    const adminInfo = await transporter.sendMail(mailOptions);
    console.log(
      "Admin notification email sent successfully:",
      adminInfo.messageId
    );

    // Send client confirmation email
    const confirmationEmailContent = `
Dear ${formData.fullName},

Thank you for contacting Omni Logistics! We have received your inquiry and our team will review it shortly.

Your Inquiry Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Plan Type: ${formData.planType || "Not provided"}
Fleet Size: ${formData.fleetSize || "Not provided"}

Message:
${formData.message}

What Happens Next:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Our team will review your inquiry within 24 hours
• We will respond with tailored solutions for your logistics needs
• A dedicated account manager will be assigned to your case
• We'll schedule a consultation call if needed

About Omni Logistics:
We are Zimbabwe's leading logistics and supply chain management company, providing innovative solutions for businesses of all sizes. Our comprehensive services include fleet management, cargo tracking, supply chain optimization, and custom logistics solutions.

Visit our website: ${process.env.WEBSITE_URL || "https://omnilogistics.co.zw"}

Best regards,
The Omni Logistics Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated message. Please do not reply to this email.
If you need immediate assistance, please contact us at ${
      process.env.ADMIN_EMAIL || process.env.EMAIL_USER
    }.
    `.trim();

    const confirmationMailOptions = {
      from: `"Omni Logistics" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject:
        "Thank you for contacting Omni Logistics - We've received your inquiry",
      text: confirmationEmailContent,
      html: confirmationEmailContent
        .replace(/\n/g, "<br>")
        .replace(/━/g, "─")
        .replace(
          /Best regards,<br>The Omni Logistics Team/,
          "<br><strong>Best regards,<br>The Omni Logistics Team</strong>"
        )
        .replace(
          /About Omni Logistics:<br>/,
          "<br><strong>About Omni Logistics:</strong><br>"
        )
        .replace(
          /What Happens Next:<br>/,
          "<br><strong>What Happens Next:</strong><br>"
        )
        .replace(
          /Your Inquiry Details:<br>/,
          "<br><strong>Your Inquiry Details:</strong><br>"
        )
        .replace(/• /g, "• ")
        .replace(
          /This is an automated message\./,
          "<br><em>This is an automated message.</em>"
        ),
    };

    console.log("Sending confirmation email to client:", formData.email);
    const confirmationInfo = await transporter.sendMail(
      confirmationMailOptions
    );
    console.log(
      "Client confirmation email sent successfully:",
      confirmationInfo.messageId
    );

    return NextResponse.json({
      success: true,
      message:
        "Thank you! Your message has been sent successfully. We will get back to you within 24 hours. Please check your email for a confirmation message.",
      debug: {
        adminMessageId: adminInfo.messageId,
        confirmationMessageId: confirmationInfo.messageId,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error: unknown) {
    console.error("Contact form error:", error);

    // Return user-friendly error messages
    let errorMessage =
      "Sorry, there was an error sending your message. Please try again.";

    if (error && typeof error === "object" && "code" in error) {
      if (error.code === "EAUTH") {
        errorMessage = "Email authentication failed. Please contact support.";
      } else if (error.code === "ECONNECTION") {
        errorMessage =
          "Unable to connect to email server. Please try again later.";
      } else if (error.code === "EENVELOPE") {
        errorMessage =
          "Invalid email address. Please check your email and try again.";
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
