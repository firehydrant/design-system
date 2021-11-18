import React from 'react';
import {
  FormLabel as ChakraFormLabel,
  useFormControlContext,
  FormLabelProps as ChakraFormLabelProps,
} from '@chakra-ui/react';

interface FormLabelProps extends ChakraFormLabelProps {
  isOptional?: Boolean;
}

export function FormLabel({ children, isOptional, ...props }: FormLabelProps) {
  const field = useFormControlContext();

  return (
    <ChakraFormLabel {...props}>
      {children} {field.isReadOnly && `(Read-only)`}{' '}
      {isOptional && `(Optional)`}
    </ChakraFormLabel>
  );
}
