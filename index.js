const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let storedData = null;

app.get("/api", (req, res) => {
  if (storedData === null) {
    storedData = false;
    res.send({ data: storedData });
  } else {
    storedData = !storedData;
    res.send({ data: storedData });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
