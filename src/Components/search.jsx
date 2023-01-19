import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit, handleClear } =
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
      <span>Enter a year you wish to see the movies from!</span>
    </div>
  );
};

export default Search;
