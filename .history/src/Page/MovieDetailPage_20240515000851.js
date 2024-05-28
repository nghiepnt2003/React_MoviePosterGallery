import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../Config";

// https://api.themoviedb.org/3/find/{external_id}
const MovieDetailPage = () => {
  const { movieID } = useParams();
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/find/${movieID}?api_key=1131ba05247a46f0af67e1e0ed316977`,
    fetcher
  );
  const movie = data?.results || [];
  console.log(movie);
  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
