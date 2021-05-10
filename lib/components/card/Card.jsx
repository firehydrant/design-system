import React from 'react';
import { Text, Box } from '../../main';
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
    <Box __css={styles} {...rest} sx={{ button: { mb: 1 } }}>
      {children}
    </Box>
  );
}

export function CardTitle({ children, ...rest }) {
  return (
    <Text as="h3" size="3" mr="2" mb="1" {...rest}>
      {children}
    </Text>
  );
}
