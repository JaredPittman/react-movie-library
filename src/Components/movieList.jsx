import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
// import { inputAnatomy } from "@chakra-ui/anatomy";
import { Text, Image, Container, SimpleGrid, Box } from "@chakra-ui/react";

const MovieList = () => {
  const { movieList } = useContext(GlobalContext);
  console.log(movieList);
  return (
    <Container>
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <SimpleGrid
              templateColumns="repeat(3, 1fr)"
              templateRows="repeat(1 ,1fr)"
              gap="2"
              p="10px"
              spacing={"10"}
            >
              <Box
                b="100%"
                h="100%"
                key={item.Year}
                bgColor={"gray.400"}
                borderRadius={"15"}
                colSpan={1}
                rowSpan={1}
              >
                <Container>
                  <Image
                    p={"10px"}
                    src={item.Poster}
                    alt="Missing Movie Poster"
                    fontWeight={"bold"}
                    color={"red"}
                  />
                  <Text>{item.Title}</Text>
                  <Text>{item.Year}</Text>
                </Container>
              </Box>
            </SimpleGrid>
          ))
        : null}
    </Container>
  );
};

export default MovieList;
