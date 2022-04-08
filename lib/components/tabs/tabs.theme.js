import { colors } from '../../theme/colors.theme';

export const Tabs = {
  baseStyle: {
    outline: 'none',
  },
  sizes: {
    md: {
      tab: { fontSize: 6, fontWeight: 3, lineHeight: 6, minHeight: '44px' },
    },
  },
  variants: {
    primary: ({ orientation }) => {
      const selectedShadowOrientation =
        orientation === 'vertical' ? `-2px 0px 0px 0px` : `0px 2px 0px 0px`;

      return {
        tab: {
          borderRadius: 'none',
          py: 2,
          px: 3,
          my: 'mg0',
          bg: 'grey.0',
          justifyContent: orientation === 'vertical' ? 'left' : 'center',
          color: 'purple.70',
          boxShadow: 'none',
          _hover: {
            bg: 'purple.10',
            color: 'purple.50',
          },
          _focus: {
            bg: 'purple.10',
            color: 'purple.50',
            boxShadow: `${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px`,
            _active: {
              boxShadow: `${colors.purple[90]} 0px 2px 0px 0px, inset 3px 3px 0px 0px #8d86bc`,
            },
          },
          _active: {
            bg: 'purple.30',
            color: 'purple.90',
          },
          _selected: {
            boxShadow: `${colors.purple[70]} ${selectedShadowOrientation}`,
            _hover: {
              boxShadow: `${colors.purple[50]} ${selectedShadowOrientation}`,
            },
            _focus: {
              boxShadow: `${colors.purple[50]} ${selectedShadowOrientation}, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px`,
              _active: {
                boxShadow: `${colors.purple[90]} ${selectedShadowOrientation}, inset 3px 3px 0px 0px #8d86bc`,
              },
            },
          },
        },
        tabpanel: { p: 0, m: 0 },
      };
    },
    enclosed: () => {
      const boxShadowOrientation = `0px 2px 0px 0px`;
      return {
        tab: {
          fontWeight: 'normal',
          bg: 'transparent',
          _active: {
            color: 'grey.70',
          },
          _focus: {
            color: 'grey.70',
          },
          _selected: {
            color: 'grey.70',
            fontWeight: 'bold',
            bg: 'grey.0',
            _active: {
              boxShadow: `${colors.purple[90]} 0px 2px 0px 0px, inset 3px 3px 0px 0px #8d86bc`,
            },
            _focus: {
              boxShadow: `${colors.purple[50]} ${boxShadowOrientation}, ${colors.grey[0]} 0px 0px 0px 2px, ${colors.purple[70]} 0px 0px 0px 4px`,
              _active: {
                boxShadow: `${colors.purple[90]} ${boxShadowOrientation}, inset 3px 3px 0px 0px #8d86bc`,
              },
            },
          },
          _hover: {
            bg: 'purple.10',
            color: 'purple.50',
          },
        },
      };
    },
  },
  defaultProps: { variant: 'primary', size: 'md' },
};
