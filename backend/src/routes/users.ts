import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();
import jwt from "jsonwebtoken";

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign({ userId: user.id });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong" });
  }
});
