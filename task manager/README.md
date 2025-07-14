# Task Manager Capstone Project

This is a full stack task manager application built with TypeScript, Express for the backend, and React for the frontend. The application allows users to create, read, update, and delete tasks.

## Project Structure

```
task-manager-capstone
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── taskController.ts
│   │   ├── models
│   │   │   └── taskModel.ts
│   │   ├── routes
│   │   │   └── taskRoutes.ts
│   │   ├── app.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── TaskList.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── types
│   │       └── index.ts
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Backend

The backend is built using Express and TypeScript. It provides a RESTful API for managing tasks.

### Installation

1. Navigate to the `backend` directory.
2. Run `npm install` to install the dependencies.

### Running the Backend

To start the backend server, run:

```
npm start
```

The server will be running on `http://localhost:5000`.

## Frontend

The frontend is built using React and TypeScript. It provides a user interface for interacting with the task manager.

### Installation

1. Navigate to the `frontend` directory.
2. Run `npm install` to install the dependencies.

### Running the Frontend

To start the frontend application, run:

```
npm start
```

The application will be running on `http://localhost:3000`.

## Features

- Create, read, update, and delete tasks.
- Responsive design for mobile and desktop.
- TypeScript for type safety.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features.

## License

This project is licensed under the MIT License.