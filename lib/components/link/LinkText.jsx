import React from 'react';
import { chakra, useStyleConfig } from '@chakra-ui/react';

export function LinkText({ variant, size, children, ...rest }) {
  const styles = useStyleConfig('LinkText', { variant, size });

  return (
    <chakra.span __css={styles} {...rest}>
      {children}
    </chakra.span>
  );
}
