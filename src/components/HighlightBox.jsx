function HighlightBox() {
  return (
    <section className="bg-neutral-900 pb-20">
      <div className="flex flex-col justify-center items-center ">
        <div>
          <h4 className="uppercase text-[12px] font-semi text-slate-400 tracking-wide pt-12 pb-2 tracking-[.15em] ">
            Moviedatabase lets you...
          </h4>
          <div className="flex justify-center">
            <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-max">
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-green-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path
                    fillRule="evenodd"
                    d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Keep track of every film you’ve ever watched (or just start
                  from the day you join)
                </p>
              </li>
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-orange-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z" />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Show some love for your favorite films, lists and reviews with
                  a “like”
                </p>
              </li>
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-sky-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Write and share reviews, and follow friends and other members
                  to read theirs
                </p>
              </li>
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-green-600 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Rate each film on a five-star scale (with halves) to record
                  and share your reaction
                </p>
              </li>
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-orange-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Keep a diary of your film watching (and upgrade to Pro for
                  comprehensive stats)
                </p>
              </li>
              <li className="group flex items-center bg-slate-700 p-3 rounded h-28 w-80 hover:bg-sky-500 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#8fa5bc"
                  className="size-28 group-hover:fill-slate-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 2A2.25 2.25 0 0 0 2 4.25v2.5A2.25 2.25 0 0 0 4.25 9h2.5A2.25 2.25 0 0 0 9 6.75v-2.5A2.25 2.25 0 0 0 6.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 2 13.25v2.5A2.25 2.25 0 0 0 4.25 18h2.5A2.25 2.25 0 0 0 9 15.75v-2.5A2.25 2.25 0 0 0 6.75 11h-2.5Zm9-9A2.25 2.25 0 0 0 11 4.25v2.5A2.25 2.25 0 0 0 13.25 9h2.5A2.25 2.25 0 0 0 18 6.75v-2.5A2.25 2.25 0 0 0 15.75 2h-2.5Zm0 9A2.25 2.25 0 0 0 11 13.25v2.5A2.25 2.25 0 0 0 13.25 18h2.5A2.25 2.25 0 0 0 18 15.75v-2.5A2.25 2.25 0 0 0 15.75 11h-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-400 text-[14px] font-semibold pl-4 leading-tight group-hover:text-slate-50">
                  Compile and share lists of films on any topic and keep a
                  watchlist of films to see
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightBox;
