import { colors } from '../../theme/colors.theme';

export const LinkText = {
  sizes: {
    5: {
      fontSize: 5,
      lineHeight: 5,
      fontWeight: 5,
    },
    6: {
      fontSize: 6,
      lineHeight: 6,
      fontWeight: 6,
    },
    7: {
      fontSize: 7,
      lineHeight: 7,
      fontWeight: 7,
    },
  },
  baseStyle: {
    display: 'inline',
    textDecoration: 'none',
    _groupFocus: {
      outlineOffset: '0.25em',
      boxShadow: 'none',
      border: 'none',
      bg: 'none',
      _hover: {
        boxShadow: 'none',
      },
    },
    _groupActive: {
      borderRadius: 'none',
      outline: 'none',
    },
  },
  variants: {
    primary: {
      color: 'purple.70',
      boxShadow: `${colors.purple[70]} 0 1px 0px 0px`,
      _groupFocus: {
        color: 'purple.70',
        outline: `${colors.purple[70]} auto 1px`,
      },
      _groupHover: {
        color: 'purple.70',
        bg: 'purple.10',
        boxShadow: `${colors.purple[70]} 0 2px 0px 0px`,
        _active: {
          color: 'purple.90',
          bg: 'purple.30',
          boxShadow: `${colors.purple[90]} 0 2px 0px 0px`,
        },
      },
    },
    reverse: {
      color: 'grey.0',
      boxShadow: `${colors.grey[0]} 0 1px 0px 0px`,
      _groupFocus: {
        color: 'grey.0',
        outline: `${colors.grey[0]} auto 1px`,
      },
      _groupHover: {
        color: 'grey.0',
        bg: 'grey.70',
        boxShadow: `${colors.grey[0]} 0 2px 0px 0px`,
        _active: {
          color: 'grey.90',
          bg: 'grey.30',
          boxShadow: `${colors.grey[0]} 0 2px 0px 0px`,
        },
      },
    },
  },
  defaultProps: {
    size: 5,
    variant: 'primary',
  },
};
