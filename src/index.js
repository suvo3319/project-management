import dotenv from "dotenv";
import app from "./app.js";
import ConnectDB from "./db/index.js";
import { error } from "console";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on the url http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error", error);
    process.exit(1);
  });
