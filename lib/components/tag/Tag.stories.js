import React from 'react';
import {
  InfoIcon,
  SuccessIcon,
  AlertIcon,
  WarningIcon,
  AccountIcon,
  StarFilledIcon,
} from '../../main';
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
  },
};

const Template = ({ children, ...args }) => (
  <Tag {...args}>
    <TagLabel>{children}</TagLabel>
  </Tag>
);

export const DefaultTag = Template.bind({});
DefaultTag.args = { children: 'Default' };

export const DefaultIcon = () => (
  <Tag>
    <TagLeftIcon as={InfoIcon} />
    <TagLabel>Default</TagLabel>
  </Tag>
);

export const DefaultIconRight = () => (
  <Tag>
    <TagLabel>Default</TagLabel>
    <TagRightIcon as={InfoIcon} />
  </Tag>
);

export const SuccessTag = Template.bind({});
SuccessTag.args = { variant: 'success', children: 'Success' };

export const SuccessIconTag = () => (
  <Tag variant="success">
    <TagLeftIcon as={SuccessIcon} />
    <TagLabel>Success</TagLabel>
  </Tag>
);

export const AlertTag = Template.bind({});
AlertTag.args = { variant: 'alert', children: 'Alert' };

export const AlertIconTag = () => (
  <Tag variant="alert">
    <TagLeftIcon as={AlertIcon} />
    <TagLabel>Alert</TagLabel>
  </Tag>
);

export const WarningTag = Template.bind({});
WarningTag.args = { variant: 'warning', children: 'Warning' };

export const WarningIconTag = () => (
  <Tag variant="warning">
    <TagLeftIcon as={WarningIcon} />
    <TagLabel>Warning</TagLabel>
  </Tag>
);

export const NeutralTag = Template.bind({});
NeutralTag.args = { variant: 'neutral', children: 'Neutral' };

export const NeutralIconTag = () => (
  <Tag variant="neutral">
    <TagLeftIcon as={InfoIcon} />
    <TagLabel>Neutral</TagLabel>
  </Tag>
);

export const AccentTealTag = Template.bind({});
AccentTealTag.args = {
  variant: 'accentTeal',
  children: 'Accent Teal',
};

export const AccentTealIconTag = () => (
  <Tag variant="accentTeal">
    <TagLeftIcon as={AccountIcon} />
    <TagLabel>Accent Teal</TagLabel>
  </Tag>
);

export const AccentPurpleTag = Template.bind({});
AccentPurpleTag.args = {
  variant: 'accentPurple',
  children: 'Accent Purple',
};

export const AccentPurpleIconTag = () => (
  <Tag variant="accentPurple">
    <TagLeftIcon as={StarFilledIcon} />
    <TagLabel>Accent Purple</TagLabel>
  </Tag>
);
