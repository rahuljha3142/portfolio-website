const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const Message = require('./models/Message');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middlewares ---
// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors()); 
// Parse JSON request bodies
app.use(express.json());

// --- Routes ---
app.get('/', (req, res) => {
  res.send('Portfolio Backend API Running');
});

// The API route for the contact form
app.post('/api/contact', async (req, res) => {
  try {
    // Get data from the request body
    const { name, email, message } = req.body;

    // Create a new message
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save it to the database
    await newMessage.save();

    // Send a success response
    res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});