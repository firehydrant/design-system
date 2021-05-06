import React from 'react';
import { Text } from './Text';
import { colors } from '../../theme/colors.theme';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'number', required: false },
      description: 'different sizes of text',
      table: {
        type: { summary: '1|2|3|4|5|6|7' },
      },
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6, 7],
      },
    },
    fontWeight: {
      name: 'fontWeight',
      type: { name: 'string', required: false },
      description: 'different font weights of text',
      table: {
        type: { summary: 'normal|bold' },
      },
      control: {
        type: 'select',
        options: ['normal', 'bold'],
      },
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      table: {
        type: {
          summary: Object.keys(colors)
            .map((k) =>
              Object.keys(colors[k])
                .map((v) => `${k}.${v}`)
                .join('|')
            )
            .join('|'),
        },
      },
      control: {
        type: 'select',
        options: Object.keys(colors).reduce(
          (acc, k) => [
            ...acc,
            ...Object.keys(colors[k]).map((v) => `${k}.${v}`),
          ],
          []
        ),
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Example Text' };

export const Scale1 = Template.bind({});
Scale1.args = {
  children: 'Value',
  size: 1,
};

export const Scale2 = Template.bind({});
Scale2.args = {
  children: 'Value',
  size: 2,
};

export const Scale3 = Template.bind({});
Scale3.args = {
  children: 'Value',
  size: 3,
};

export const Scale4 = Template.bind({});
Scale4.args = {
  children: 'Value',
  size: 4,
};

export const Scale5 = Template.bind({});
Scale5.args = {
  children: 'Value',
  size: 5,
};

export const Scale6 = Template.bind({});
Scale6.args = {
  children: 'Value',
  size: 6,
};

export const Scale7 = Template.bind({});
Scale7.args = {
  children: 'Value',
  size: 7,
};
