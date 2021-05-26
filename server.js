const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hi!");
});

app.listen(PORT, (err) => {
  if (err) console.log("err", err);
  console.log("successfully connected to port ", PORT);
});
