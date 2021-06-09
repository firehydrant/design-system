import { colors } from '../../theme/colors.theme';

export const Switch = {
  baseStyle: {},
  sizes: {
    md: ({ isReadOnly }) => {
      return {
        container: {
          cursor: isReadOnly ? 'not-allowed' : 'pointer',
          py: 'mg2',
          m: 0,
          '--slider-track-width': '42px',
          '--slider-track-height': '22px',
          height: '44px',
        },
        track: {
          p: 0,
          bg: 'grey.10',
          border: '1px solid',
          borderColor: 'grey.50',
          _groupHover: {
            borderColor: 'purple.50',
            bg: 'purple.10',
          },
          _groupActive: {
            boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
            borderColor: 'purple.90',
            bg: 'purple.30',
          },
          _focus: {
            borderColor: 'purple.70',
            bg: 'purple.10',
            boxShadow: 'none',
            _groupActive: {
              boxShadow: `inset 3px 3px 0px 0px #8d86bc`,
              borderColor: 'purple.90',
              bg: 'purple.30',
            },
            '.chakra-switch__thumb': {
              borderColor: 'purple.70',
              boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px, ${colors.grey[0]} 0px 0px 0px 0px`,
            },
          },
          _readOnly: {
            cursor: 'not-allowed',
            borderColor: 'grey.50',
            bg: 'grey.10',
            '.chakra-switch__thumb': {
              borderColor: 'grey.50',
              boxShadow: 'none',
            },
            _groupHover: {
              borderColor: 'grey.50',
              bg: 'grey.10',
            },
            _groupActive: {
              borderColor: 'grey.50',
              bg: 'grey.10',
              boxShadow: 'none',
            },
            _focus: {
              borderColor: 'grey.50',
              bg: 'grey.10',
              _groupActive: {
                borderColor: 'grey.50',
                bg: 'grey.10',
              },
            },
          },
          _checked: {
            borderColor: 'purple.70',
            bg: 'purple.70',
            _groupHover: {
              borderColor: 'purple.50',
              bg: 'purple.50',
            },
            _groupActive: {
              boxShadow: `inset 3px 3px 0px 0px #1a1c4b`,
              borderColor: 'purple.90',
              bg: 'purple.90',
            },
            _focus: {
              borderColor: 'purple.70',
              bg: 'purple.70',
              boxShadow: 'none',
              _groupActive: {
                boxShadow: `inset 3px 3px 0px 0px #1a1c4b`,
                borderColor: 'purple.90',
                bg: 'purple.90',
              },
            },
            _readOnly: {
              bg: 'grey.50',
              _groupHover: {
                bg: 'grey.50',
              },
              _groupActive: {
                bg: 'grey.50',
              },
              _focus: {
                bg: 'grey.50',
                _groupActive: {
                  boxShadow: 'none',
                  bg: 'grey.50',
                },
              },
            },
          },
        },
        thumb: {
          position: 'relative',
          width: '24px',
          height: '24px',
          top: '-1px',
          left: '-1px',
          border: '1px solid',
          borderColor: 'grey.50',
          bg: isReadOnly ? 'grey.10' : 'grey.0',
          _groupHover: {
            borderColor: isReadOnly ? 'grey.50' : 'purple.50',
          },
          _groupActive: {
            borderColor: isReadOnly ? 'grey.50' : 'purple.90',
          },
          _focus: {
            borderColor: isReadOnly ? 'grey.50' : 'purple.70',
            _groupActive: {
              borderColor: isReadOnly ? 'grey.50' : 'purple.90',
            },
          },
          _checked: {
            borderColor: isReadOnly ? 'grey.50' : 'purple.70',
          },
        },
      };
    },
  },
  defaultProps: {
    size: 'md',
  },
};
