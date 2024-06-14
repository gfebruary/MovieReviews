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

  const getRandomMovies = (count) => {
    const randomMovies = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      randomMovies.push(movies[randomIndex]);
    }
    return randomMovies;
  };
  return (
    <div className="flex flex-col h-screen">
      <div
        className="relative w-2/3 h-1/2 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(https:${backgroundImageUrl})`
            : "",
        }}></div>
      <div className="main-selling-point text-center">
        <p className="text-white text-3xl">Track films you’ve watched.</p>
        <p className="text-white text-3xl">Save those you want to see.</p>
        <p className="text-white text-3xl">Tell your friends what’s good.</p>
      </div>

      <div className="flex justify-center">
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold p-3 m-9 rounded">
          Get Started - It's Free
        </button>
      </div>

      <p className="text-gray-500 font-bold text-center">
        The social network for film lovers.
      </p>
      <br />
    </div>
  );
}

export default Home;
