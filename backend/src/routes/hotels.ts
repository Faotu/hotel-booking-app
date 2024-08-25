import express, { Request, Response } from "express";
import multer from "multer";

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
    } catch (error) {}
  }
);
