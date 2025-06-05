import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); 

const port = process.env.PORT || 4000;
const MongoDB = process.env.MongoDB_URI;

app.get("/", (req, res) => {
  res.send("Hello from backend root!");
});

app.use("/book", bookRoute);

const startServer = async () => {
  try {
    await mongoose.connect(MongoDB);
    console.log("MongoDB connected");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();