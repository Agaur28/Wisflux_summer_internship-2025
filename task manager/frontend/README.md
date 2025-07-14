# Task Manager Capstone Project

## Overview
This project is a full stack task manager application built with a Node.js backend and a React frontend. It allows users to create, read, update, and delete tasks.

## Technologies Used
- **Frontend**: React, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: (Specify your choice, e.g., MongoDB, PostgreSQL)

## Features
- User can create new tasks.
- User can view a list of tasks.
- User can update existing tasks.
- User can delete tasks.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- TypeScript

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd task-manager-capstone/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

#### Backend
1. Navigate to the backend directory:
   ```
   cd task-manager-capstone/backend
   ```

2. Start the backend server:
   ```
   npm start
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```
   cd task-manager-capstone/frontend
   ```

2. Start the frontend application:
   ```
   npm start
   ```

### API Endpoints
- `POST /api/tasks` - Create a new task
- `GET /api/tasks` - Retrieve all tasks
- `PUT /api/tasks/:id` - Update a task by ID
- `DELETE /api/tasks/:id` - Delete a task by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.