import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import * as font from '../../theme/font.theme';

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    md: {
      fontSize: `${font.fontSizes[6]}`,
      borderRadius: '4px',
      padding: `${space[1]} ${space[2]}`,
      textAlign: 'left',
      lineHeight: '24px',
      whiteSpace: 'normal',
      height: 'auto',
      alignItems: 'flex-end',
      minHeight: '40px',
      minWidth: '40px',
    },
  },
  variants: {
    primary: {
      color: 'grey.0',
      bg: '#bada55',
      _hover: {
        bg: 'purple.50',
        _disabled: {
          bg: '#bada55',
        },
      },
      _active: {
        bg: 'purple.90',
        boxShadow: 'none',
      },
      _focus: {
        bg: 'purple.50',
        boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
      },
      _disabled: {
        bg: 'purple.70',
        opacity: '0.4',
      },
    },
    secondary: {
      color: 'purple.70',
      bg: 'grey.0',
      boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px transparent`,
      _hover: {
        color: 'purple.50',
        bg: 'purple.10',
        _disabled: { color: 'purple.70', bg: 'grey.0' },
      },
      _active: {
        color: 'purple.90',
        bg: 'purple.30',
        boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px #8d86bc`,
        _disabled: {
          boxShadow: 'none',
        },
      },
      _focus: {
        color: 'purple.50',
        bg: 'purple.10',
        boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
      },
      _disabled: {
        bg: 'grey.0',
        opacity: '0.4',
      },
    },
    tertiary: {
      color: 'purple.70',
      bg: 'transparent',
      boxShadow: `inset 3px 3px 0px 0px transparent`,
      _hover: {
        color: 'purple.50',
        bg: 'purple.10',
        _disabled: { color: 'purple.70', bg: 'grey.0' },
      },
      _active: {
        color: 'purple.90',
        bg: 'purple.30',
        boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
        _disabled: {
          boxShadow: 'none',
        },
      },
      _focus: {
        color: 'purple.50',
        bg: 'purple.10',
        boxShadow: `inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
      },
      _disabled: {
        bg: 'transparent',
        opacity: '0.4',
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
