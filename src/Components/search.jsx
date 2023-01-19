import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div>
      <input
        name="search"
        value={searchParam}
        onChange={handleOnChange}
        placeholder="Enter movie keyword here"
      />
      <button onClick={handleSubmit}>Search</button>
      <br></br>
      <p>Enter a year you wish to see the movies from!</p>
    </div>
  );
};

export default Search;
