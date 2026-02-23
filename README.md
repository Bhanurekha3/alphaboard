# AlphaBoard

A scalable full-stack web application with secure JWT authentication and a task management dashboard.

This project was built as part of the Frontend Developer Internship assignment.

---

## Tech Stack

### Frontend
- Next.js (Pages Router)
- Tailwind CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (Password hashing)
- express-validator (Input validation)

---

## Features

### Authentication
- User registration with validation
- Secure password hashing using bcrypt
- JWT-based login
- Protected dashboard route
- Token verification middleware

### Dashboard
- Display user profile
- Create task
- Read tasks
- Update task
- Delete task
- Search/filter tasks
- Logout functionality

### Security
- Hashed passwords
- JWT token validation
- User-specific task isolation
- Backend input validation
- Protected API routes

---

## Project Structure
alphaboard/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── pages/
│ └── utils/
│
└── README.md


---

##  Setup Instructions

### 1️ Clone the repository
git clone <your-repo-url>
cd alphaboard

---

### 2️ Backend Setup
cd backend
npm install


Create `.env` file:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run server:
node server.js


Backend runs at:
http://localhost:5000

---

### 3️ Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:3000


---

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Profile
- `GET /api/profile`

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

---

## Production Scalability Plan

If deployed to production, the following improvements would be implemented:

- Environment-based API configuration
- Rate limiting middleware
- Centralized error handling
- Pagination for large task lists
- Docker containerization
- CI/CD pipeline integration
- Redis caching for performance optimization
- CDN for static frontend assets

---

## Assignment Requirements Covered

- React/Next.js frontend
- Responsive UI
- Form validation (client + server)
- JWT authentication
- Protected routes
- CRUD operations
- Profile fetching
- Secure backend structure
- Modular code organization

---

## Author

Bhanu
Frontend Developer Internship Submission

