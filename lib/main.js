import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

export * from './components/Button';

export const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
