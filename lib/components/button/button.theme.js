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
    primaryDanger: {
      color: 'grey.0',
      bg: 'red.70',
      _hover: {
        bg: 'red.90',
      },
      _active: {
        bg: 'red.90',
        boxShadow: 'none',
      },
      _focus: {
        bg: 'red.90',
        boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
      },
      _disabled: {
        bg: 'red.70',
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
        boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset`,
        opacity: '0.4',
      },
    },
    secondaryDanger: {
      color: 'red.70',
      bg: 'grey.0',
      boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset, inset 3px 3px 0px 0px transparent`,
      _hover: {
        color: 'red.70',
        bg: 'red.10',
        boxShadow: `0px 0px 0px 1px ${colors.red[50]} inset, inset 3px 3px 0px 0px transparent`,
      },
      _active: {
        color: 'red.90',
        bg: 'red.30',
        boxShadow: `0px 0px 0px 1px ${colors.red[90]} inset, inset 3px 3px 0px 0px rgba(24, 32, 66, 0.24)`,
        _disabled: {
          boxShadow: 'none',
        },
      },
      _focus: {
        color: 'red.70',
        bg: 'red.10',
        boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset, inset 3px 3px 0px 0px transparent, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
      },
      _disabled: {
        bg: 'grey.0',
        boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset`,
        opacity: '0.4',
      },
    },
    tertiary: {
      color: 'purple.70',
      bg: 'transparent',
      p: 2,
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
    tertiaryDanger: {
      color: 'red.70',
      bg: 'transparent',
      p: 2,
      boxShadow: `inset 3px 3px 0px 0px transparent`,
      _hover: {
        color: 'red.70',
        bg: 'red.10',
      },
      _active: {
        color: 'red.90',
        bg: 'red.30',
        boxShadow: `inset 3px 3px 0px 0px rgba(24, 32, 66, 0.24)`,
        _disabled: {
          boxShadow: 'none',
        },
      },
      _focus: {
        color: 'red.70',
        bg: 'red.10',
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
