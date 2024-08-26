Here are 50 Node.js, Express.js, and MongoDB coding challenges similar to the ones you've asked for:

Node.js and Express.js Coding Challenges
Basic Express Server

javascript
Copy code
const express = require('express');
const app = express();
app.listen(3000, () => {
    // Implement a basic Express server listening on port 3000.
});
Create a RESTful API for CRUD Operations

javascript
Copy code
const express = require('express');
const app = express();
// Implement a RESTful API with routes for Create, Read, Update, Delete operations.
Set Up Middleware for Logging Requests

javascript
Copy code
const express = require('express');
const app = express();
app.use((req, res, next) => {
    // Implement middleware to log incoming requests.
    next();
});
Handle Errors Globally

javascript
Copy code
const express = require('express');
const app = express();
app.use((err, req, res, next) => {
    // Implement global error handling middleware.
    res.status(500).send('Something broke!');
});
Serve Static Files

javascript
Copy code
const express = require('express');
const app = express();
app.use(express.static('public'));
// Implement serving static files from the 'public' directory.
Implement Request Body Parsing

javascript
Copy code
const express = require('express');
const app = express();
app.use(express.json());
// Implement middleware to parse JSON request bodies.
Create a Basic Authentication System

javascript
Copy code
const express = require('express');
const app = express();
app.post('/login', (req, res) => {
    // Implement basic authentication logic.
});
Connect to MongoDB Database

javascript
Copy code
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
// Implement connection to a MongoDB database.
Define a Mongoose Schema and Model

javascript
Copy code
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model('User', userSchema);
// Implement a Mongoose schema and model for users.
Create a Basic CRUD API with MongoDB

javascript
Copy code
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user'); // Assume User model is defined in models/user.js

app.post('/users', async (req, res) => {
    // Implement endpoint to create a new user.
});

app.get('/users', async (req, res) => {
    // Implement endpoint to get all users.
});

app.put('/users/:id', async (req, res) => {
    // Implement endpoint to update a user by ID.
});

app.delete('/users/:id', async (req, res) => {
    // Implement endpoint to delete a user by ID.
});
Implement User Registration and Login

javascript
Copy code
const express = require('express');
const app = express();
app.post('/register', (req, res) => {
    // Implement user registration logic.
});
app.post('/login', (req, res) => {
    // Implement user login logic.
});
Add CORS Support

javascript
Copy code
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// Implement CORS middleware to allow cross-origin requests.
Implement Rate Limiting

javascript
Copy code
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);
// Implement rate limiting middleware to limit request rate.
Handle File Uploads

javascript
Copy code
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
    // Implement file upload handling.
});
Set Up Environment Variables

javascript
Copy code
require('dotenv').config();
const express = require('express');
const app = express();
// Implement access to environment variables using dotenv.
Implement Pagination in API

javascript
Copy code
const express = require('express');
const app = express();
app.get('/items', async (req, res) => {
    // Implement pagination in API response.
});
Create a Rate Limiter Middleware

javascript
Copy code
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
    message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);
// Implement a rate limiter for API routes.
Generate a JWT Token

javascript
Copy code
const jwt = require('jsonwebtoken');
function generateToken(user) {
    // Implement JWT token generation.
    return jwt.sign(user, 'your_jwt_secret', { expiresIn: '1h' });
}
Verify JWT Token

javascript
Copy code
const jwt = require('jsonwebtoken');
function verifyToken(token) {
    // Implement JWT token verification.
    return jwt.verify(token, 'your_jwt_secret');
}
Implement a Password Reset Functionality

javascript
Copy code
const express = require('express');
const app = express();
app.post('/reset-password', (req, res) => {
    // Implement password reset logic.
});
Create an API to Get User Profile

javascript
Copy code
const express = require('express');
const app = express();
app.get('/profile/:id', async (req, res) => {
    // Implement endpoint to get a user profile by ID.
});
Set Up API Documentation with Swagger

javascript
Copy code
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Implement Swagger API documentation setup.
Implement an Email Notification System

javascript
Copy code
const nodemailer = require('nodemailer');
function sendEmail(to, subject, text) {
    // Implement email sending functionality with nodemailer.
    const transporter = nodemailer.createTransport({ /* SMTP configuration */ });
    return transporter.sendMail({ to, subject, text });
}
Create a Rate Limiter Middleware for Login

javascript
Copy code
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts from this IP, please try again later.'
});
app.post('/login', loginLimiter, (req, res) => {
    // Implement login with rate limiting.
});
Implement Basic Role-Based Authorization

javascript
Copy code
const express = require('express');
const app = express();
function checkRole(role) {
    return (req, res, next) => {
        // Implement role-based authorization middleware.
    };
}
app.get('/admin', checkRole('admin'), (req, res) => {
    // Admin-only endpoint.
});
Create a Pagination for MongoDB Queries

javascript
Copy code
const express = require('express');
const app = express();
const Item = require('./models/item'); // Assume Item model is defined

app.get('/items', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const items = await Item.find().skip((page - 1) * limit).limit(limit);
    res.json(items);
});
// Implement pagination for MongoDB queries.
Add Validation for Request Data

javascript
Copy code
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.post('/data', [
    body('name').isString().notEmpty(),
    body('email').isEmail()
], (req, res) => {
    const errors = validationResult(req);
    // Implement validation and handle errors.
});
Create a User Authentication System with JWT

javascript
Copy code
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.post('/login', (req, res) => {
    // Implement user authentication and JWT token issuance.
});
Implement a Custom Error Handling Middleware

javascript
Copy code
const express = require('express');
const app = express();
app.use((err, req, res, next) => {
    // Implement custom error handling middleware.
    res.status(500).json({ message: err.message });
});
Create a Basic To-Do List Application

javascript
Copy code
const express = require('express');
const app = express();
app.get('/todos', (req, res) => {
    // Implement endpoint to get a list of to-dos.
});
app.post('/todos', (req, res) => {
    // Implement endpoint to create a new to-do.
});
Implement User Profile Update Functionality

javascript
Copy code
const express = require('express');
const app = express();
app.put('/profile/:id', async (req, res) => {
    // Implement endpoint to update a user profile.
});
Add Basic Authentication for Routes

javascript
Copy code
const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
app.use(basicAuth({
    users: { 'admin': 'password' },
    challenge: true
}));
// Implement basic authentication for all routes.
Create a Basic Task Manager Application

javascript
Copy code
const express = require('express');
const app = express();
app.get('/tasks', (req, res) => {
    // Implement endpoint to get a list of tasks.
});
app.post('/tasks', (req, res) => {
    // Implement endpoint to create a new task.
});
Set Up a WebSocket Server

javascript
Copy code
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
wss.on('connection', ws => {
    ws.on('message', message => {
        // Implement WebSocket server logic.
    });
});
Implement an API with Query Parameter Filtering

javascript
Copy code
const express = require('express');
const app = express();
app.get('/items', async (req, res) => {
    const { category } = req.query;
    // Implement query parameter filtering in API.
});
Create a Simple API with Express and MongoDB

javascript
Copy code
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/item'); // Assume Item model is defined

app.get('/items', async (req, res) => {
    // Implement simple API to get items from MongoDB.
});
Add Basic Rate Limiting for API Endpoints

javascript
Copy code
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use('/api/', limiter);
// Implement rate limiting for API endpoints.
Create a Simple Blog with CRUD Operations

javascript
Copy code
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BlogPost = require('./models/blogPost'); // Assume BlogPost model is defined

app.post('/posts', async (req, res) => {
    // Implement endpoint to create a blog post.
});

app.get('/posts', async (req, res) => {
    // Implement endpoint to get blog posts.
});

app.put('/posts/:id', async (req, res) => {
    // Implement endpoint to update a blog post.
});

app.delete('/posts/:id', async (req, res) => {
    // Implement endpoint to delete a blog post.
});
Implement Basic Authentication with Passport.js

javascript
Copy code
const express = require('express');
const passport = require('passport');
const app = express();
app.use(passport.initialize());
// Implement basic authentication with Passport.js.
Create a Task List with User Authentication

javascript
Copy code
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/task'); // Assume Task model is defined
const User = require('./models/user'); // Assume User model is defined

app.post('/tasks', (req, res) => {
    // Implement task creation with user authentication.
});
Create an API Endpoint for User Registration

javascript
Copy code
const express = require('express');
const app = express();
app.post('/register', async (req, res) => {
    // Implement user registration endpoint.
});
Add Pagination to a MongoDB Query

javascript
Copy code
const express = require('express');
const app = express();
const Item = require('./models/item'); // Assume Item model is defined

app.get('/items', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const items = await Item.find().skip((page - 1) * limit).limit(limit);
    res.json(items);
});
// Implement pagination for MongoDB query.
Create a Simple Contact Form with Express

javascript
Copy code
const express = require('express');
const app = express();
app.post('/contact', (req, res) => {
    // Implement a simple contact form handling.
});
Implement a Basic Rate Limiter Middleware

javascript
Copy code
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);
Add Request Validation to a REST API

javascript
Copy code
const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
app.post('/items', [
    body('name').isString().notEmpty(),
    body('price').isNumeric()
], (req, res) => {
    // Implement request validation.
});
Create a Middleware for Request Timing

javascript
Copy code
const express = require('express');
const app = express();
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Request took ${duration}ms`);
    });
    next();
});
Set Up API Documentation with Swagger

javascript
Copy code
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Implement Swagger API documentation setup.
Implement a Basic User Authentication with JWT

javascript
Copy code
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.post('/login', (req, res) => {
    // Implement user authentication and JWT issuance.
});
Create a Simple MongoDB Aggregation Query

javascript
Copy code
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/item'); // Assume Item model is defined

app.get('/stats', async (req, res) => {
    const stats = await Item.aggregate([
        { $group: { _id: null, total: { $sum: '$price' } } }
    ]);
    res.json(stats);
});
Implement Token-Based Authentication with Express

javascript
Copy code
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.post('/login', (req, res) => {
    // Implement token-based authentication with JWT.
});
