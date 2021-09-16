import { colors } from '../../theme/colors.theme';

export const Button = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    md: {
      fontSize: 6,
      borderRadius: 'base',
      py: 2,
      px: 3,
      textAlign: 'left',
      lineHeight: '24px',
      whiteSpace: 'normal',
      height: 'auto',
      minHeight: '40px',
      minWidth: '40px',
    },
  },
  variants: {
    primary: ({ colorScheme }) => {
      return {
        color: 'grey.0',
        bg: colorScheme === 'danger' ? 'red.70' : 'purple.70',
        _hover: {
          bg: colorScheme === 'danger' ? 'red.90' : 'purple.50',
          _disabled: {
            bg: colorScheme === 'danger' ? 'red.70' : 'purple.70',
          },
        },
        _active: {
          bg: colorScheme === 'danger' ? 'red.90' : 'purple.90',
          boxShadow: 'none',
        },
        _focus: {
          bg: colorScheme === 'danger' ? 'red.90' : 'purple.50',
          boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
        },
        _disabled: {
          bg: colorScheme === 'danger' ? 'red.70' : 'purple.70',
          opacity: '0.4',
        },
      }
    },
    secondary: ({ colorScheme }) => {
      return {
        color: colorScheme === 'danger' ? 'red.70' : 'purple.70',
        bg: 'grey.0',
        boxShadow: colorScheme === 'danger' ? `0px 0px 0px 1px ${colors.red[70]} inset, inset 3px 3px 0px 0px transparent` : `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px transparent`,
        _hover: {
          color: colorScheme === 'danger' ? 'red.70' : 'purple.50',
          bg: colorScheme === 'danger' ? 'red.10' : 'purple.10',
          _disabled: { color: colorScheme === 'danger' ? 'red.70' : 'purple.70', bg: 'grey.0' },
        },
        _active: {
          color: colorScheme === 'danger' ? 'red.90' : 'purple.90',
          bg: colorScheme === 'danger' ? 'red.30' : 'purple.30',
          boxShadow: colorScheme === 'danger' ? `0px 0px 0px 1px ${colors.red[90]} inset, inset 3px 3px 0px 0px rgba(24, 32, 66, 0.24)` : `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px #8d86bc`,
          _disabled: {
            boxShadow: 'none',
          },
        },
        _focus: {
          color: colorScheme === 'danger' ? 'red.70' : 'purple.50',
          bg: colorScheme === 'danger' ? 'red.10' : 'purple.10',
          boxShadow: colorScheme === 'danger' ? `0px 0px 0px 1px ${colors.red[70]} inset, inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px` : `0px 0px 0px 1px ${colors.purple[70]} inset, inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
        },
        _disabled: {
          bg: 'grey.0',
          boxShadow: colorScheme === 'danger' ? `0px 0px 0px 1px ${colors.red[70]} inset` : `0px 0px 0px 1px ${colors.purple[70]} inset`,
          opacity: '0.4',
        },
      }
    },
    tertiary: ({ colorScheme }) => {
      return  {
        color: colorScheme === 'danger' ? 'red.70' : 'purple.70',
        bg: 'transparent',
        p: 2,
        boxShadow: `inset 3px 3px 0px 0px transparent`,
        _hover: {
          color: colorScheme === 'danger' ? 'red.70' : 'purple.50',
          bg: colorScheme === 'danger' ? 'red.10' : 'purple.10',
          _disabled: { color: colorScheme === 'danger' ? 'red.70' : 'purple.70', bg: 'grey.0' },
        },
        _active: {
          color: colorScheme === 'danger' ? 'red.90' : 'purple.90',
          bg: colorScheme === 'danger' ? 'red.30' : 'purple.30',
          boxShadow: colorScheme === 'danger' ? `inset 3px 3px 0px 0px rgba(24, 32, 66, 0.24)` : `inset 3px 3px 0px 0px #8d86bc`,
          _disabled: {
            boxShadow: 'none',
          },
        },
        _focus: {
          color: colorScheme === 'danger' ? 'red.70' : 'purple.50',
          bg: colorScheme === 'danger' ? 'red.10' : 'purple.10',
          boxShadow: `inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
        },
        _disabled: {
          bg: 'transparent',
          opacity: '0.4',
        },
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
