import { v2 as cloudinary } from 'cloudinary';
import { ENV } from "../config/env.js";

cloudinary.config({ 
  cloud_name: ENV.CLOUDINARY_CLOUD_NAME, 
  api_key: ENV.CLOUDINARY_API_KEY, 
  api_secret: ENV.CLOUDINARY_API_SECRET,
  secure: true // Ensures all generated URLs use HTTPS
});


export default cloudinary;