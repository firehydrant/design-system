import React from 'react';
import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      defaultValue: 'primary',
      description: 'different sizes of links',
      table: {
        type: { summary: '5|6|7' },
        defaultValue: { summary: 5 },
      },
      control: {
        type: 'radio',
        options: [5, 6, 7],
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

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Link text', href: '#' };

export const SizeSixLink = Template.bind({});
SizeSixLink.args = { children: 'Link text', href: '#', size: 6 };

export const SizeSevenLink = Template.bind({});
SizeSevenLink.args = { children: 'Link text', href: '#', size: 7 };

export const ExternalLink = Template.bind({});
ExternalLink.args = { children: 'Link text', href: '#', isExternal: true };

export const SizeSixExternalLink = Template.bind({});
SizeSixExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  isExternal: true,
};

export const SizeSevenExternalLink = Template.bind({});
SizeSevenExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  isExternal: true,
};

export const ReverseLink = Template.bind({});
ReverseLink.args = { children: 'Link text', href: '#', variant: 'reverse' };
ReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSixReverseLink = Template.bind({});
SizeSixReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  variant: 'reverse',
};
SizeSixReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSevenReverseLink = Template.bind({});
SizeSevenReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  variant: 'reverse',
};
SizeSevenReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const ReverseExternalLink = Template.bind({});
ReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  isExternal: true,
  variant: 'reverse',
};
ReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSixReverseExternalLink = Template.bind({});
SizeSixReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 6,
  variant: 'reverse',
  isExternal: true,
};
SizeSixReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SizeSevenReverseExternalLink = Template.bind({});
SizeSevenReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 7,
  variant: 'reverse',
  isExternal: true,
};
SizeSevenReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};
