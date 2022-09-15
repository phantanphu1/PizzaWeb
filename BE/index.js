const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const addpizzaRouter = require("./routes/addpizza");
const { Router } = require("express");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log("Connect to mongoose db");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));
//Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/addpizza", addpizzaRouter);

app.listen(8000, () => {
    console.log("sever is running");
});

