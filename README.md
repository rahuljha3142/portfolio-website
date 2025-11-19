# 👨‍💻 Rahul Raj - Full Stack Developer Portfolio

A professional personal portfolio website showcasing my web development skills, projects, and technical expertise. Built using the **MERN stack** (MongoDB, Express, React, Node.js), this project features a modern, responsive design with a custom dark/light theme toggle and a fully functional backend for handling contact form submissions.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🚀 Live Demo

**[View Live Portfolio](https://your-vercel-link-here.app)**
*(Note: Replace this link with your actual Vercel URL after deployment)*

## ✨ Key Features

* **Full Stack Architecture:** A React frontend integrated with a custom Node.js/Express backend API.
* **Theme System:** Integrated Dark/Light mode toggle with persistent state and smooth CSS transitions.
* **Responsive Design:** Mobile-first approach ensuring perfect rendering on phones, tablets, and desktops.
* **Contact Integration:** Functional contact form that saves messages directly to a **MongoDB Atlas** database.
* **Custom UI Components:**
    * Floating social media sidebar.
    * Interactive project cards.
    * Unique hero section styling with custom border-radius shapes.
* **Proxy Configuration:** Vite proxy setup to handle API requests seamlessly during development.

## 🛠️ Tech Stack

**Frontend:**
* React.js
* Vite (Next Gen Frontend Tooling)
* CSS3 (Custom CSS Variables, Flexbox, Grid)
* FontAwesome Icons

**Backend:**
* Node.js
* Express.js
* Mongoose (Object Data Modeling)
* MongoDB Atlas (Cloud Database)

## ⚙️ Environment Variables

To run this project locally, you need to set up the backend environment variables.

1.  Create a file named `.env` inside the `server/` folder.
2.  Add your MongoDB connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio


🏃‍♂️ Run Locally
Clone the project:

git clone [https://github.com/rahuljha3142/portfolio-website.git](https://github.com/rahuljha3142/portfolio-website.git)


Go to the project directory:

cd portfolio-website

1. Setup & Run Backend
Navigate to the server directory, install dependencies, and start the API:

cd server
npm install
node index.js
(The backend server will start on port 5000)

2. Setup & Run Frontend
Open a new terminal window, navigate to the root directory, and start the React app:

npm install
npm run dev
(The frontend will start on port 5173)

📂 Project Structure

portfolio-website/
├── server/              # Backend Node.js/Express Application
│   ├── models/          # Mongoose Database Schemas
│   ├── .env             # Backend secrets (Ensured in .gitignore)
│   └── index.js         # Server Entry Point & API Routes
├── src/                 # Frontend React Application
│   ├── assets/          # Images and static resources
│   ├── components/      # Reusable UI Components (Hero, Contact, etc.)
│   ├── App.jsx          # Main Application Component
│   └── main.jsx         # React Entry Point
├── vercel.json          # Configuration for Vercel Deployment
└── vite.config.js       # Vite Configuration (including API Proxy)


🚀 Deployment
This project is configured for seamless deployment on Vercel.

The included vercel.json file handles the configuration to serve both the React frontend and the Node.js backend as Serverless Functions within a single deployment.

📬 Contact
Rahul Raj

📧 Email: rahulraaz3142@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/rahul-raaz-378852202/

🐙 GitHub: https://github.com/rahuljha3142