import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import * as font from '../../theme/font.theme';

export const FormLabel = {
  baseStyle: { margin: '0px', padding: '0px' },
  sizes: {
    6: {
      fontSize: `${font.fontSizes[6]}`,
      lineHeight: `${font.lineHeights[6]}`,
      fontWeight: `${font.fontWeights[6]}`,
    },
  },
  variants: {
    primary: {
      color: 'grey.70',
      _groupHover: { color: 'purple.50' },
      _groupFocus: { color: 'purple.70' },
      _groupActive: { color: 'purple.70' },
      _readOnly: {
        _groupHover: { color: 'grey.70' },
        _groupFocus: { color: 'grey.70' },
        _groupActive: { color: 'grey.70' },
      },
      _invalid: {
        color: 'red.70',
        _groupHover: { color: 'red.70' },
        _groupFocus: { color: 'red.70' },
        _groupActive: { color: 'red.70' },
      },
    },
    checkbox: {
      color: 'grey.70',
      _invalid: {
        color: 'red.70',
      },
    },
  },
  defaultProps: {
    size: 6,
    variant: 'primary',
  },
};
