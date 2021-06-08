import React from 'react';
import { Flex, RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

export function RadioGroup({ children, horizontal, ...props }) {
  // display: flex needed see issue -> https://github.com/chakra-ui/chakra-ui/issues/2100
  return (
    <ChakraRadioGroup {...props}>
      <Flex
        __css={
          horizontal
            ? {
                display: 'flex',
                flexDirection: 'row',
                '.chakra-radio': { mr: 3 },
                '.chakra-radio:last-of-type': {
                  mr: '0px',
                },
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                '.chakra-radio': { mt: 'mg0' },
                '.chakra-radio:first-of-type': {
                  mt: '0px',
                },
              }
        }
      >
        {children}
      </Flex>
    </ChakraRadioGroup>
  );
}
