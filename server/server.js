
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;

// Trust the single proxy in front of this server.
app.set("trust proxy", 1);


const allowedOrigins = [
  ...(
    process.env.FRONTEND_ORIGIN ||
    "http://localhost:5173,https://effective-fiesta-5v4p977gwj47c7jw6-5173.app.github.dev"
  )
    .split(",")
    .map((origin) => origin.trim()),
  "https://aurelia-studio-two.vercel.app",
];


app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without an Origin header for health checks
      // and non-browser clients. CORS is not authentication.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed"));
    },
  })
);

app.use(express.json({ limit: "10kb" }));

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Aurelia Studio API is running.",
  });
});

app.post(
  "/api/inquiries",
  inquiryLimiter,
  async (req, res) => {
    const { name, email, projectType, message } =
      req.body || {};

    const cleanName =
      typeof name === "string" ? name.trim() : "";
    const cleanEmail =
      typeof email === "string" ? email.trim() : "";
    const cleanProjectType =
      typeof projectType === "string"
        ? projectType.trim()
        : "";
    const cleanMessage =
      typeof message === "string" ? message.trim() : "";

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cleanName.length < 2 ||
      cleanName.length > 100 ||
      !emailPattern.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      cleanProjectType.length < 2 ||
      cleanProjectType.length > 100 ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please check your name, email, project type, and message.",
      });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.EMAIL_FROM ||
      !process.env.INQUIRY_TO
    ) {
      console.error("Email service configuration is missing.");

      return res.status(503).json({
        success: false,
        message:
          "The inquiry service is temporarily unavailable. Please try again later.",
      });
    }

    const emailText = [
      "New Aurelia Studio project inquiry",
      "",
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Project type: ${cleanProjectType}`,
      "",
      "Message:",
      cleanMessage,
    ].join("\n");

    try {
      const response = await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",
          headers: {
            Authorization:
              `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM,
            to: [process.env.INQUIRY_TO],
            reply_to: cleanEmail,
            subject: "New Aurelia Studio project inquiry",
            text: emailText,
          }),
        }
      );

      if (!response.ok) {
  const errorText = await response.text();

  console.error(
    "Email provider rejected the inquiry:",
    response.status,
    errorText
  );

        return res.status(502).json({
          success: false,
          message:
            "We couldn't send your inquiry right now. Please try again later.",
        });
      }

      return res.status(201).json({
        success: true,
        message:
          "Thank you! Your inquiry has been sent successfully.",
      });
    } catch (error) {
      console.error("Inquiry email delivery failed.");

      return res.status(502).json({
        success: false,
        message:
          "We couldn't send your inquiry right now. Please try again later.",
      });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Aurelia API listening on port ${PORT}`);
});
