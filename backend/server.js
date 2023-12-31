const app = require("./app");
const connectDatabase = require("./Config/database");

const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

// Handle Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Shutting down server due to uncaught exception`);
  process.exit(1);
});

// Config fájl
dotenv.config({ path: "backend/config/config.env" });

//csatlakozas az adatbazishoz
connectDatabase();

//Cloudinary config beállítás
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle Unhandled Promise recetions
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
