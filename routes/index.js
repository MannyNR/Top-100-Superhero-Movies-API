import { Router } from "express";
import IMDBTop100Routes from "./IMDBTop100.js";

const router = Router();

router.get("/", (req, res) => res.send("Router accessing the API root"));
router.use("/", IMDBTop100Routes);

export default router;
