import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import * as font from '../../theme/font.theme';

export const TextField = {
  baseStyle: {
    fontSize: `${font.fontSizes[5]}`,
    lineHeight: `${font.lineHeights[5]}`,
    fontWeight: `${font.fontWeights[5]}`,
  },
  sizes: {
    md: {
      field: {
        border: '1px solid',
        borderColor: 'inherit',
        padding: `${space[1]} ${space[2]}`,
      },
    },
  },
  variants: {
    outline: {
      field: {
        bg: `${colors.grey[0]}`,
        color: `${colors.grey[90]}`,
        border: 'none',
        borderRadius: '4px',
        boxShadow: `0px 0px 0px 1px ${colors.grey[50]} inset`,
        _readOnly: {
          userSelect: 'all',
          color: `${colors.grey[70]}`,
          bg: `${colors.grey[10]}`,
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
