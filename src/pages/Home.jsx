import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ movies }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(false);
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
    const shuffledMovies = [...movies];
    for (let i = shuffledMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledMovies[i], shuffledMovies[j]] = [
        shuffledMovies[j],
        shuffledMovies[i],
      ];
    }
    return shuffledMovies.slice(0, count);
  };

  const randomMovies = getRandomMovies(6);

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

      <div className="flex justify-center mt-8">
        {randomMovies.map((movie, index) => {
          const coverImageUrl = movie?.fields?.poster?.fields?.file?.url;
          console.log(`Movie ${index + 1}:`, movie);
          return (
            <div key={index} className="flex items-center justify-center p-4">
              {coverImageUrl ? (
                <Link to={`/movies/${movie.sys.id}`}>
                  <img
                    src={`https:${coverImageUrl}`}
                    alt={`Movie Cover ${index + 1}`}
                    className="h-48 w-auto"
                  />
                </Link>
              ) : (
                <div className="text-white">No Image Available</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
