import express, { Request, Response } from "express";
import multer from "multer";
import cloudinary from "cloudinary";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //file is 5MB
  },
});

router.post(
  "/",
  upload.array("imageFiles", 7),
  async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHotel = req.body;

      //upload logic
      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURL = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURL);
        return res.url;
      });

      const imageUrls = await Promise.all(uploadPromises);

      //if uploaded files are successful then add urls to the new hotel
    } catch (error) {
      console.log("Error creating new Hotel", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);
