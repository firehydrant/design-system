import React from 'react';
import { Container } from '../../main';

export default {
  title: 'Components/Layout/Container',
  component: Container,
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales mi eget nisl vehicula, ac consequat felis gravida. Donec pellentesque tortor id pharetra cursus. Nulla facilisi. Maecenas porttitor lacinia convallis. Aenean eget sem viverra, sollicitudin mi quis, sodales nunc. Pellentesque sollicitudin, massa id maximus fermentum, lacus sapien tempor turpis, at tristique magna nibh et orci.',
      table: {
        type: { summary: 'text|node' },
      },
      control: {
        type: 'object',
      },
    },
    size: {
      description: 'maximum width',
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
      description: 'container will center its children',
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

const Template = (args) => <Container {...args} />;

export const Default = Template.bind({});

export const Container1100 = Template.bind({});
Container1100.args = {
  size: '1100',
};

export const Container1400 = Template.bind({});
Container1400.args = {
  size: '1400',
};

export const CenterContent = Template.bind({});
CenterContent.args = {
  centerContent: true,
  children: 'Container will center its children',
};
