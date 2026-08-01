const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  
  database: 'hotel_db'
});

db.connect(err => {
  if(err) {
    console.log("DB Error: ", err);
  } else {
    console.log("MySQL Connected!");
  }
});

app.get('/', (req, res) => {
  res.send("Hotel Backend Server Running ✅");
});

app.get('/api/rooms', (req, res) => {
  db.query('SELECT * FROM rooms', (err, result) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});