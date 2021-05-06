import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";

export const parameters = {
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Components", ["Forms"], "Recipes"],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      {
        name: "light",
        value: "#ffffff",
      },
      {
        name: "dark",
        value: "#182042",
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
