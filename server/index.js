const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); // <--- IMPORT NODEMAILER
const Message = require('./models/Message');

// Load env vars
dotenv.config();

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
};
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// --- Nodemailer Config ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS, // Your App Password
  },
});

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend API Running');
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to MongoDB
    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();

    // 2. Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your email)
      to: process.env.EMAIL_USER,   // Receiver address (also your email)
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});