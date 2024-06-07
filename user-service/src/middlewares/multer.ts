import multer from "multer";
import cloudinary from 'cloudinary';
import fs from 'fs';
import { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../.env') });

const storage = multer.diskStorage({
  destination: '../../src/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 }
});



const postUpload = multer({ storage: storage });

const cloudin = cloudinary.v2;
cloudin.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export const profileImgUpload = async (req: Request, res: Response, next: NextFunction) => {
  upload.single("image")(req, res, async (err) => {
    if (err) {
      console.log(err);

    }
    try {
      const result = await cloudin.uploader.upload(req.file.path, {
        folder: "userimg"
      })
      req.body.image = result.secure_url;
      fs.unlink(req.file.path, (unlinker) => {
        if (unlinker) {
          console.log('Error, deleting local file', unlinker);
        }
      })
      next()
    } catch (error) {
      console.log(error);

    }
  })
}