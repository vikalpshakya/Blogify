# Blogify

**Blogify** is a full-stack blogging platform that allows users to register, log in, write, and manage blog posts. Built using **Node.js**, **Express**, **MongoDB**, and **EJS**, it provides a clean and functional blogging experience with authentication and secure route handling.

---

## Features

-  User Registration & Login (with JWT)
-  Create, Edit, and Delete Blog Posts
-  View All Public Blogs
-  User Dashboard for Personal Blogs
-  MongoDB Atlas Integration
-  Clean and Responsive EJS Frontend

---

##  Tech Stack

| Tech            | Purpose                        |
|----------------|---------------------------------|
| Node.js         | JavaScript runtime (backend)   |
| Express.js      | Web framework                  |
| MongoDB (Atlas) | NoSQL database (cloud-hosted)  |
| Mongoose        | MongoDB ODM                    |
| JWT             | Authentication                 |
| EJS             | Templating engine              |
| Bootstrap/CSS   | UI and layout styling          |

---

## ⚙ Getting Started

```bash
# 1. Clone the Repository
git clone https://github.com/vikalpshakya/Blogify.git
cd Blogify

# 2. Install Dependencies
npm install

# 3. Set Up Environment Variables
# Create a .env file in the root directory and add the following:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

# Replace 'your_mongo_connection_string' with your MongoDB Atlas URI
# Replace 'your_jwt_secret' with any strong random key like 'xyz'

# 4. Start the Application
npm start

# Open your browser and go to:
http://localhost:5000

PROJEXT STURCTURE :-

Blogify/
├── models/          # Mongoose schemas for User and Post
├── routes/          # Auth and blog routes
├── views/           # EJS frontend templates
├── public/          # Static files (CSS, JS, images)
├── .env             # Environment variables (ignored in git)
├── app.js           # Entry point for the app
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation


