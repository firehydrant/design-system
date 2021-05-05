import { colors } from '../../theme/colors.theme';
import * as font from '../../theme/font.theme';

export const LinkText = {
  baseStyle: {
    display: 'inline-block',
  },
  sizes: {
    md: {
      fontSize: `${font.fontSizes[5]}`,
      lineHeight: `${font.lineHeights[5]}`,
      fontWeight: `${font.fontWeights[5]}`,
    },
    sm: {
      fontSize: `${font.fontSizes[6]}`,
      lineHeight: `${font.lineHeights[6]}`,
      fontWeight: `${font.fontWeights[6]}`,
    },
    xs: {
      fontSize: `${font.fontSizes[7]}`,
      lineHeight: `${font.lineHeights[7]}`,
      fontWeight: `${font.fontWeights[7]}`,
    },
  },
  variants: {
    primary: {
      color: 'purple.70',
      boxShadow: `${colors.purple[50]} 0 -2px 0px -1px inset`,
      _groupHover: {
        color: 'purple.70',
        bg: 'purple.10',
        textDecoration: 'none',
        boxShadow: `${colors.purple[50]} 0 -2px 0px 0px inset`,
      },

      _groupFocus: {
        color: 'purple.70',
        bg: 'purple.10',
        textDecoration: 'none',
        borderRadius: '4px',
        boxShadow: `${colors.purple[10]} 0px 0px 0px 1px, ${colors.purple[70]} 0px 0px 0px 3px`,
      },
      _groupActive: {
        color: 'purple.90',
        bg: 'purple.30',
        textDecoration: 'none',
        boxShadow: `${colors.purple[50]} 0 -2px 0px 0px inset`,
        borderRadius: '0',
      },
    },
    reverse: {
      color: 'grey.0',
      boxShadow: `${colors.grey[0]} 0 -2px 0px -1px inset`,
      _groupHover: {
        color: 'grey.0',
        bg: 'grey.70',
        textDecoration: 'none',
        boxShadow: `${colors.grey[0]} 0 -2px 0px 0px inset`,
      },
      _groupFocus: {
        color: 'grey.0',
        bg: 'grey.70',
        textDecoration: 'none',
        borderRadius: '4px',
        boxShadow: `${colors.grey[70]} 0px 0px 0px 1px, ${colors.grey[0]} 0px 0px 0px 3px`,
      },
      _groupActive: {
        color: 'grey.90',
        bg: 'grey.30',
        textDecoration: 'none',
        boxShadow: `${colors.grey[0]} 0 -2px 0px 0px inset`,
        borderRadius: '0',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
