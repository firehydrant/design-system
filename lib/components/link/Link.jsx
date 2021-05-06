import React from 'react';
import { Icon } from '../../main';
import { LinkText } from './LinkText';
import { Link as ChakraLink } from '@chakra-ui/react';

export function Link({ children, isExternal, size, variant, ...props }) {
  return (
    <ChakraLink {...props} role="group">
      <LinkText size={size} variant={variant}>
        {children}
      </LinkText>
      {isExternal && (
        <Icon
          sx={{
            color: variant === 'reverse' ? 'grey.0' : 'purple.70',
            ml: '4px',
            width: size === 'xs' ? '20px' : '24px',
            height: size === 'xs' ? '20px' : '24px',
          }}
          name="externalLink"
        />
      )}
    </ChakraLink>
  );
}
