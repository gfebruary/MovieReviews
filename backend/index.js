import express from "express";
import cors from "cors";
import sql from "./db.js";
import fs from "fs/promises";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello movie fans!");
});

app.get("/api/v1/movies", async (req, res) => {
  try {
    const movies = await sql`SELECT * FROM movies`;
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/v1/movies/:video_id", async (req, res) => {
  const { video_id } = req.params;
  try {
    const movie =
      await sql`SELECT video_id FROM movies WHERE video_id = ${video_id}`;
    if (movie.length === 0) {
      return res.status(404).json({ error: "Trailer not found" });
    }
    res.status(200).json(movie[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST endpoint to insert movies from JSON file into database
// command in terminal: curl -X POST http://localhost:8000/api/v1/movies
app.post("/api/v1/movies", async (req, res) => {
  try {
    // Read movies.json file
    const rawData = await fs.readFile("../src/movies.json");
    const movies = JSON.parse(rawData);

    // Insert each movie into the database
    for (const movie of movies) {
      await sql`
        INSERT INTO movies (
          movieID, title, release_date, director, description, genre,
          actors, rating, posterUrl, backgroundImageUrl
        ) VALUES (
          ${movie.movieID}, ${movie.title}, ${movie.release_date},
          ${movie.director}, ${movie.description}, ${movie.genre}, ${movie.actors},
          ${movie.rating}, ${movie.posterUrl}, ${movie.backgroundImageUrl}
        )
      `;
    }
    res.status(201).json({ message: "Movies inserted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
