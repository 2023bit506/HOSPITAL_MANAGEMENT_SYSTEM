
# 🏥 Hospital Management System

A complete **backend system** for managing hospital operations — including patient records, appointments, doctors, and staff — built using **Node.js**, **Express**, and **MongoDB**.

> 📌 Built for scalability, modularity, and security. Ideal for clinics, hospitals, and healthcare platforms.

---

## 🚀 Tech Stack

| 💻 Technology  | 🔧 Purpose                      |
|----------------|---------------------------------|
| 🧠 Node.js      | JavaScript runtime environment |
| ⚙️ Express.js   | Backend framework              |
| 🗃️ MongoDB      | NoSQL database                 |
| 🧾 Mongoose     | ODM to work with MongoDB       |
| 🛡️ JWT          | Token-based authentication     |
| 🔐 bcryptjs     | Password hashing               |
| 🌐 dotenv       | Environment configuration      |
| 📮 Postman      | API testing                    |

---

## 📂 Folder Structure

```
HOSPITAL_MANAGEMENT_SYSTEM/
│
├── controller/       # Business logic handlers
├── database/         # MongoDB connection
├── middlewares/      # Auth & error middleware
├── models/           # Mongoose schemas
├── router/           # API route handlers
├── utils/            # Helper functions
│
├── app.js            # Entry point
├── server.js         # Server setup
├── package.json      # Project metadata
├── .gitignore        # Ignored files
└── README.md         # Documentation
```

---

## ✅ Features

- 👥 User Registration & Login  
- 🧑‍⚕️ Doctor and Patient Management  
- 📅 Appointment Scheduling  
- 🔐 Secure JWT Authentication  
- 🔒 Password Hashing with Bcrypt  
- 📦 Modular Folder Structure  
- 🧰 Middleware-based Error Handling  

---

## 🛠️ How to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/2023bit506/HOSPITAL_MANAGEMENT_SYSTEM.git
   cd HOSPITAL_MANAGEMENT_SYSTEM
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Environment Variables**
   Create a `.env` file in the root:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Server**
   ```bash
   npm start
   ```

> ✅ Your server will be running at `http://localhost:3000`

---

## 🔍 Sample API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | /api/auth/register    | Register a new user   |
| POST   | /api/auth/login       | User login            |
| GET    | /api/doctors          | Get doctor list       |
| POST   | /api/appointments     | Book an appointment   |

---

## 🔮 Future Enhancements

- 📊 Admin Dashboard  
- 📩 Email & SMS Notifications  
- 📱 React Frontend Integration  
- 📅 Calendar for Appointments  
- 👨‍⚕️ Role-based Access (Admin/Doctor/Patient)

---

## 🙋‍♂️ Author

- 👤 **GitHub:** [2023bit506](https://github.com/2023bit506)  
- 🌐 **Portfolio:** [Click Here](https://2023bit506.github.io/PORTFOLIO/)  
- 💬 **LinkedIn:** [Shubham Pawar](https://www.linkedin.com/in/shubhampawar08)

---

## 🌟 Support This Project

If you found this helpful:

⭐ Star this repo  
🔁 Share with others  
🍴 Fork and contribute!

---
