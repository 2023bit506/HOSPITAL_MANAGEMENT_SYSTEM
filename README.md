# 🏥 Hospital Management System

A complete **backend system** for managing hospital operations — including patient records, appointments, doctors, and staff — built using **Node.js**, **Express**, and **MongoDB**.

> 📌 Built for scalability, modularity, and security. Perfect for clinics, hospitals, and health-tech applications.

---

## 🚀 Tech Stack

| Technology      | Purpose                         |
|----------------|----------------------------------|
| 🧠 Node.js       | Runtime for JavaScript backend   |
| ⚙️ Express.js    | Framework for API handling       |
| 🗃️ MongoDB       | NoSQL database                   |
| 🧾 Mongoose     | ODM to model MongoDB data        |
| 🛡️ JWT          | User authentication              |
| 🔐 bcryptjs     | Password encryption              |
| 🌐 dotenv       | Manage environment variables     |
| 📮 Postman      | API testing & documentation      |

---

## 📂 Folder Structure

HOSPITAL_MANAGEMENT_SYSTEM/
│
├── controller/ # Business logic handlers
├── database/ # MongoDB connection setup
├── middlewares/ # Auth & error-handling middleware
├── models/ # Mongoose schemas for data
├── router/ # Route definitions
├── utils/ # Utility/helper functions
│
├── app.js # Main application entry
├── server.js # Server setup
├── package.json # Project metadata & dependencies
├── .gitignore # Git ignore file
└── README.md # Project documentation

yaml
Copy
Edit

---

## ✅ Key Features

- 👥 **User Registration & Login**
- 🧑‍⚕️ **Doctor and Patient Management**
- 📅 **Appointment Scheduling**
- 🔐 **Secure JWT Authentication**
- 🔒 **Password Hashing with Bcrypt**
- 📦 **Modular Codebase Structure**
- 🧰 **Error Handling and Middleware**

---

## 🛠️ How to Run the Project Locally

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/2023bit506/HOSPITAL_MANAGEMENT_SYSTEM.git
   cd HOSPITAL_MANAGEMENT_SYSTEM
Install Dependencies

bash
Copy
Edit
npm install
Configure Environment Variables
Create a .env file in the root folder and add:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the Server

bash
Copy
Edit
npm start
✅ Server is now running at:
http://localhost:3000 (or your configured port)

🔍 Sample API Usage (via Postman)
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
GET	/api/doctors	Get all doctors
POST	/api/appointments	Book an appointment

🔮 Future Enhancements
📊 Admin Dashboard

📨 Email & SMS Notifications

📱 React Frontend Integration

📅 Calendar View for Appointments

🧑‍⚕️ Role-based Authorization (Admin/Doctor/Patient)

🙋‍♂️ Author
👤 GitHub: 2023bit506

🌐 Portfolio: https://2023bit506.github.io/PORTFOLIO/

💬 Contact: https://www.linkedin.com/in/shubhampawar08

🌟 Show Your Support
If you like this project, leave a ⭐ on the repo and share it with others!

