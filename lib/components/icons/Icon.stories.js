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
          summary: `arrowDown|arrowLeft|arrowRight|arrowUp|check|chevronDown|chevronLeft|chevronRight|chevronUp|close|del|edit|error|externalLink|help|info|plus|settings|starFilled|starOutline|success|warning`,
        },
        defaultValue: { summary: 'n/a' },
      },
      control: {
        type: 'select',
        options: [
          'account',
          'arrowDown',
          'arrowLeft',
          'arrowRight',
          'arrowUp',
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
          'file',
          'help',
          'import',
          'info',
          'mail',
          'minus',
          'plus',
          'search',
          'settings',
          'starFilled',
          'starOutline',
          'success',
          'refresh',
          'team',
          'warning',
        ],
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const AccountIcon = Template.bind({});
AccountIcon.args = {
  name: 'account',
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
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

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  name: 'check',
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  name: 'chevronDown',
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

export const EmailIcon = Template.bind({});
EmailIcon.args = {
  name: 'email',
};

export const ErrorIcon = Template.bind({});
ErrorIcon.args = {
  name: 'error',
};

export const ExternalLinkIcon = Template.bind({});
ExternalLinkIcon.args = {
  name: 'externalLink',
};

export const FileIcon = Template.bind({});
FileIcon.args = {
  name: 'file',
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  name: 'filter',
};

export const HelpIcon = Template.bind({});
HelpIcon.args = {
  name: 'help',
};

export const ImportIcon = Template.bind({});
ImportIcon.args = {
  name: 'import',
};

export const InfoIcon = Template.bind({});
InfoIcon.args = {
  name: 'info',
};

export const MinusIcon = Template.bind({});
MinusIcon.args = {
  name: 'minus',
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  name: 'plus',
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  name: 'search',
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

export const RefreshIcon = Template.bind({});
RefreshIcon.args = {
  name: 'refresh',
};

export const TeamIcon = Template.bind({});
TeamIcon.args = {
  name: 'team',
};

export const SuccessIcon = Template.bind({});
SuccessIcon.args = {
  name: 'success',
};

export const WarningIcon = Template.bind({});
WarningIcon.args = {
  name: 'warning',
};
