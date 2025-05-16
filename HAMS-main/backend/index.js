import express from "express";
import dotenv from "dotenv";
import dbconnect from "./db/DBconnection.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;
const dblink = process.env.MONGODB_URL;

dbconnect(dblink).then(() => {
  app.use("/user", userRouter);

  app.listen(port, () => {
    console.log(`APP listening on port : ${port}`);
  });
});
