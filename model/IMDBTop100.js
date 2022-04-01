import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Movie = new Schema({
  Position: { type: Number },
  Const: { type: String },
  Created: { type: Date },
  Modified: { type: Date },
  Title: { type: String },
  URL: { type: String },
  Title_Type: { type: String },
  IMDb_Rating: { type: Number },
  Runtime_mins: { type: Number },
  Year: { type: Number },
  Genres: { type: String },
  Num_Votes: { type: Number },
  Release_Date: { type: Date },
  Directors: { type: String },
});

export default mongoose.model("movies", Movie);
