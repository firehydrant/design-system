import { colors } from '../../theme/colors.theme';
import { space } from '../../theme/space.theme';
import * as font from '../../theme/font.theme';

export const FormLabel = {
  baseStyle: {
    margin: '0px',
    padding: '0px',
    _groupHover: { color: `${colors.purple[50]}` },
    _groupFocus: { color: `${colors.purple[70]}` },
    _groupActive: { color: `${colors.purple[70]}` },
    _readOnly: {
      _groupHover: { color: `${colors.grey[70]}` },
      _groupFocus: { color: `${colors.grey[70]}` },
      _groupActive: { color: `${colors.grey[70]}` },
    },
    _invalid: {
      color: `${colors.red[70]}`,
      _groupHover: { color: `${colors.red[70]}` },
      _groupFocus: { color: `${colors.red[70]}` },
      _groupActive: { color: `${colors.red[70]}` },
    },
  },
  sizes: {
    6: {
      fontSize: `${font.fontSizes[6]}`,
      lineHeight: `${font.lineHeights[6]}`,
      fontWeight: `${font.fontWeights[6]}`,
      color: `${colors.grey[70]}`,
    },
  },

  defaultProps: {
    size: 6,
  },
};
