import React from 'react';
import { InfoIcon, Wrap } from '../../main';
import { Tag, TagLabel, TagLeftIcon, TagRightIcon } from './index';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: {
      description: 'Inner elements or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      defaultValue: 'grey',
      description: 'color scheme of the tag',
      table: {
        type: { summary: 'grey|green|brown|red|purple|teal|orange|blue' },
        defaultValue: { summary: 'grey' },
      },
      control: {
        type: 'radio',
        options: [
          'grey',
          'green',
          'brown',
          'red',
          'purple',
          'teal',
          'orange',
          'blue',
        ],
      },
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'subtle',
      description: 'different visual types of tag',
      table: {
        type: { summary: 'subtle|outline' },
        defaultValue: { summary: 'subtle' },
      },
      control: {
        type: 'radio',
        options: ['subtle', 'outline'],
      },
    },
  },
};

export const Default = ({ children, ...args }) => (
  <Tag {...args}>
    <TagLabel>{children}</TagLabel>
  </Tag>
);
Default.args = { children: 'Default' };

export const Variants = (args) => (
  <Wrap spacing={2} p={2} bg="white">
    <Tag {...args} variant="subtle">
      default / subtle
    </Tag>
    <Tag {...args} variant="outline">
      outline
    </Tag>
  </Wrap>
);

export const colorSchemes = (args) => (
  <Wrap spacing={2} p={2} bg="white">
    <Tag {...args} colorScheme="grey">
      grey
    </Tag>
    <Tag {...args} colorScheme="green">
      green
    </Tag>
    <Tag {...args} colorScheme="brown">
      brown
    </Tag>
    <Tag {...args} colorScheme="red">
      red
    </Tag>
    <Tag {...args} colorScheme="purple">
      purple
    </Tag>
    <Tag {...args} colorScheme="teal">
      teal
    </Tag>
    <Tag {...args} colorScheme="orange">
      orange
    </Tag>
    <Tag {...args} colorScheme="blue">
      blue
    </Tag>
  </Wrap>
);

export const withIcon = (args) => (
  <Wrap spacing={2} p={2} bg="white">
    <Tag {...args}>
      <TagLeftIcon>
        <InfoIcon />
      </TagLeftIcon>
      <TagLabel>with icon</TagLabel>
    </Tag>
    <Tag {...args}>
      <TagLabel>with right icon</TagLabel>
      <TagRightIcon>
        <InfoIcon />
      </TagRightIcon>
    </Tag>
  </Wrap>
);
