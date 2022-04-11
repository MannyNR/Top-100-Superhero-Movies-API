import Movie from "../model/IMDBTop100.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (movie) {
      return res.json(movie);
    }
    res.status(400).json({ message: "Movie not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMovie = async (req, res) => {
  try {
    let movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  let { id } = req.params;
  let movie = await Movie.findByIdAndUpdate(id, req.body);
  res.status(200).json(movie);
};

export const deleteMovie = async (req, res) => {
  try {
    let { id } = req.params;
    let deleted = await Movie.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Movie deleted!");
    }
    throw new Error("Movie not found!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
