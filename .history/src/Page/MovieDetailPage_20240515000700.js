import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../Config";

// https://api.themoviedb.org/3/find/{external_id}
const MovieDetailPage = () => {
  const param = useParams();
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/find/${param}`,
    fetcher
  );
  const movie = data?.results || [];
  console.log(param);
  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
