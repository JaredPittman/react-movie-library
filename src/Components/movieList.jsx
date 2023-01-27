import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import {
  Table,
  Container,
  TableContainer,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
} from "@chakra-ui/react";
// import { inputAnatomy } from "@chakra-ui/anatomy";

const MovieList = () => {
  const { movieList } = useContext(GlobalContext);
  console.log(movieList);
  return (
    <Container>
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <TableContainer>
              <Table variant="striped" colorScheme="green.200">
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>Year</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr key={item.Year}>
                    <Td>{item.Title}</Td>
                    <Td>{item.Year}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          ))
        : null}
    </Container>
  );
};

export default MovieList;
