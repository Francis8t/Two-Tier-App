const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

// Database connection
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM messages');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
        
app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
