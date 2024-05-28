import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../Config";

const Banner = () => {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=1131ba05247a46f0af67e1e0ed316977`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container pb-20">
      <div className="w-full h-full rounded-lg relative ">
        <div className="overlay absolute inset-0 bg-gradient-to-t rounded-lg from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        <img
          src="https://genk.mediacdn.vn/139269124445442048/2023/3/21/1-16789527941271488886901-1679413960731-16794139616321626370107.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute left-5 bottom-5 w-full text-white">
          <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>

          <div className="flex items-center gap-x-3 mb-8 ">
            <span className="px-4 py-2 border border-white rounded-md">
              Adventure
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Adventure
            </span>
            <span className="px-4 py-2 border border-white rounded-md">
              Adventure
            </span>
          </div>
          <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
            Watch now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
