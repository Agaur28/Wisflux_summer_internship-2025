# Task Manager Capstone Project - Backend

This is the backend part of the Task Manager capstone project. It is built using TypeScript and Express.js.

## Features

- Create, read, update, and delete tasks.
- RESTful API for task management.
- TypeScript for type safety and better development experience.

## Project Structure

```
backend
├── src
│   ├── controllers       # Contains the task controller
│   ├── models            # Contains the task model
│   ├── routes            # Contains the task routes
│   ├── app.ts            # Entry point of the application
│   └── types             # Contains TypeScript types and interfaces
├── package.json          # NPM configuration file
├── tsconfig.json         # TypeScript configuration file
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-manager-capstone/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the backend server, run:
```
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `PUT /tasks/:id` - Update a task by ID
- `DELETE /tasks/:id` - Delete a task by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.