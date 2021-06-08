import React from 'react';
import { Flex, CheckboxGroup as ChakraCheckboxGroup } from '@chakra-ui/react';

export function CheckboxGroup({ children, horizontal, ...props }) {
  // display: flex needed see issue -> https://github.com/chakra-ui/chakra-ui/issues/2100
  return (
    <ChakraCheckboxGroup {...props}>
      <Flex
        __css={
          horizontal
            ? {
                display: 'flex',
                flexDirection: 'row',
                '.chakra-checkbox': { mr: 3 },
                '.chakra-checkbox:last-of-type': {
                  mr: '0px',
                },
              }
            : {
                display: 'flex',
                flexDirection: 'column',
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
