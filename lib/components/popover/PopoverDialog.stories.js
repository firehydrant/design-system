import React from 'react';
import { PopoverDialog } from './PopoverDialog';

export default {
  title: 'Components/Popover',
  component: PopoverDialog,
  argTypes: {
    body: {
      name: 'body',
      description: 'Inner element or text for popover',
    },
    trigger: {
      name: 'trigger',
      description: 'Element that triggers popover on click',
    },
    headerText: {
      description: 'Text in the header',
    },
    hasClose: {
      description: 'Shows the X to close the popover',
    },
    footerButtonText: {
      description: 'Text to show in the button at bottom',
    },
  },
};

const Template = (args) => <PopoverDialog {...args} />;
const defaultDialogArgs = {
  body: <p>Here is some information.</p>,
  footerButtonText: 'Learn more',
  footerButtonAction: () => window.open('https://www.google.com', '_blank'),
  headerText: 'Popover Title',
};
export const PopoverDialogDefault = Template.bind({});
PopoverDialogDefault.args = defaultDialogArgs;

export const PopoverDialogSmall = Template.bind({});
PopoverDialogSmall.args = { ...defaultDialogArgs, smallPopover: true };

export const PopoverDialogRight = Template.bind({});
PopoverDialogRight.args = { ...defaultDialogArgs, placement: 'right' };

export const PopoverDialogNoTitle = Template.bind({});
PopoverDialogNoTitle.args = {
  ...defaultDialogArgs,
  headerText: null,
};

export const PopoverDialogNoCornerClose = Template.bind({});
PopoverDialogNoCornerClose.args = { ...defaultDialogArgs, hasClose: false };
