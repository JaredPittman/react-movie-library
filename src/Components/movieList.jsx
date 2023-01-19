import React from "react";
import { useQuery } from "react-query";

const MovieList = ({ searchQuery }) => {
  const { data, isLoading, isError } = useQuery(
    ["movieList", searchQuery],
    () =>
      fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=748a81f9`).then(
        (res) => res.json()
      )
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error, could not load movies.</div>;

  const movies = data.Search;

  return (
    <div>
      {movies &&
        movies.map((item) => (
          <div key={`${item.Year}-${item.Title}`}>
            <img src={item.Poster} alt="Movie Poster" />
            <p>{item.Title}</p>
            <p>{item.Year}</p>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
