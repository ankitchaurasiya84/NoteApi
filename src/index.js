const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const cors = require("cors");
const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);


app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log("http method--" + req.method + ", url-" + req.url);
  next();
});
app.use("/users", userRouter);
app.use("/note", noteRouter);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_KEY)
  .then(() => {
    app.listen(PORT, () => {
      console.log(" SERVER started port no : "+ PORT);
    });
  }).catch((Error) => {
    console.log(Error);
  })