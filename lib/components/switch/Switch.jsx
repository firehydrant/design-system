import React from 'react';
import {
  Switch as ChakraSwitch,
  FormLabel as ChakraFormLabel,
} from '@chakra-ui/react';

export function Switch({ ...rest }) {
  return <ChakraSwitch {...rest} />;
}

export function SwitchLabel({ ...rest }) {
  return <ChakraFormLabel variant="switch" {...rest} />;
}
