import React from 'react';
import { Menu } from './Menu';
import { Box, Button, Icon, MenuGroup, MenuItem } from '../../main';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    buttonComponent: {
      description: 'trigger for menu list, using Button DS component',
      table: {
        type: { summary: 'node' },
      },
    },
    maxWidth: {
      description: 'set the max width of the menu list',
      table: {
        type: { summary: 'string' },
      },
    }
  },
};

const defaultOptions = [
  {
    label: 'One',
  },
  {
    label: 'Two',
    leftIcon: <Icon name="arrowLeft" />,
  },
  {
    label: 'Three',
  },
  {
    label: 'Four',
    rightIcon: <Icon name="arrowRight" />,
  },
];

const groupedOptions = [
  {
    label: 'First group',
    options: [
      {
        label: 'One',
      },
      {
        label: 'Two',
        leftIcon: <Icon name="arrowLeft" />,
      },
      {
        label: 'Three',
      },
      {
        label: 'Four',
        rightIcon: <Icon name="arrowRight" />,
      },
    ],
  },
  {
    label: 'Second group with really long label that we want to wrap appropriately',
    options: [
      {
        label: 'One',
      },
      {
        label: 'Two',
        leftIcon: <Icon name="arrowLeft" />,
      },
      {
        label: 'Third option with really long label that we want to wrap appropriately',
      },
      {
        label: 'Four',
        rightIcon: <Icon name="arrowRight" />,
      },
    ],
  },
];

const withReadOnlyOptions = [
  {
    label: 'One',
  },
  {
    label: 'Two',
    leftIcon: <Icon name="arrowLeft" />,
  },
  {
    label: 'Three',
  },
  {
    label: 'Four',
    rightIcon: <Icon name="arrowRight" />,
  },
  {
    label: 'Read only label with icon',
    isDisabled: true,
    rightIcon: <Icon name="arrowRight" />,
  },
];

export const DefaultMenuTemplate = () => (
  <Menu buttonComponent={"open me"}>
    {defaultOptions.map(option => 
      <MenuItem
        option={option}
        onClick={() => (alert(`navigating to ${option.label}`))}
      />
    )}
  </Menu>
);

export const GroupedMenuTemplate = () => (
  <Menu buttonComponent={"open me"} maxWidth="300px">
    {groupedOptions.map(group => 
      <MenuGroup title={group.label}>
        {group.options.map(option =>
          <MenuItem
            option={option}
            onClick={() => (alert(`navigating to ${option.label}`))}
          />
        )}
      </MenuGroup>
    )}
  </Menu>
);

export const WithDisabledItemMenuTemplate = () => (
  <Menu buttonComponent={"open me"}>
    {withReadOnlyOptions.map(option => 
      <MenuItem
        option={option}
        onClick={() => (alert(`navigating to ${option.label}`))}
      />
    )}
  </Menu>
)