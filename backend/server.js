const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("assets"));

const path = require('path');
app.use(express.static(path.join(__dirname, '..')));


// register API
app.post('/register', (req, res) => {
const { name, email,phone } = req.body;
// console.log(req.body);
console.log('BODY:', req.body);

const sql = 'INSERT INTO registrations (name, email,phone) VALUES (?, ?, ?)';
db.query(sql, [name, email, phone], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ message: 'Registered successfully' });
  });
});

// confirm
app.get('/confirm', (req, res) => {
  res.sendFile(path.join(__dirname, '../confirm.html'));
});

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});

app.use((req, res, next) => {
  console.log('➡️', req.method, req.url);
  next();
});

