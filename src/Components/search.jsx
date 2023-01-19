const Search = ({ handleOnChange }) => {
  return (
    <div>
      <input
        name="search"
        onChange={(event) => handleOnChange(event)}
        placeholder="Enter movie keyword here"
      />
      {/* <button onClick={handleSubmit}>Search</button> */}
      <span>Enter a year you wish to see the movies from!</span>
    </div>
  );
};

export default Search;
