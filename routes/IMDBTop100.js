import { Router } from "express";
import * as controllers from "../controller/movies.js";

const router = Router();
router.get("/movies", controllers.getMovies);
router.get("/movies/:id", controllers.getMovie);
router.post("/movies", controllers.createMovie);
router.put("/movies/:id", controllers.updateMovie);
router.delete("/movies/:id", controllers.deleteMovie);

export default router;
