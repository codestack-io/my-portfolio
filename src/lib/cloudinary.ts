import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadImage(fileUri: string, folderName = "portfolio-projects"): Promise<string> {
  // If credentials are not set, return the original input (mock behavior)
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.warn("WARNING: Cloudinary credentials are not configured. Returning local image representation.");
    return fileUri;
  }

  try {
    const uploadResult = await cloudinary.uploader.upload(fileUri, {
      folder: folderName,
      resource_type: "auto",
    });
    return uploadResult.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}
