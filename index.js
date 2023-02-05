const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(cors());

app.get('/api/theme/:theme', (req, res) => {
    if(req.params.theme == 'day') {
        res.status(200).send({ status: false });
    }else if(req.params.theme == 'night') {
        res.status(200).send({ status: true });
    }else {
        res.status(400).send({ error: 'Invalid theme!' });
    }
});

app.use((req, res) => {
    res.status(404).send({ error: 'Not Found' });
});  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
