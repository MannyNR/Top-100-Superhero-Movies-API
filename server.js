import db from "./db/connection.js";

import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

db.on("connected", () => {
  console.clear();
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(
          `Express server is running in PRODUCTION ENVIROMENT on port ${PORT}\n\n`
        )
      : console.log(
          `Express server is running in DEVELOPMENT ENVIROMENT on http://localhost:${PORT}`
        );
  });
});