import React from 'react';
import { FormHelperText as ChakraFormHelperText } from '@chakra-ui/react';

export function FormHelperText({ children, ...props }) {
  return (
    <ChakraFormHelperText
      fontSize="7"
      lineHeight="7"
      mt="1"
      color="grey.70"
      display="inline-block"
      {...props}
    >
      {children}
    </ChakraFormHelperText>
  );
}
