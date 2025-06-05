import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors";
const app = express();
app.use((cors));
dotenv.config();
const port = process.env.PORT || 4000;
const MongoDB = process.env.MongoDB_URI;

// app.get("/", (req, res) => {
//   res.send("Hello from backend root!");
// });

app.use("/book",bookRoute);

try{
  mongoose.connect(MongoDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("Connected");
}
catch(error){
  console.log("Error",error);
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
