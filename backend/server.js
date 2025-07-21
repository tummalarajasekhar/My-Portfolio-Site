const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

if (!process.env.EMAIL|| !process.env.PASSWORD) {
    console.log(EMAIL, PASSWORD);
    console.error("ERROR: USER or PASSWORD environment variable is missing.");
    process.exit(1);
}

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Root Route (Handles GET /)
app.get("/", (req, res) => {
    res.send("Raja's Portfolio");
});

// Form Submission Endpoint
app.post("/submit-form", async (req, res) => {
    console.log("Form data received:", req.body);
    const { name, email, phone, subject, message } = req.body;



    // Configure the email transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // Imported from environment variable
            pass: process.env.PASSWORD, // Imported from environment variable (ensure your .env uses PASSWORD, not PASSword)
        },
    });

   
    const mailtoRaja = {
        from: process.env.EMAIL, // Replace with your email
        to: "trsr.rajasekhar@gmail.com",   // Replace with the admin's email
        subject: `New Client from portfolio ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            subjectCourse: ${subject}
            Message: ${message || "No message provided"}
        `,
    };

    // Email to USER
    const userMailOptions = {
        from: process.env.EMAIL, // Replace with your email
        to: email, // User's email
        subject: "Thank You for reaching out!",
        html: `
            <p>Dear ${name},</p>
            <p>Thank you for reaching out through my portfolio website!</p>
            <p>We have received your message and will review your details. I will contact you shortly regarding your inquiry.</p>
            <p>If you have any further questions, feel free to reply to this email.</p>
            <br>
            <p>Best regards,<br>Raja Sekhar</p>
        `,

    };


    try {
        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(mailtoRaja);

        res.status(200).json({ message: "Form submitted successfully and confirmation email sent!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email." });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});