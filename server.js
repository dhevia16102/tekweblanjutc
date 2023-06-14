const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang Anda inginkan
const bodyParser = require('body-parser');

// Menggunakan middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/endpoint', (req, res) => {
    // Logika penanganan permintaan
    res.send('Hello, GET request!');
  });  

app.post('/endpoint', (req, res) => {
    // Logika penanganan permintaan
    res.send('Hello, POST request!');
  });
  
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
