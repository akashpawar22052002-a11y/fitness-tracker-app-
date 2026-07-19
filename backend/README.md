# Fitness Tracker API (Backend)

This is the backend server code for the Fitness Tracker application, built using the MERN stack. It provides a secured CRUD API for managing workout resources.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt

## API Endpoints

### Authentication Routes
- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - Authenticate user and issue JWT

### Workout CRUD Routes (Protected)
- `GET /api/workouts` - Fetch all workouts for the logged-in user
- `GET /api/workouts/:id` - Fetch a single workout log
- `POST /api/workouts` - Create a new workout log (with Mongoose validation)
- `PATCH /api/workouts/:id` - Update an existing workout log
- `DELETE /api/workouts/:id` - Delete a workout log

## Environment Variables
Create a `.env` file in the root of the backend folder with the following keys:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
