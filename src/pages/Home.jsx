import React, { useState, useEffect } from "react";
import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await client.getEntries({
          content_type: "movie",
        });
        setMovies(response.items);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies: {error.message}</div>;
  }

  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  const backgroundImageUrl =
    randomMovie?.fields?.backgroundImage?.fields?.file?.url;

  return (
    <div className="flex flex-col h-screen">
      <div
        className="relative w-2/3 h-1/2 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(https:${backgroundImageUrl})`
            : "",
        }}></div>
      <p className="text-white">TEXT</p>
    </div>
  );
}

export default Home;
