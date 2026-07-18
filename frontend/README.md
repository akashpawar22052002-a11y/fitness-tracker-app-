# Fitness Tracker CRUD API - Task 1

This is a Node.js, Express, and MongoDB backend for a Fitness Tracker application that satisfies all CRUD requirements.

## Project Structure
- `backend/` : Contains the server code, Mongoose schemas, controllers, and API routes.
- `frontend/` : Contains the client-side application.

## How to Run Backend
1. Navigate to backend: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`.
4. Start development server: `npm run dev`

## API Endpoints
- **GET** `/api/workouts` - List all workout logs
- **GET** `/api/workouts/:id` - Single workout details
- **POST** `/api/workouts` - Create a workout log (Includes Mongoose validation)
- **PUT** `/api/workouts/:id` - Update a workout log
- **DELETE** `/api/workouts/:id` - Delete a workout log