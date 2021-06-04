import React from 'react';
import { Icon } from '../../main';
import {
  Checkbox as ChakraCheckbox,
  useFormControlContext,
} from '@chakra-ui/react';

export function Checkbox({ children, ...props }) {
  const field = useFormControlContext();

  let fieldProps = {};
  if (field) {
    fieldProps.isDisabled = field.isDisabled;
    fieldProps.isReadOnly = field.isReadOnly;
    fieldProps.isRequired = field.isRequired;
    fieldProps.isInvalid = field.isInvalid;
  }

  return (
    <ChakraCheckbox
      role="group"
      __css={
        (props.isReadOnly || fieldProps.isReadOnly) && {
          '.chakra-checkbox__label': {
            color: 'grey.70',
            cursor: 'not-allowed',
          },
        }
      }
      icon={
        props.isIndeterminate ? <Icon name="minus" /> : <Icon name="check" />
      }
      {...fieldProps}
      {...props}
    >
      {children}
    </ChakraCheckbox>
  );
}
