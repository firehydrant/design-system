import React from 'react';
import {
  FormLabel as ChakraFormLabel,
  useFormControlContext,
} from '@chakra-ui/react';

export function FormLabel({ children, ...props }) {
  const field = useFormControlContext();

  return (
    <ChakraFormLabel {...props}>
      {children} {field.isReadOnly && `(Read-only)`}
    </ChakraFormLabel>
  );
}
