
import React from 'react';
import { Alert, AlertWithClose } from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      description: 'Inner elements or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
};

const Template = ({ children, ...args }) => <Alert {...args}>{children}</Alert>;

export const NeutralAlert = Template.bind({});
NeutralAlert.args = { status: 'info', children: 'Neutral text' };

export const SuccessAlert = Template.bind({});
SuccessAlert.args = { status: 'success', children: 'Success text' };

export const WarningAlert = Template.bind({});
WarningAlert.args = { status: 'warning', children: 'Warning text' };

export const ErrorAlert = Template.bind({});
ErrorAlert.args = { status: 'error', children: 'Error text' };
