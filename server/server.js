const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const config = require("./config/key");
const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/api/user", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("hi!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) console.log("err", err);
  console.log("successfully connected to port ", PORT);
});
