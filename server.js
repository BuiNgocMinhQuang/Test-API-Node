require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

//config domain can asscess

// const corsOptions = {
//   origin: ["http://abc.com", ""],
//   optionsSuccessStatus: 200,
// };

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use(cors());

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello This Is Res");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog Page");
});

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log("Node API app is running on port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
