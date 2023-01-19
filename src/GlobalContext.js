import { createContext, useState } from "react";

export const GlobalContext = createContext({
  searchParam: "",
  handleOnChange: () => {},
  handleSubmit: () => {},
  movieList: [],
  loading: false,
});

const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState(" ");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState([]);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchParam}&apikey=748a81f9`
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      setMovieList(data.Search);
      setLoading(false);
    }
  };

  const contextValue = {
    searchParam,
    handleOnChange,
    handleSubmit,
    movieList,
    loading,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
