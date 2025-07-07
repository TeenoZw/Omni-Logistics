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

    // Create styled admin email content
    const adminEmailContent = `
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

    const adminEmailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #0d1126 0%, #1a223d 100%); padding: 30px; text-align: center; }
        .header h1 { color: white; font-size: 24px; font-weight: 600; margin-bottom: 8px; }
        .header p { color: rgba(255,255,255,0.8); font-size: 14px; }
        .content { padding: 40px 30px; }
        .alert { background: #00a2ff; color: white; padding: 15px; border-radius: 8px; margin-bottom: 30px; font-weight: 500; }
        .details { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 30px; }
        .detail-row { display: flex; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .detail-row:last-child { border-bottom: none; }
        .detail-label { font-weight: 600; color: #374151; min-width: 100px; }
        .detail-value { color: #6b7280; flex: 1; }
        .message-section { margin-top: 30px; }
        .message-section h3 { color: #374151; margin-bottom: 15px; font-size: 18px; }
        .message-content { background: #f8fafc; border-left: 4px solid #00a2ff; padding: 20px; border-radius: 4px; font-style: italic; color: #4b5563; }
        .footer { background: #f8fafc; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer p { color: #6b7280; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚛 Omni Logistics</h1>
            <p>New Contact Form Submission</p>
        </div>
        <div class="content">
            <div class="alert">
                📧 New inquiry received from ${formData.fullName}
            </div>
            <div class="details">
                <div class="detail-row">
                    <div class="detail-label">Name:</div>
                    <div class="detail-value">${formData.fullName}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Email:</div>
                    <div class="detail-value">${formData.email}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Phone:</div>
                    <div class="detail-value">${
                      formData.phone || "Not provided"
                    }</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Company:</div>
                    <div class="detail-value">${
                      formData.company || "Not provided"
                    }</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Plan Type:</div>
                    <div class="detail-value">${
                      formData.planType || "Not provided"
                    }</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Fleet Size:</div>
                    <div class="detail-value">${
                      formData.fleetSize || "Not provided"
                    }</div>
                </div>
            </div>
            <div class="message-section">
                <h3>Message:</h3>
                <div class="message-content">
                    ${formData.message}
                </div>
            </div>
        </div>
        <div class="footer">
            <p>Submitted at: ${new Date().toLocaleString()}</p>
            <p>Website: ${
              process.env.WEBSITE_URL || "https://omnilogistics.co.zw"
            }</p>
        </div>
    </div>
</body>
</html>
    `.trim();

    const mailOptions = {
      from: `"${formData.fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      replyTo: formData.email,
      subject: `Contact Form Submission from ${formData.fullName}`,
      text: adminEmailContent,
      html: adminEmailHTML,
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
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Plan Type: ${formData.planType || "Not provided"}
Fleet Size: ${formData.fleetSize || "Not provided"}

Message:
${formData.message}

What Happens Next:
• Our team will review your inquiry within 24 hours
• We will respond with tailored solutions for your logistics needs
• A dedicated account manager will be assigned to your case
• We'll schedule a consultation call if needed

About Omni Logistics:
Leading provider of professional vehicle tracking and fleet management solutions across Zimbabwe. Empowering businesses and individuals with real-time insights and control over their assets.

Visit our website: ${process.env.WEBSITE_URL || "https://omnilogistics.co.zw"}

Best regards,
The Omni Logistics Team

This is an automated message. Please do not reply to this email.
If you need immediate assistance, please contact us at ${
      process.env.ADMIN_EMAIL || process.env.EMAIL_USER
    }.
    `.trim();

    const confirmationEmailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting Omni Logistics</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #0d1126 0%, #1a223d 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; font-size: 28px; font-weight: 700; margin-bottom: 8px; }
        .header .subtitle { color: rgba(255,255,255,0.9); font-size: 16px; font-weight: 500; }
        .welcome { background: #00a2ff; color: white; padding: 25px 30px; text-align: center; }
        .welcome h2 { font-size: 22px; font-weight: 600; margin-bottom: 10px; }
        .welcome p { font-size: 16px; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .section { margin-bottom: 35px; }
        .section h3 { color: #1f2937; font-size: 20px; font-weight: 600; margin-bottom: 20px; display: flex; align-items: center; }
        .section h3::before { content: ""; width: 4px; height: 20px; background: #00a2ff; margin-right: 12px; border-radius: 2px; }
        .details-grid { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px; }
        .detail-item { display: flex; padding: 12px 0; border-bottom: 1px solid #e2e8f0; }
        .detail-item:last-child { border-bottom: none; }
        .detail-label { font-weight: 600; color: #374151; min-width: 110px; }
        .detail-value { color: #6b7280; flex: 1; }
        .message-box { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 1px solid #0ea5e9; border-radius: 12px; padding: 25px; margin-top: 20px; }
        .message-box p { color: #0c4a6e; font-style: italic; line-height: 1.6; }
        .next-steps { background: #f0fdf4; border: 1px solid #22c55e; border-radius: 12px; padding: 25px; }
        .next-steps ul { list-style: none; }
        .next-steps li { color: #166534; margin-bottom: 12px; padding-left: 25px; position: relative; }
        .next-steps li::before { content: "✓"; position: absolute; left: 0; color: #22c55e; font-weight: bold; }
        .about-section { background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; }
        .about-section h3 { color: white; margin-bottom: 15px; }
        .about-section h3::before { background: #00a2ff; }
        .about-section p { color: rgba(255,255,255,0.9); line-height: 1.6; margin-bottom: 20px; }
        .cta-button { display: inline-block; background: #00a2ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; transition: background 0.3s; }
        .cta-button:hover { background: #0066cc; }
        .footer { background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0; }
        .footer .signature { color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px; }
        .footer .team { color: #6b7280; font-size: 16px; margin-bottom: 20px; }
        .footer .disclaimer { color: #9ca3af; font-size: 12px; line-height: 1.5; }
        .footer .support { color: #00a2ff; font-weight: 500; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚛 Omni Logistics</h1>
            <p class="subtitle">Empowering your fleet, Driving your success</p>
        </div>
        
        <div class="welcome">
            <h2>Thank you for your inquiry, ${formData.fullName}!</h2>
            <p>We've received your message and our team will review it shortly.</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h3>Your Inquiry Details</h3>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="detail-label">Name:</div>
                        <div class="detail-value">${formData.fullName}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Email:</div>
                        <div class="detail-value">${formData.email}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Phone:</div>
                        <div class="detail-value">${
                          formData.phone || "Not provided"
                        }</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Company:</div>
                        <div class="detail-value">${
                          formData.company || "Not provided"
                        }</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Plan Type:</div>
                        <div class="detail-value">${
                          formData.planType || "Not provided"
                        }</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Fleet Size:</div>
                        <div class="detail-value">${
                          formData.fleetSize || "Not provided"
                        }</div>
                    </div>
                </div>
                <div class="message-box">
                    <p><strong>Your Message:</strong><br>${formData.message}</p>
                </div>
            </div>
            
            <div class="section">
                <h3>What Happens Next</h3>
                <div class="next-steps">
                    <ul>
                        <li>Our team will review your inquiry within 24 hours</li>
                        <li>We will respond with tailored solutions for your logistics needs</li>
                        <li>A dedicated account manager will be assigned to your case</li>
                        <li>We'll schedule a consultation call if needed</li>
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <div class="about-section">
                    <h3>About Omni Logistics</h3>
                    <p>Leading provider of professional vehicle tracking and fleet management solutions across Zimbabwe. Empowering businesses and individuals with real-time insights and control over their assets.</p>
                    <a href="${
                      process.env.WEBSITE_URL || "https://omnilogistics.co.zw"
                    }" class="cta-button">Visit Our Website</a>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="signature">Best regards,</div>
            <div class="team">The Omni Logistics Team</div>
            <div class="disclaimer">
                <em>This is an automated message. Please do not reply to this email.</em><br>
                If you need immediate assistance, please contact us at 
                <span class="support">${
                  process.env.ADMIN_EMAIL || process.env.EMAIL_USER
                }</span>
            </div>
        </div>
    </div>
</body>
</html>
    `.trim();

    const confirmationMailOptions = {
      from: `"Omni Logistics" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject:
        "Thank you for contacting Omni Logistics - We've received your inquiry",
      text: confirmationEmailContent,
      html: confirmationEmailHTML,
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
