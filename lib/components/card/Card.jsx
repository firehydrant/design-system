import React, { Children } from 'react';
import { Text, Box, ButtonGroup } from '../../main';
import { useStyleConfig } from '@chakra-ui/react';

export function Card({ variant, size, children, ...rest }) {
  const styles = useStyleConfig('Card', { variant, size });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export function CardHeader({ variant, size, children, ...rest }) {
  const styles = useStyleConfig('CardHeader', { variant, size });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export function CardTitle({ children, ...rest }) {
  return (
    <Text as="h3" size="3" mr="3" mb="2" {...rest}>
      {children}
    </Text>
  );
}

export function CardActions({ children, ...rest }) {
  // We don't want to put a ButtonGroup around a single element
  if (Children.count(children) === 1) {
    return (
      <Box mb="2" {...rest}>
        {children}
      </Box>
    );
  }

  return (
    <ButtonGroup mb="2" {...rest}>
      {children}
    </ButtonGroup>
  );
}
