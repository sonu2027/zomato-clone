import app from "./src/app.js";
import connectDB from "./src/connectDB/connectDB.js";
import dotenv from "dotenv"

dotenv.config({
  path: "./.env",
});

connectDB().then(() => {
  app.get("/", (req, res) => {
    res
      .status(200)
      .json({ names: "sonu mondal", email: "sonu.mondal.2027@gmail.com" });
  });

  app.get("/project", (req, res) => {
    res.send("<h1>no projects</h1>");
  });

  app.listen(process.env.PORT, () => {
    console.log(`server is running at http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
