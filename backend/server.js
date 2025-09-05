const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

if (!process.env.EMAIL || !process.env.PASSWORD) {
  console.error("ERROR: EMAIL or PASSWORD env missing.");
  process.exit(1);
}

const app = express();
app.use(bodyParser.json());
app.use(cors());

// ✅ Create transporter ONCE (reuse connection)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  pool: true,                // keep connection alive
  maxConnections: 2,
  maxMessages: 50,
  rateLimit: 5,              // avoid Gmail throttling
});

// Simple HTML escape
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// ✅ Root
app.get("/", (req, res) => {
  res.send("Raja's Portfolio Backend");
});

// ✅ Form submission
app.post("/submit-form", async (req, res) => {
  try {
    let mailTasks = [];

    if (req.body.features) {
      // Business project form
      const { features, contactInfo, projectType, budget, timeline, description } = req.body;

      const mailtoRaja = {
        from: process.env.EMAIL,
        to: "trsr.rajasekhar@gmail.com",
        subject: `New Project Inquiry: ${projectType}`,
        text: `
          Features: ${features.join(", ")}
          Contact Info: ${JSON.stringify(contactInfo)}
          Project Type: ${projectType}
          Budget: ${budget}
          Timeline: ${timeline}
          Description: ${description}
        `,
      };

      const mailtoDhanush = { ...mailtoRaja, to: "devisridhanush2@gmail.com" };

      const userMailOptions = {
        from: process.env.EMAIL,
        to: contactInfo.email,
        subject: `Thank you for your ${projectType || "Project"} inquiry!`,
        html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Thank You</title>
  </head>
  <body style="margin:0; padding:0; font-family:Arial,Helvetica,sans-serif; background:#f9fafb;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f9fafb; padding:30px 0;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <tr>
              <td style="background:#111827; padding:20px; text-align:center; color:#ffffff;">
                <h1 style="margin:0; font-size:24px;">Dhanush Technologies</h1>
                <p style="margin:5px 0 0; font-size:14px; color:#d1d5db;">Innovating Digital Solutions</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#374151;">
                <h2 style="margin-top:0; font-size:20px; color:#111827;">Hello ${contactInfo.name || "there"},</h2>
                <p style="font-size:15px; line-height:1.6;">
                  Thank you for reaching out to us with your <strong>${projectType || "project"}</strong> inquiry.
                  We truly appreciate the opportunity to collaborate with you.
                </p>
                <p style="font-size:15px; line-height:1.6;">
                  Our team has received your details and we are carefully reviewing them. One of our experts
                  will get back to you within <strong>24 hours</strong> with the next steps and suggestions.
                </p>
                <p style="font-size:15px; line-height:1.6;">
                  Meanwhile, if you have any additional information or urgent questions, feel free to reply
                  directly to this email — we are here to assist you.
                </p>

                <!-- Call to Action -->
                <div style="margin:30px 0; text-align:center;">
                  <a href="https://dhanushtechnologies.com" 
                    style="background:#2563eb; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:6px; font-size:15px;">
                    Visit Our Website
                  </a>
                </div>

                <p style="font-size:15px; line-height:1.6;">
                  Thank you once again for choosing <strong>Dhanush Technologies</strong>. We look forward to
                  turning your ideas into reality!
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f3f4f6; padding:20px; text-align:center; font-size:12px; color:#6b7280;">
                <p style="margin:0;">© ${new Date().getFullYear()} Dhanush Technologies. All rights reserved.</p>
                <p style="margin:4px 0 0;">123 Business Road, Guntur, Andhra Pradesh</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `,
      };

      // ✅ Send all mails in parallel
      mailTasks = [
        transporter.sendMail(userMailOptions),
        transporter.sendMail(mailtoDhanush),
        transporter.sendMail(mailtoRaja),
      ];
    } else {
      // Portfolio contact form
      const { name, email, phone, subject, message } = req.body;

      const mailtoRaja = {
        from: process.env.EMAIL,
        to: "trsr.rajasekhar@gmail.com",
        subject: `New Client from portfolio ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Message: ${message || "No message provided"}
        `,
      };

      const userMailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank You for reaching out!",
        html: `<p>Hi ${escapeHtml(name)}, thanks for contacting me! I’ll get back to you soon.</p>`,
      };

      mailTasks = [
        transporter.sendMail(userMailOptions),
        transporter.sendMail(mailtoRaja),
      ];
    }

    await Promise.all(mailTasks); // ✅ parallel sending

    res.status(200).json({ message: "Form submitted and emails sent fast 🚀" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${process.env.PORT}`);
});
