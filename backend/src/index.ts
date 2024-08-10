import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import mongoose from "mongoose";
import userRoutes from "./routes/users";

mongoose.connect(process.env.MONGOBD_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/api/test", async (req: Request, res: Response) => {
//   res.json({ message: "Hey Faotu, this is from express" });
// });

app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("server is running on local:5000");
});
