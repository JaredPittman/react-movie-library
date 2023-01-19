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
    </div>
  );
};

export default Search;
