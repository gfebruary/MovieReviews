import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { movieId } = useParams();

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

  return (
    <div className="flex flex-col h-screen">
      <div
        className="relative w-full h-1/2 bg-cover bg-top mx-auto"
        style={{
          backgroundImage: backgroundImageUrl
            ? `linear-gradient(to bottom, transparent, black), url(https:${backgroundImageUrl})`
            : "",
        }}></div>
      <div className="flex flex-col items-center mt-4 px-4">
        <div className="flex w-full max-w-4xl mx-auto">
          {posterImageUrl && (
            <div className="w-1/3">
              <img
                src={`https:${posterImageUrl}`}
                alt="Movie Poster"
                className="w-full h-auto"
              />
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
