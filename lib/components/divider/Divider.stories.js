import React from 'react';
import { Divider } from './Divider';

export default {
  title: 'Components/Layout/Divider',
  component: Divider,
};

const Template = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  backgrounds: { default: 'dark' },
};

export const CustomMargin = Template.bind({});
CustomMargin.args = { my: 1 };

export const GreyBackground = Template.bind({});
GreyBackground.args = {};
GreyBackground.parameters = {
  backgrounds: { default: 'grey' },
};
