const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("The port is running");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
