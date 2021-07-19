
import React from 'react';
import { Alert, AlertWithClose } from './index';
import { Link, Text } from '../../main';

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
NeutralAlert.args = { variant: 'info', children: <Text color="grey.90" size="5">Neutral text</Text> };

export const SuccessAlert = Template.bind({});
SuccessAlert.args = { variant: 'success', dismissable: true, onDismiss: () => {alert('dismissing')}, children: <Text color="grey.90" size="5">Success text</Text> };

export const WarningAlert = Template.bind({});
WarningAlert.args = { variant: 'warning', dismissable: true, onDismiss: () => {alert('dismissing')}, children: <Text color="grey.90" size="5">Warning text. I'm writing something very long to demonstrate how this will wrap. We're going to keep going here. <Link>Configure now</Link></Text> };

export const ErrorAlert = Template.bind({});
ErrorAlert.args = { variant: 'alert', children: <Text color="grey.90" size="5">Error text</Text> };
