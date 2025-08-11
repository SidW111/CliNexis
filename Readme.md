# 🩺 CliNexis

A **MERN-powered Appointment Booking System** with **User / Doctor / Admin** roles, a responsive booking UI, and a powerful **Admin Dashboard**.  
Built for real-world scheduling with JWT auth, role-based access, and a clean Tailwind UI.

---

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE) [![Demo](https://img.shields.io/badge/Live%20Demo-Available-blue.svg)]

## 🚀 Live Demo
🔗 **Live Demo:** `https://clinexis-fe.onrender.com/` (replace with your deployed link)

## 🔗 Repo
`https://github.com/SidW111/CliNexis`

---

## ✨ Features

### User / Patient
- Register & Login
- Browse doctors and services
- Book, view, edit, cancel appointments
- Responsive UI for desktop & mobile

### Doctor
- Doctor login & profile
- View own appointment schedule
- Accept / Reject appointments
- Update availability

### Admin
- Global Admin Dashboard (appointments, doctors, users)
- Approve / manage doctor accounts
- Cancel / modify appointments
- Analytics overview (counts, upcoming slots)

### Common
- JWT-based authentication (role-based access)
- RESTful API (Express.js)
- MongoDB data models
- Tailwind CSS for styling

---

## 🛠 Tech Stack
- **Frontend:** React.js (Create React App / Vite), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JSON Web Tokens (JWT)

---

Backend Setup 

cd backend
cp .env.example .env
npm install
