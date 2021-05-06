import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button/button.theme';
import { Checkbox } from '../components/checkbox/checkbox.theme';
import { TextField as Input } from '../components/textfield/textfield.theme';
import { TextArea as Textarea } from '../components/textarea/textarea.theme';
import { FormLabel } from '../components/formlabel/formlabel.theme';
import { Link } from '../components/link/link.theme';
import { LinkText } from '../components/link/linktext.theme';
import { Text } from '../components/text/text.theme';
import { Radio } from '../components/radio/radio.theme';

import * as colors from './colors.theme';
import * as space from './space.theme';
import * as font from './font.theme';

export default extendTheme({
  ...colors,
  ...space,
  ...font,
  components: {
    Button,
    Checkbox,
    Input,
    Text,
    Textarea,
    FormLabel,
    Radio,
    Link,
    LinkText,
  },
  styles: {
    global: {
      body: {
        color: 'grey.70',
        bg: 'grey.10',
      },
    },
  },
});
