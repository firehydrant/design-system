import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';

import * as Test from '../lib/main';

console.log(Test);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>testing</div>
    </ChakraProvider>
  );
}

export default App;
