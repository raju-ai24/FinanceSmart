const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "profile-images",
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => {
      const timestamp = Date.now();
      const originalName = file.originalname.split(".")[0];
      return `${timestamp}-${originalName}`;
    },
  },
});

//File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG and PNG are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
// This middleware will handle the file upload for the profile image using Cloudinary
