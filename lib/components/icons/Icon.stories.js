import React from 'react';
import { Icon } from '../icons';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'component to use all our icons',
      table: {
        type: {
          summary: `arrowDown|arrowLeft|arrowRight|arrowUp|brokenLink|check|chevronDown|chevronLeft|chevronRight|chevronUp|close|del|edit|error|externalLink|help|info|plus|settings|starFilled|starOutline|success|warning`,
        },
        defaultValue: { summary: 'n/a' },
      },
      control: {
        type: 'select',
        options: [
          'arrowDown',
          'arrowLeft',
          'arrowRight',
          'arrowUp',
          'brokenLink',
          'check',
          'chevronDown',
          'chevronLeft',
          'chevronRight',
          'chevronUp',
          'close',
          'delete',
          'edit',
          'error',
          'externalLink',
          'help',
          'info',
          'plus',
          'settings',
          'starFilled',
          'starOutline',
          'success',
          'warning',
        ],
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const BaseIcon = Template.bind({});
BaseIcon.args = {
  name: 'arrowRight',
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = {
  name: 'arrowDown',
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  name: 'arrowLeft',
};

export const ArrowUpIcon = Template.bind({});
ArrowUpIcon.args = {
  name: 'arrowUp',
};

export const BrokenLinkIcon = Template.bind({});
BrokenLinkIcon.args = {
  name: 'brokenLink',
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  name: 'check',
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  name: 'chevronDwon',
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  name: 'chevronLeft',
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  name: 'chevronRight',
};

export const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = {
  name: 'chevronUp',
};

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  name: 'close',
};

export const DeleteIcon = Template.bind({});
DeleteIcon.args = {
  name: 'delete',
};

export const EditIcon = Template.bind({});
EditIcon.args = {
  name: 'edit',
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  name: 'error',
};

export const ExternalLinkIcon = Template.bind({});
ExternalLinkIcon.args = {
  name: 'externalLink',
};

export const HelpIcon = Template.bind({});
HelpIcon.args = {
  name: 'help',
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  name: 'info',
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  name: 'plus',
};

export const SettingsIcon = Template.bind({});
SettingsIcon.args = {
  name: 'settings',
};

export const StarFilledIcon = Template.bind({});
StarFilledIcon.args = {
  name: 'starFilled',
};

export const StarOutlineIcon = Template.bind({});
StarOutlineIcon.args = {
  name: 'starOutline',
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  name: 'success',
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  name: 'warning',
};
