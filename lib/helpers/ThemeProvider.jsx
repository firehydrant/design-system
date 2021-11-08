import React from 'react';
import PropTypes from 'prop-types';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

function EmotionCacheProvider({ nonce, children }) {
  const cache = createCache({ key: 'contentsecuritypolicy', nonce });
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

export const ThemeProvider = ({ children, nonce, ...props }) => {
  return (
    <EmotionCacheProvider nonce={nonce}>
      <ChakraProvider theme={theme} {...props}>
        {children}
      </ChakraProvider>
    </EmotionCacheProvider>
  );
};

ThemeProvider.propTypes = {
  nonce: PropTypes.string,
  children: PropTypes.element,
};
