import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);

  // this useEffect ensures, that the page scrolls upwards as soon as the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const movie = movies.find((movie) => movie.sys.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const backgroundImageUrl = movie?.fields?.backgroundImage?.fields?.file?.url;
  const posterImageUrl = movie?.fields?.poster?.fields?.file?.url;
  const description =
    movie?.fields?.description?.content?.[0]?.content?.[0]?.value;
  const releaseYear = movie?.fields?.releaseDate?.split("-")[0];
  const director = movie?.fields?.director;
  const genres = movie?.fields?.genre?.join(", ");
  const castList = movie?.fields?.cast?.split("\n").map((cast, index) => (
    <li key={index} className="mb-1">
      {cast}
    </li>
  ));

  const trailerUrl = movie?.fields?.trailer?.fields?.file?.details?.url;

  const handleMouseEnter = () => {
    setShowTrailer(true);
  };

  const handleMouseLeave = () => {
    setShowTrailer(false);
  };

  return (
    <div className="flex flex-col h-screen mb-[300px] pb-20">
      <div
        className="absolute w-full h-1/2 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(https:${backgroundImageUrl})`
            : "",
        }}
      ></div>
      <div className="mt-[25vw] flex flex-col items-center mt-4 px-4 relative">
        <div className="flex w-full max-w-4xl mx-auto">
          {posterImageUrl && (
            // trailer is played when hovering over poster
            <div
              className="w-1/3 relative"
              style={{ maxWidth: "250px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`https:${posterImageUrl}`}
                alt="Movie Poster"
                className="w-full h-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {showTrailer && (
                <iframe
                  className="absolute top-0 left-0 w-full h-[100%]"
                  src={`https://www.youtube.com/embed/_YUzQa_1RCE?autoplay=1&mute=1&cc_load_policy=0&controls=1`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
              {/* <p className="uppercase absolute bottom-0 left-0 right-0 px-2 py-24 bg-black bg-opacity-50 text-white">
                Watch Trailer
              </p> */}
            </div>
          )}
          <div className="w-2/3 pl-6">
            <h1 className="text-4xl font-bold mb-2">{movie.fields.title}</h1>
            <p className="text-lg text-gray-500 mb-4">
              {releaseYear} &bull; Directed by {director}
            </p>
            <p className="text-lg mb-4  text-gray-500">{genres}</p>
            <p className="text-lg mb-4">{description}</p>
            <div style={{ marginBottom: "3rem" }}>
              <h2 className="text-2xl font-bold mb-2">Cast</h2>
              <ul className="list-none pl-0">{castList}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
