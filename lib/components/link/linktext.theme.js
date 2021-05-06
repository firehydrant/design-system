import { colors } from '../../theme/colors.theme';

export const LinkText = {
  baseStyle: {
    display: 'inline-block',
  },
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
  variants: {
    primary: {
      color: 'purple.70',
      boxShadow: `${colors.purple[70]} 0 -2px 0px -1px inset`,
      _groupHover: {
        color: 'purple.70',
        bg: 'purple.10',
        textDecoration: 'none',
        boxShadow: `${colors.purple[70]} 0 -2px 0px 0px inset`,
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
    size: 5,
    variant: 'primary',
  },
};
