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
          borderRadius: 0,
          py: 1,
          px: 2,
          my: 'mg0',
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
        tabpanel: { p: '0px', m: '0px' },
      };
    },
  },
  defaultProps: { variant: 'primary', size: 'md' },
};
