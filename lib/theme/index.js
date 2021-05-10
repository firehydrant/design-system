import { Button } from '../components/button/button.theme';
import { Card, CardHeader } from '../components/card/card.theme';
import { Checkbox } from '../components/checkbox/checkbox.theme';
import { extendTheme } from '@chakra-ui/react';
import { FormLabel } from '../components/formlabel/formlabel.theme';
import { Link } from '../components/link/link.theme';
import { LinkText } from '../components/link/linktext.theme';
import { Radio } from '../components/radio/radio.theme';
import { Text } from '../components/text/text.theme';
import { TextArea as Textarea } from '../components/textarea/textarea.theme';
import { TextField as Input } from '../components/textfield/textfield.theme';

import * as colors from './colors.theme';
import * as font from './font.theme';
import * as space from './space.theme';

export default extendTheme({
  ...colors,
  ...space,
  ...font,
  components: {
    Button,
    Card,
    CardHeader,
    Checkbox,
    FormLabel,
    Input,
    Link,
    LinkText,
    Radio,
    Text,
    Textarea,
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
