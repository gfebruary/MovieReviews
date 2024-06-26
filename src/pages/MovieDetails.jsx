import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainListSection from "../components/MainListSection";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movieId]);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const movie = movies.find((movie) => movie.id.toString() === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const backgroundImageUrl = movie.backgroundimageurl;
  const posterImageUrl = movie.posterurl;
  const description = movie.description;
  const releaseYear = new Date(movie.release_date).getFullYear().toString();
  const director = movie.director;
  const genres = movie.genre;
  const cast = movie.actors;
  const trailer = movie.video_id;

  const handleMouseEnter = () => {
    setShowTrailer(true);
  };

  const handleMouseLeave = () => {
    setShowTrailer(false);
  };

  // Split the cast string into an array of actors
  const actorsArray = cast.split(",").map((actor) => actor.trim());

  return (
    <div className="flex flex-col h-full mb-[300px] pb-20">
      <div
        className="absolute w-full h-1/2 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(${backgroundImageUrl})`
            : "",
        }}></div>
      <div className="mt-[25vw] flex flex-col items-center mt-4 px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto">
          {posterImageUrl && (
            <div
              className="w-full md:w-1/2 relative mb-4 md:mb-0 "
              style={{ maxWidth: "350px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <img
                src={`https:${posterImageUrl}`}
                alt="Movie Poster"
                className="w-full h-auto"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              {showTrailer && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https:${trailer}`}
                  frameBorder="0"
                  allowFullScreen></iframe>
              )}
            </div>
          )}
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-lg text-gray-500 mb-4">
              {releaseYear} &bull; Directed by {director}
            </p>
            <p className="text-lg mb-4 text-gray-500">{genres}</p>
            <p className="text-lg mb-4">{description}</p>
            <div style={{ marginBottom: "3rem" }}>
              <h2 className="text-2xl font-bold mb-2">Cast</h2>
              <ul className="list-none pl-0 grid gap-1 grid-cols-3 grid-rows-3">
                {actorsArray.map((actor, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`/actors/${actor}`}
                      className=" px-2 py-1 bg-slate-700 rounded cursor-pointer border-[3px] border-green-600 border-opacity-0 hover:border-opacity-100 rounded inline-block text-[13px] font-semi text-slate-400 tracking-wide">
                      {actor}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <MainListSection />
      </div>
    </div>
  );
};

export default MovieDetails;
