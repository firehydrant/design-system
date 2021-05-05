import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import * as font from '../../theme/font.theme';

export const Radio = {
  baseStyle: {},
  sizes: {
    md: {
      control: {
        w: space[3],
        h: space[3],
      },
      label: {
        fontSize: font.fontSizes[5],
        fontWeight: font.fontWeights[5],
        lineHeight: font.lineHeights[5],
      },
    },
  },
  variants: {
    primary: {
      control: {
        borderRadius: 'full',
        borderColor: 'grey.50',
        bg: 'grey.0',
        border: '1px',
        my: '10px',
        alignSelf: 'start',
        _invalid: {
          borderColor: 'red.70',
          bg: 'grey.0',
        },
        _hover: {
          borderColor: 'purple.50',
          bg: 'purple.10',
          _invalid: {
            bg: 'red.10',
            borderColor: 'red.50',
          },
        },
        _active: {
          borderColor: 'purple.90',
          bg: 'purple.30',
          boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
          _invalid: {
            borderColor: 'red.90',
            bg: 'red.30',
            color: 'red.70',
            boxShadow: `inset 3px 3px 0px 0px #c0999f`,
          },
        },
        _focus: {
          borderColor: 'purple.70',
          bg: 'purple.10',
          boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
          _invalid: {
            borderColor: 'red.70',
            bg: 'red.10',
          },
        },
        _checked: {
          borderColor: 'purple.70',
          bg: 'grey.0',
          color: 'purple.70',
          _invalid: {
            borderColor: 'red.70',
            bg: 'grey.0',
            color: 'red.70',
          },
          _hover: {
            borderColor: 'purple.50',
            bg: 'purple.10',
            color: 'purple.50',
            _invalid: {
              borderColor: 'red.50',
              bg: 'red.10',
              color: 'red.70',
            },
          },
          _active: {
            borderColor: 'purple.90',
            bg: 'purple.30',
            color: 'purple.90',
            boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
            _invalid: {
              borderColor: 'red.90',
              bg: 'red.30',
              color: 'red.70',
              boxShadow: `inset 3px 3px 0px 0px #c0999f`,
            },
          },
          _focus: {
            borderColor: 'purple.50',
            bg: 'purple.10',
            color: 'purple.50',
            _active: {
              boxShadow: 'none',
            },
            _invalid: {
              borderColor: 'red.70',
              bg: 'red.10',
              color: 'red.70',
            },
          },
          _readOnly: {
            borderColor: 'grey.50',
            bg: 'grey.10',
            color: 'grey.50',
            _focus: {
              boxShadow: 'none',
              borderColor: 'grey.50',
              bg: 'grey.10',
              color: 'grey.50',
            },
            _hover: { borderColor: 'grey.50', bg: 'grey.10', color: 'grey.50' },
            _active: {
              borderColor: 'grey.50',
              bg: 'grey.10',
              color: 'grey.50',
            },
          },
          _before: {
            content: `""`,
            display: 'inline-block',
            pos: 'relative',
            w: '12px',
            h: '12px',
            borderRadius: '50%',
            bg: 'currentColor',
          },
        },
        _readOnly: {
          borderColor: 'grey.50',
          bg: 'grey.10',
          color: 'grey.0',
          _active: {
            boxShadow: 'none',
          },
          _focus: {
            boxShadow: 'none',
          },
        },
      },
      label: {
        color: 'grey.90',
        py: space['mg2'],
        _invalid: {
          color: 'red.70',
        },
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};
