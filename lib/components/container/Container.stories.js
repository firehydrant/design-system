import React from 'react';
// import { Text, Button } from '../../main';
import { Container } from './Container';

export default {
  title: 'Components/Layout/Container',
  component: Container,
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    size: {
      description: 'Maximum width',
      table: {
        type: { summary: 'null|1100|1400' },
        defaultValue: { summary: '60ch' },
      },
      control: {
        type: 'radio',
        defaultValue: '60ch',
        options: ['null', '1100', '1400'],
      },
    },
    centerContent: {
      description: 'Center-align the content',
      table: {
        type: { summary: 'true|false' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
        defaultValue: 'false',
      },
    },
  },
};

const Template = (args) => (
  <Container
    sx={{
      p: 2,
      bg: 'white',
      border: '1px',
      borderColor: 'gray.200',
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Container constrained to 60ch by default.',
};

export const Container1100 = Template.bind({});
Container1100.args = {
  size: '1100',
  children: 'Container constrained to 1100px for general page layout.',
};

export const Container1400 = Template.bind({});
Container1400.args = {
  size: '1400',
  children: 'Container constrained to 1400px for larger page layout.',
};

export const CenterContent = Template.bind({});
CenterContent.args = {
  centerContent: true,
  children: 'Container content center-aligned.',
};
