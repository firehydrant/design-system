import React from 'react';
import { Icon } from '../../main';
import { LinkText } from './LinkText';
import { Link as ChakraLink } from '@chakra-ui/react';

export function Link({ children, isExternal, size, variant, ...props }) {
  return (
    <ChakraLink fontSize={size} isExternal={isExternal} role="group" {...props}>
      <LinkText size={size} variant={variant}>
        {children}
      </LinkText>
      {isExternal && (
        <Icon
          sx={{
            color: variant === 'reverse' ? 'grey.0' : 'purple.70',
            ml: '4px',
            width: '1.5em',
            height: '1.5em',
            minWidth: '20px',
            minHeight: '20px',
          }}
          name="externalLink"
        />
      )}
    </ChakraLink>
  );
}
