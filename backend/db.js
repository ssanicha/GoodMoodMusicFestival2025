const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'internsusunapuggad99Rakmuonna',
  database: 'goodmood_festival'
});

db.connect((err) => {
  if (err) {
    console.log('❌ ERROR:', err.message);
  } else {
    console.log('✅ MySQL connected');
  }
});

module.exports = db;
