import React from 'react';
import { PopoverInput } from './PopoverInput';
import { Box, Dropdown } from '../../main';

export default {
  title: 'Components/Popover',
  component: PopoverInput,
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
    footerButtonAction: {
      description: 'The action associated with the CTA button',
    },
    footerButtonText: {
      description: 'Text to show in the button at bottom',
    },
  },
};
const defaultOptions = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];
const defaultInputArgs = {
  body: <Dropdown options={defaultOptions} />,
  footerButtonText: 'Done',
  footerButtonAction: () => console.log('You clicked a button'),
  headerText: 'Popover Title',
};

export const PopoverInputDefault = () => {
  return (
    <PopoverInput
      {...defaultInputArgs}
      trigger={<Box width="100px">Trigger text</Box>}
    />
  );
};
