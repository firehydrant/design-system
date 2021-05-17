import { Button } from '../components/button/button.theme';
import { Card, CardHeader } from '../components/card/card.theme';
import { Checkbox } from '../components/checkbox/checkbox.theme';
import { Container } from '../components/container/container.theme';
import { Divider } from '../components/divider/divider.theme';
import { extendTheme } from '@chakra-ui/react';
import { FormLabel } from '../components/formlabel/formlabel.theme';
import { Link } from '../components/link/link.theme';
import { LinkText } from '../components/link/linktext.theme';
import { Radio } from '../components/radio/radio.theme';
import { Tabs } from '../components/tabs/tabs.theme';
import { Tag } from '../components/tag/tag.theme';
import { Text } from '../components/text/text.theme';
import { TextArea as Textarea } from '../components/textarea/textarea.theme';
import { TextField as Input } from '../components/textfield/textfield.theme';

import { createBreakpoints } from '@chakra-ui/theme-tools';
import * as colors from './colors.theme';
import * as font from './font.theme';
import * as space from './space.theme';

const breakpoints = createBreakpoints({
  base: '0',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1100px',
  '2xl': '1400px',
});

export default extendTheme({
  ...colors,
  ...space,
  ...font,
  breakpoints,
  components: {
    Button,
    Card,
    CardHeader,
    Checkbox,
    Container,
    Divider,
    FormLabel,
    Input,
    Link,
    LinkText,
    Radio,
    Tabs,
    Tag,
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
