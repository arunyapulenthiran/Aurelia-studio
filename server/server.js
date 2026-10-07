const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Aurelia Studio API is running.",
  });
});

app.post("/api/inquiries", (req, res) => {
  const { name, email, projectType, message } = req.body;

  console.log("New inquiry received:");
  console.log({
    name,
    email,
    projectType,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Your inquiry has been received.",
  });
});

app.listen(PORT, () => {
  console.log(`Aurelia API running on port ${PORT}`);
});