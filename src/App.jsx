import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>testing</div>
    </ChakraProvider>
  );
}

export default App;
