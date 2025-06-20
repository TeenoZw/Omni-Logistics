const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    };
  }

  try {
    const { fullName, email, phone, company, planType, fleetSize, message } =
      JSON.parse(event.body);

    // Validate required fields
    if (!fullName || !email || !message) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message:
            "Missing required fields: fullName, email, and message are required",
        }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message: "Invalid email format",
        }),
      };
    }

    // Configure email transporter (you'll need to set these environment variables)
    const transporter = nodemailer.createTransporter({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template for admin notification
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #007bff, #0056b3); padding: 20px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">New Contact Form Submission</h2>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Omni Logistics Website</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Service Interest</h3>
            <p><strong>Plan Type:</strong> ${planType || "Not specified"}</p>
            <p><strong>Fleet Size:</strong> ${fleetSize || "Not specified"}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              <strong>📅 Received:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Auto-reply email template
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #007bff, #0056b3); padding: 20px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">Thank You for Contacting Omni Logistics</h2>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <p>Dear ${fullName},</p>
            
            <p>Thank you for your interest in Omni Logistics! We've received your inquiry and our team will review your requirements.</p>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="color: #1976d2; margin-top: 0;">What's Next?</h4>
              <ul style="color: #333; padding-left: 20px;">
                <li>Our team will review your requirements within 24 hours</li>
                <li>A solutions specialist will contact you to discuss your fleet needs</li>
                <li>We'll provide a customized proposal based on your specifications</li>
                <li>Schedule a demo to see our platform in action</li>
              </ul>
            </div>
            
            <div style="background: #f1f8e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="color: #388e3c; margin-top: 0;">🚀 Why Choose Omni Logistics?</h4>
              <ul style="color: #333; padding-left: 20px;">
                <li>Real-time GPS tracking and monitoring</li>
                <li>AI-powered fleet optimization</li>
                <li>Professional installation included</li>
                <li>24/7 customer support</li>
                <li>Scalable solutions for any fleet size</li>
              </ul>
            </div>
            
            <p>If you have any immediate questions, feel free to reply to this email or call us at <strong>+263 123 456 789</strong>.</p>
            
            <p>Best regards,<br>
            <strong>The Omni Logistics Team</strong></p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Omni Logistics - Future of Fleet Intelligence</p>
            <p>Visit us at: <a href="https://omnilogistics.co.zw">omnilogistics.co.zw</a></p>
          </div>
        </div>
      </div>
    `;

    // Send emails
    const emailPromises = [];

    // Send to admin
    if (process.env.ADMIN_EMAIL) {
      emailPromises.push(
        transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.ADMIN_EMAIL,
          subject: `New Contact Form Submission - ${fullName}`,
          html: adminEmailHtml,
        })
      );
    }

    // Send auto-reply to client
    emailPromises.push(
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting Omni Logistics",
        html: clientEmailHtml,
      })
    );

    await Promise.all(emailPromises);

    // Success response
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message:
          "Thank you for your message! We will get back to you within 24 hours.",
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      }),
    };
  }
};
