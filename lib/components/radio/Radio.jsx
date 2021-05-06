import React from 'react';
import {
  Radio as ChakraRadio,
  useFormControlContext,
  Box,
} from '@chakra-ui/react';

export function Radio({ children, ...props }) {
  const field = useFormControlContext();

  let fieldProps = {};
  if (field) {
    fieldProps.isDisabled = field.isDisabled;
    fieldProps.isReadOnly = field.isReadOnly;
    fieldProps.isRequired = field.isRequired;
    fieldProps.isInvalid = field.isInvalid;
  }

  return (
    <Box
      display="inline-block"
      className="chakra-radio"
      role="group"
      sx={
        (props.isReadOnly || fieldProps.isReadOnly) && {
          '.chakra-radio__label': {
            color: 'grey.70',
            cursor: 'not-allowed',
          },
        }
      }>
      <ChakraRadio {...fieldProps} {...props}>
        {children}
      </ChakraRadio>
    </Box>
  );
}
