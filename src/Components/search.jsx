import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Container, Button, Input } from "@chakra-ui/react";

const Search = () => {
  const { searchParam, handleOnChange, handleSubmit } =
    useContext(GlobalContext);

  return (
    <Container>
      <Input
        borderRadius={15}
        borderColor={"black"}
        textColor={"green.600"}
        fontWeight={"bold"}
        name="search"
        value={searchParam}
        onChange={handleOnChange}
        placeholder="Enter a year you wish to see the movies from!"
      />
      <Button
        borderRadius={15}
        backgroundColor={"blackAlpha.300"}
        paddingLeft={15}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Container>
  );
};

export default Search;
