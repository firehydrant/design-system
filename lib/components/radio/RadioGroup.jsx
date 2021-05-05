import React from 'react';
import { Flex, RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

export function RadioGroup({ children, horizontal, ...props }) {
  return (
    <ChakraRadioGroup {...props}>
      <Flex
        flexDir={horizontal ? 'row' : 'column'}
        sx={
          horizontal
            ? {
                '.chakra-radio': { mr: 1 },
                '.chakra-radio:last-of-type': {
                  mr: '0px',
                },
              }
            : {
                '.chakra-radio': { mt: 1 },
                '.chakra-radio:first-of-type': {
                  mt: '0px',
                },
              }
        }>
        {children}
      </Flex>
    </ChakraRadioGroup>
  );
}
