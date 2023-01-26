import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const brand = definePartsStyle({
  dark: {
    bgColor: "gray",
  },

  text: {
    fontWeight: "bold",
  },
});

export const theme = defineMultiStyleConfig({
  variants: { brand },
});
