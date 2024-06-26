import { Link } from "react-router-dom";
import HighlightBox from "../components/HighlightBox";
import MainListSection from "../components/MainListSection";
import Spinner from "../components/Spinner";

function Home({ movies }) {
  if (!movies || movies.length === 0) {
    return <Spinner />;
  }

  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  const backgroundImageUrl = randomMovie?.backgroundimageurl;

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
    <div className="flex flex-col min-h-screen">
      <div
        className=" relative w-full sm:w-2/3 min-h-96 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(${backgroundImageUrl})`
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

      <div className="flex-grow flex justify-center mt-8">
        <div className="flex flex-wrap justify-center max-w-screen-lg">
          {randomMovies.map((movie, index) => {
            const coverImageUrl = movie.posterurl;
            console.log(`Movie ${index + 1}:`, movie);
            return (
              <div key={index} className="p-3">
                {coverImageUrl ? (
                  <Link to={`/movies/${movie.id}`}>
                    <img
                      src={coverImageUrl}
                      alt={`Movie Cover ${index + 1}`}
                      className="h-48 w-auto"
                      style={{
                        transition: "box-shadow 0.1s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.boxShadow = "0 0 0 3px rgb(85, 141, 1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
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
      <HighlightBox />
      <MainListSection />
    </div>
  );
}

export default Home;
