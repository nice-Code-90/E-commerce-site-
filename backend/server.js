const app = require("./app");
const connectDatabase = require("./config/database");

const dotenv = require("dotenv");

// Config fájl
dotenv.config({ path: "backend/config/config.env" });

//csatlakozas az adatbazishoz
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle Unhandled Promise recetions
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
