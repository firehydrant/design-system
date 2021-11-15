import React from 'react';
import {
  FormHelperText as ChakraFormHelperText,
  HelpTextProps,
} from '@chakra-ui/react';

export function FormHelperText(props: HelpTextProps) {
  return (
    <ChakraFormHelperText
      fontSize="7"
      lineHeight="7"
      mt="1"
      color="grey.70"
      display="inline-block"
      {...props}
    />
  );
}
