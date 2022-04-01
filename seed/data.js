import db from "../db/connection.js";
import Movie from "../model/IMDBTop100.js";
import IMDBTop100 from "./IMDBTop100.json" assert { type: "json" };

const insertData = async () => {
  db.dropDatabase();
  await Movie.insertMany(IMDBTop100);
  db.close();
};
insertData();
