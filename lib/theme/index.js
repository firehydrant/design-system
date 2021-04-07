import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button/button.theme';

import * as colors from './colors.theme';
import * as space from './space.theme';
import * as font from './font.theme';

export default extendTheme({
  ...colors,
  ...space,
  ...font,
  components: {
    Button,
  },
});
