import React from "react";
import watchlistImage from "../assets/watchlistthisjuneheader-0-640-0-360-crop-fill.jpg";
import watchlistImage1 from "../assets/img1.jpg";
import watchlistImage2 from "../assets/img2.jpg";
import watchlistImage3 from "../assets/img3.jpg";
import watchlistImage4 from "../assets/img4.jpg";
import watchlistImage5 from "../assets/img5.jpg";
import watchlistImage6 from "../assets/img6.jpg";

const Journal = () => {
  return (
    <div>
      <div className="pt-16"></div>
      <div className="min-h-[50vh] bg-slate-500 w-full flex items-center justify-center p-4 overflow-hidden">
        <div className="overflow-hidden">
          <img
            className="max-w-2/3 h-auto transform transition-transform duration-500 hover:scale-110"
            src={watchlistImage}
            alt="Watchlist"
          />
        </div>
        <span className="sm:w-1/3 md:w-1/3 ml-4 text-white text-2xl">
          Watchlist This! (June 2024). Our picks of under-the-radar gems from
          this month’s new releases. This edition includes star-crossed
          Senegalese lovers, a PTSD-stricken comedian, life-affirming vampires
          and one of the most important European chroniclers of our time.
        </span>
      </div>
      <div className="min-h-[50vh] bg-white w-full flex flex-wrap items-center justify-center p-4">
        {[
          watchlistImage1,
          watchlistImage2,
          watchlistImage3,
          watchlistImage4,
          watchlistImage5,
          watchlistImage6,
        ].map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex flex-col items-center">
              <img
                className="w-2/3 h-auto"
                src={image}
                alt={`Gallery image ${index + 1}`}
              />
              <p className="max-w-[60%] text-xl text-gray-700 my-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac venenatis turpis. Morbi quis luctus metus, at ultrices
                libero. Aenean vulputate, nunc at laoreet viverra, metus felis
                vehicula purus.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
