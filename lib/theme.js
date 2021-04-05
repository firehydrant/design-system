import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#ffffff',
  grey: {
    90: '#182042',
    70: '#536685',
    50: '#8a9bb7',
    30: '#c6d0e2',
    10: '#eef1f6',
    0: '#ffffff',
  },
  purple: {
    90: '#220e6d',
    70: '#3b2492',
    50: '#614ab6',
    30: '#b2a6e3',
    10: '#f1edff',
  },
  red: {
    90: '#89120c',
    70: '#c6352d',
    50: '#e17f7a',
    30: '#f5bfbc',
    10: '#fceeed',
  },
  green: {
    90: '#1f521e',
    70: '#387937',
    50: '#77be76',
    30: '#c3ecbf',
    10: '#f1fcee',
  },
  brown: {
    90: '#6a2c10',
    70: '#af5a22',
    50: '#da9c58',
    30: '#f6dfb6',
    10: '#fdf8ed',
  },
  orange: {
    90: '#933600',
    70: '#d14900',
    50: '#ff5300',
    30: '#ff9862',
    10: '#ffece3',
  },
  teal: {
    90: '#007187',
    70: '#19a1bc',
    50: '#31c6e3',
    30: '#78e2f8',
    10: '#e3faff',
  },
  blue: {
    90: '#002b87',
    70: '#194cbc',
    50: '#3a6fe3',
    30: '#80a6f8',
    10: '#e6eeff',
  },
  yellow: {
    90: '#dea106',
    70: '#ffbe19',
    50: '#ffd04b',
    30: '#ffe492',
    10: '#f7f2e8',
  },
};

const space = {
  0: '4px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
  6: '48px',
  7: '56px',
};

const fontStack = `Open Sans, Roboto Mono, Roboto, Helvetica, Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji",  "Segoe UI Emoji", "Segoe UI Symbol"`;

const fonts = {
  body: fontStack,
  heading: fontStack,
};

const fontSizes = {
  1: '48px',
  2: '36px',
  3: '24px',
  4: '20px',
  5: '16px',
  6: '14px',
  7: '12px',
};

const fontWeights = {
  1: 'bold',
  2: 'bold',
  3: 'bold',
  4: 'bold',
  5: 'regular',
  6: 'regular',
  7: 'regular',
};

const lineHeights = {
  1: '1.5',
  2: '1.55',
  3: '1.55',
  4: '1.6',
  5: '1.5',
  6: '1.7',
  7: '1.7',
};

const Button = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    md: {
      fontSize: '14px',
      borderRadius: '4px',
      padding: '8px 16px',
    },
  },
  variants: {
    primary: {
      color: 'grey.0',
      bg: 'purple.70',
      _hover: {
        bg: 'purple.50',
        _disabled: {
          bg: 'purple.70',
        },
      },
      _active: {
        bg: 'purple.90',
      },
      _focus: {
        bg: 'purple.50',
        boxShadow:
          '#ffffff 0px 0px 0px 2px, #220e6d 0px 0px 0px 4px, #ffffff 0px 0px 0px 0px',
      },
      _disabled: {
        bg: 'purple.70',
        opacity: '0.4',
      },
    },
    secondary: {},
    tertiary: {},
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};

export default extendTheme({
  colors,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  components: {
    Button,
  },
});
