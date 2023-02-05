const express = require('express');
const session = require("express-session");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(cors());
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: true
}));

app.get('/api/theme', (req, res) => {
    if(req.session.theme != null){
        req.session.theme = !req.session.theme;
    }else {
        req.session.theme = false;
    }
    res.status(200).send({ status: req.session.theme });
});

app.use((req, res) => {
    res.status(404).send({ error: 'Not Found' });
});  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
