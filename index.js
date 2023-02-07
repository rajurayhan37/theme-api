const express = require('express');
const session = require("express-session");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}));
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true,
  cookie: {  
    secure: false,        
    maxAge: 3600000
  }
}));

app.get('/api/:theme', (req, res) => {
  if(req.params.theme == 'day') {
    res.status(200).send({theme: 'night', status: false});
  }else {
    res.status(200).send({theme: 'day', status: true});
  }
});

app.use((req, res) => {
    res.status(404).send({ error: 'Not Found' });
});  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
