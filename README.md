# Express Session Application

## 📝 Description
This is a Node.js application built with Express.js and TypeScript, implementing a user authentication system with session management using MySQL as the database.

## 🛠 Technologies Used
- **Node.js** - Runtime environment
- **TypeScript** - Programming language
- **Express.js** - Web framework
- **MySQL** - Database
- **EJS** - Template engine
- **Express Session** - Session management
- **Helmet** - Security middleware
- **dotenv** - Environment variables management

## 📋 Prerequisites
- Node.js (version 14 or higher)
- MySQL
- npm or yarn

## 🚀 Installation

1. Clone the repository:
```bash
git clone [your-repo]
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
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database
SESSION_SECRET=your_secret
```

4. Start the application in development mode:
```bash
npm run dev
```

## 🏗 Project Structure
```
src/
├── controllers/    # Application controllers
├── models/        # Data models
├── routes/        # Application routes
├── views/         # EJS templates
├── public/        # Static files
└── server.ts      # Application entry point
```

## 📦 Available Scripts
- `npm run dev` : Starts the application in development mode with nodemon
- `npm run build` : Compiles the TypeScript project

## 🔒 Security Features
The application implements several security measures:
- Helmet for HTTP headers security
- Secure sessions with express-session
- MySQL session storage
- Environment variables for sensitive data

## 🔧 Configuration
The project uses module-alias for better import management. Aliases are defined in package.json and include:
- @root
- @models
- @utils
- @config
- @controllers
- @routes

## 🤝 Contributing
Feel free to submit issues and enhancement requests.

## 📄 License
This project is licensed under the ISC License.
