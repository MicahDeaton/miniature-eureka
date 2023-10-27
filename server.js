const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public\assets'));

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
