import db from "./db/connection.js";
import routes from "./routes/index.js";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

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
