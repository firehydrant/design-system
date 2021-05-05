import React from 'react';
import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
  argTypes: {
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

export const SmallLink = Template.bind({});
SmallLink.args = { children: 'Link text', href: '#', size: 'sm' };

export const ExtraSmallLink = Template.bind({});
ExtraSmallLink.args = { children: 'Link text', href: '#', size: 'xs' };

export const ExternalLink = Template.bind({});
ExternalLink.args = { children: 'Link text', href: '#', isExternal: true };

export const SmallExternalLink = Template.bind({});
SmallExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'sm',
  isExternal: true,
};

export const ExtraSmallExternalLink = Template.bind({});
ExtraSmallExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'xs',
  isExternal: true,
};

export const ReverseLink = Template.bind({});
ReverseLink.args = { children: 'Link text', href: '#', variant: 'reverse' };
ReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const SmallReverseLink = Template.bind({});
SmallReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 'sm',
  variant: 'reverse',
};
SmallReverseLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const ExtraSmallReverseLink = Template.bind({});
ExtraSmallReverseLink.args = {
  children: 'Link text',
  href: '#',
  size: 'xs',
  variant: 'reverse',
};
ExtraSmallReverseLink.parameters = {
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

export const SmallReverseExternalLink = Template.bind({});
SmallReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'sm',
  variant: 'reverse',
  isExternal: true,
};
SmallReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};

export const ExtraSmallReverseExternalLink = Template.bind({});
ExtraSmallReverseExternalLink.args = {
  children: 'Link text',
  href: '#',
  size: 'xs',
  variant: 'reverse',
  isExternal: true,
};
ExtraSmallReverseExternalLink.parameters = {
  backgrounds: { default: 'dark' },
};
