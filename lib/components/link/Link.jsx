import React from 'react';
import PropTypes from 'prop-types';
import { Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';
import { ExternalLinkIcon } from '../../main';

export function Link({
  children,
  isExternal,
  size = 5,
  variant = 'primary',
  ...props
}) {
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

Link.propTypes = {
  children: PropTypes.node,
  isExternal: PropTypes.bool,
  size: PropTypes.oneOf([5, 6, 7]),
  variant: PropTypes.oneOf(['gradient', 'primary', 'reverse']),
  href: PropTypes.string,
};
