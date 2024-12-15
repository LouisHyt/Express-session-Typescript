# Express Session Application

## 📝 Description
This project is a Node.js application built with Express.js and TypeScript. It implements a user authentication system with session management using MySQL as the database.

## 🛠 Technologies Used
- **Node.js** - Runtime environment
- **TypeScript** - Programming language
- **Express.js** - Server framework
- **MySQL & MySQL2** - Database
- **EJS** - Template engine
- **Express Session** - Session management
- **Express MySQL Session** - Session store
- **Passport** - Authentication middleware
- **Connect Flash** - Flash messages with EJS
- **Zod** - Validation Schemas
- **He** - HTML entity encoder/decoder 
- **Helmet** - Security middleware
- **Module Alias** - Import management
- **dotenv** - Environment variables management
- **nodemon** - Hot reloading module

## 📋 Prerequisites
- Node.js
- MySQL database
- npm or yarn

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/LouisHyt/Express-session-Typescript
cd express-session
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Create a `.env` file in the root directory
- Add the following variables:
```env
PORT=server_port
SESSION_SECRET=secret_to_sign_session_cookie
DB_HOST=localhost
DB_PORT=database_port
DB_USER=database_username
DB_PASSWORD=database_password
DB_NAME=database_name
NODE_ENV=development
```
⚠️ *If you wish to add more environment variables, don't forget to edit the env.ts file to validate them with Zod.*

4. Start the application in development mode:
```bash
npm run dev
```

## 🏗 Project Structure
```
├── types/             # Custom typescript declarations
├── src/
│   ├── config/        # Global configuration         
│   ├── controllers/   # Application controllers
│   ├── models/        # Data models
│   ├── public/        # Static files
│   ├── routes/        # Application routes
│   ├── utils/         # Utils functions
│   ├── views/         # EJS templates
│   └── server.ts      # Application entry point
└── env.ts 
```

## 📦 Available Scripts
- `npm run dev` : Starts the application in development mode with nodemon
- `npm run build` : Compiles the TypeScript project

## 🔒 Security Features
The application implements several security measures:
- Helmet for HTTP headers security
- Secure sessions with express-session & signed cookies
- MySQL session storage
- Environment variables and validation for sensitive data

## 🔧 Configuration
The project uses module-alias for better import management. Aliases are defined in package.json / tsconfig.json and include:
- @root
- @models
- @utils
- @config
- @controllers
- @routes

## 📄 Infos
This project was made on my free time to learn more about Typescript, Express and session management/security.
- 📅 Date : december 2024
- ✍️ Author : Louis Hayotte
