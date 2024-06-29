import express from "express";
import path from 'path'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 2024


app.use("/info", (req, res) => {
    res.send('Hello, World!');
})

// Define your allowed origins
const allowedOrigins = [
    'https://reactapp-m3tu.onrender.com'
];

// Set up CORS middleware
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin)
            callback(null, true);
        else
            callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Specify allowed headers
    credentials: true // Allow credentials if needed
};


// Middleware to set MIME types
app.use((req, res, next) => {
    if (req.path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
    } else if (req.path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    } else if (req.path.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html');
    }
    next();
});

app.use(cors(corsOptions));


app.use(express.static(path.join(process.cwd(), './client/dist')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(process.cwd(), './client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App running on Port : ${PORT}`)
})