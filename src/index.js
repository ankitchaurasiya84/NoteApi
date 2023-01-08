const dotenv = require('dotenv');

dotenv.config({path: './.env'});
const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

app.use(express.json());
app.use((req, res, next) => {
  console.log("http method--" + req.method + ", url-" + req.url);
  next();
});
app.use("/users", userRouter);
app.use("/note", noteRouter);
mongoose.connect(process.env.DB_KEY)
  .then(() => {
    app.listen(5000, () => {
      console.log(" SERVER started port no 5000");
    });
  }).catch((Error) => {
    console.log(Error);
  })