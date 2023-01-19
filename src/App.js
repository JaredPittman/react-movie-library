import "./App.css";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchParam] = useState("");
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setSearchParam(event.target.value);
  };

  return (
    <div className="App">
      <Search handleOnChange={handleOnChange} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
