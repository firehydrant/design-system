import { colors } from '../../theme/colors.theme';

export const TextField = {
  baseStyle: {
    fontSize: 5,
    lineHeight: 5,
    fontWeight: 5,
  },
  sizes: {
    md: {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        py: 2,
        px: 3,
      },
    },
  },
  variants: {
    outline: {
      field: {
        bg: 'grey.0',
        color: 'grey.90',
        border: 'none',
        borderRadius: 'base',
        boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
        marginTop: 'mg0',
        marginBottom: 'mg0',
        _readOnly: {
          userSelect: 'all',
          color: 'grey.70',
          bg: 'grey.10',
          boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
          _active: {
            boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
            _focus: {
              boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
            },
          },
          _focus: {
            boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
          },
        },
        _invalid: {
          boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset`,
          _active: {
            boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset`,
            _focus: {
              boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset`,
            },
          },
          _focus: {
            boxShadow: `0px 0px 0px 1px ${colors.red[70]} inset, ${colors.red[70]} 0px 0px 0px 3px`,
          },
        },
        _active: {
          boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset`,
          _focus: {
            boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset`,
          },
        },
        _hover: {
          boxShadow: `0px 0px 0px 1px ${colors.purple[50]} inset`,
        },
        _focus: {
          boxShadow: `0px 0px 0px 1px ${colors.purple[70]} inset, ${colors.purple[70]} 0px 0px 0px 3px`,
        },
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
