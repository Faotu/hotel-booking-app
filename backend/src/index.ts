import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";

import { v2 as cloudinary } from "cloudinary";
import myHotelRoutes from "./routes/my-hotels";
import path from "path";

cloudinary.config({
  // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_name: "dfuauemak",
  api_key: "881511479721179",
  // api_key: process.env.CLOUDINARY_API_KEY,
  // api_secret: process.env.CLOUDINARY_API_SECRET,
  api_secret: "VVwNt8DdPEuwhOoBVxQFJf3IlOg",
});

mongoose.connect(process.env.MONGOBD_CONNECTION_STRING as string);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// app.get("/api/test", async (req: Request, res: Response) => {
//   res.json({ message: "Hey Faotu, this is from express" });
// });

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelRoutes);
// app.use("/api/hotels", hotelRoutes);
// app.use("/api/my-bookings", bookingRoutes);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});
