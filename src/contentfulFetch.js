import pkg from "contentful";
const { createClient } = pkg;
import fs from "fs";

const client = createClient({
  space: "aC6qiLCHz13DT9K6T_Of1auU2GSIqLzBelz9gyNO02A",
  accessToken: "zpbz9458pxzp",
});

async function fetchData() {
  try {
    const entries = await client.getEntries({
      content_type: "movie",
    });

    const transformedData = entries.items.map((entry) => ({
      movieID: entry.fields.MovieID,
      title: entry.fields.title,
      release_date: entry.fields.releaseDate,
      director: entry.fields.director,
      description: entry.fields.description.content[0].content[0].value,
      genre: entry.fields.genre,
      actors: entry.fields.cast,
      rating: entry.fields.rating,
      posterUrl: entry.fields.poster.fields.file.url,
      backgroundImageUrl: entry.fields.backgroundImage.fields.file.url,
    }));

    fs.writeFileSync("movies.json", JSON.stringify(transformedData, null, 2));
    console.log("Data successfully written to movies.json");
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
  }
}

fetchData();
