import React from 'react';
import { Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';
import { ExternalLinkIcon } from '../../main';

export function Link({ children, isExternal, size, variant, ...props }) {
  const styles = useStyleConfig('Link', { variant, size });

  return (
    <ChakraLink
      fontSize={size}
      variant={variant}
      isExternal={isExternal}
      __css={styles}
      {...props}
    >
      {children}
      {isExternal && (
        <ExternalLinkIcon height="1em" width="1em" mb="mg0" ml={1} />
      )}
    </ChakraLink>
  );
}
