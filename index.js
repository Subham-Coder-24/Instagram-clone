const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
const cors = require("cors");
connectDatabase(); 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.get("/", (req, res) => {
  res.send({ message: "Server is working fine" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});