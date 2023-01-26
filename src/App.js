import "./App.css";
import Search from "./Components/search";
import MovieList from "./Components/movieList";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Search />
        <MovieList />
      </ChakraProvider>
    </div>
  );
}

export default App;
