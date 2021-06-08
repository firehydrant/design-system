import React from 'react';
import { Flex, CheckboxGroup as ChakraCheckboxGroup } from '@chakra-ui/react';

export function CheckboxGroup({ children, horizontal, ...props }) {
  return (
    <ChakraCheckboxGroup {...props}>
      <Flex
        flexDir={horizontal ? 'row' : 'column'}
        sx={
          horizontal
            ? {
                '.chakra-checkbox': { mr: 3 },
                '.chakra-checkbox:last-of-type': {
                  mr: '0px',
                },
              }
            : {
                '.chakra-checkbox': { mt: 'mg0' },
                '.chakra-checkbox:first-of-type': {
                  mt: '0px',
                },
              }
        }
      >
        {children}
      </Flex>
    </ChakraCheckboxGroup>
  );
}
