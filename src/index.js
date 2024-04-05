const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    user: 'dbuser',
    host: process.env.DB_HOST,
    database: 'sample-db',
    password: 'secretpassword',
    port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM items;');
    res.send(result.rows);
});

app.get('/item/:id', async (req, res) => {
    const result = await pool.query('SELECT * FROM items WHERE id = $1;', [req.params.id]);
    res.send(result.rows);
});

app.get('/average', async (req, res) => {
    const result = await pool.query('SELECT AVG(value) AS average_value FROM items;');
    res.send(result.rows);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
