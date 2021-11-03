import React from 'react';
import { Alert } from './index';
import { Link } from '../../main';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      description: 'Inner elements or text for element',
    },
    variant: {
      description: 'Visual style of component',
      options: ['info', 'success', 'warning', 'alert'],
      control: { type: 'radio' },
    },
    dismissable: {
      description: 'Adds close button to Alert',
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ children, ...args }) => <Alert {...args}>{children}</Alert>;

export const NeutralAlert = Template.bind({});
NeutralAlert.args = { variant: 'info', children: 'Neutral text' };

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  variant: 'success',
  dismissable: true,
  onDismiss: () => {
    alert('dismissing');
  },
  children: 'Success text',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  variant: 'warning',
  dismissable: true,
  onDismiss: () => {
    alert('dismissing');
  },
  children: (
    <span>
      {`Warning text. I'm writing something very long to demonstrate how this will
      wrap. We're going to keep going here. `}
      <Link>Configure now</Link>
    </span>
  ),
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = { variant: 'alert', children: 'Error text' };
