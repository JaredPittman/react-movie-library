import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const { movieList } = useContext(GlobalContext);
  console.log(movieList);
  return (
    <div>
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <div key={item.Year}>
              <img src={item.Poster} alt="Movie Poster" />
              <p>{item.Title}</p>
              <p>{item.Year}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default MovieList;
