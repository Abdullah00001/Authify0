import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import configCloudinary from '../configs/cloudinary.configs.js';

configCloudinary();

const uploadToCloudinary = async imagePath => {
  try {
    if (!imagePath) {
      return null;
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(imagePath, {
      resource_type: 'auto',
    });
    fs.unlinkSync(imagePath);
    return cloudinaryResponse.url;
  } catch (error) {
    console.error(`Image Upload Failed\nMessage:${error.message}`);
    fs.unlinkSync(imagePath);
  }
};

export default uploadToCloudinary;
