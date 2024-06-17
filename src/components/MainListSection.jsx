import { useState, useEffect } from "react";
import { createClient } from "contentful";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

function MainListSection() {
  //------------------------------------------
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await client.getEntries({
          content_type: "movie",
        });
        //------------------------------------------------------------------------------------------

        console.log("First item structure:", response.items[0]);

        //------------------------------------------------------------------------------------------

        setMovies(response.items);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const isLoading = movies.length === 0;

  function renderStars(rating) {
    const filledStars = Math.round(rating);
    const filledStarIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="green"
        className="size-5">
        <path
          fillRule="evenodd"
          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
          clipRule="evenodd"
        />
      </svg>
    );

    return (
      <div className="flex">
        {Array(filledStars)
          .fill()
          .map((_, i) => (
            <span key={`filled-${i}`}>{filledStarIcon}</span>
          ))}
      </div>
    );
  }

  const uniqueGenres = new Set();

  //------------------------------------------
  return (
    <div className="bg-neutral-900 pb-20 flex justify-center">
      <section className="bg-neutral-900 pb-20 flex w-[976px] justify-center">
        <main className="flow-root w-[630px]">
          <div>
            <h4 className="float-left uppercase text-[12px] font-semi text-slate-400 tracking-wide pt-12 pb-2 tracking-[.15em] ">
              Popular movies this week
            </h4>
            <p className="float-right -mr[600px] uppercase text-[10px] font-semi text-slate-400 tracking-wide pt-12 pb-1 tracking-[.15em] cursor-pointer hover:text-sky-500 ">
              more
            </p>
            <hr className=" float-center w-[630px] h-px my-px bg-slate-400"></hr>
          </div>

          <div className="float-left w-[630px]">
            {isLoading ? (
              <p>Loading movies...</p>
            ) : (
              <ul className="flex flex-col divide-y divide-slate-400">
                {movies.map((movie, index) => (
                  <li className="flex items-center pt-5 pb-10" key={index}>
                    <img
                      className="shadow-md rounded w-[76px] h-[111px] cursor-pointer hover:border-[3px] border-green-600"
                      src={movie.fields.poster.fields.file.url}
                    />
                    <div className="">
                      <div className="flow-root">
                        <h2 className=" float-left align-top font-serif text-slate-50 text-[25px] font-semibold pl-4 hover:text-sky-500 cursor-pointer shrink-0">
                          {movie.fields.title}
                        </h2>
                        <time className="float-left pl-4 uppercase text-[20px] font-light text-slate-400 tracking-wide pt-1 pb-2 tracking-[.15em] ">
                          {new Date(
                            movie.fields.releaseDate
                          ).toLocaleDateString(undefined, { year: "numeric" })}
                        </time>
                      </div>
                      <div className="line-clamp-3 uppercase text-[12px] font-semi text-slate-400 tracking-wide pl-4 pb-2 tracking-[.15em] ">
                        Directed by {movie.fields.director}
                      </div>
                      <div className=" text-[12px] font-semi text-slate-400 tracking-wide pl-4 pb-2 tracking-[.15em] ">
                        {movie.fields.genre.join(", ")}
                      </div>

                      <div className="flex">
                        <div className="flex flex-row pl-4">
                          {renderStars(movie.fields.rating)}
                        </div>
                        <div className="flex flex-row items-end uppercase pl-1 text-slate-400 text-[9px]">
                          Average rating
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>

        <aside className="flow-root w-[230px] ml-[116px]">
          <div>
            <h4 className="float-left uppercase text-[12px] font-semi text-slate-400 tracking-wide pt-12 pb-2 tracking-[.15em] ">
              Search by genre
            </h4>
            <p className="float-right uppercase text-[10px] font-semi text-slate-400 tracking-wide pt-12 pb-1 tracking-[.15em] cursor-pointer hover:text-sky-500 ">
              more
            </p>
            <hr className=" float-center w-[230px] h-px my-px bg-slate-400"></hr>
          </div>

          <div className="w-[230px] ">
            {isLoading ? (
              <p>Loading movies...</p>
            ) : (
              <ul className="grid gap-2 grid-cols-3 grid-rows-5 w-max w-[230px]  rounded cursor-pointer hover:border-[3px] border-green-600">
                {movies.forEach((movie) => {
                  movie.fields.genre.forEach((genre) => {
                    uniqueGenres.add(genre);
                  });
                })}
                {Array.from(uniqueGenres).map((genre, index) => (
                  <li
                    className="flex items-center bg-slate-600 rounded"
                    key={index}>
                    <div className="flow-root">
                      <div className="text-[12px] font-semi text-slate-400 tracking-wide pb-2 tracking-[.15em] ">
                        {genre}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default MainListSection;
