import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '../../main';

export default {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      name: 'orientation',
      type: { name: 'string', required: false },
      defaultValue: 'horizontal',
      description: 'different orientation for tabs',
      table: {
        type: { summary: 'horizontal|vertical' },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    defaultIndex: {
      name: 'defaultIndex',
      type: { name: 'number', required: false },
      defaultValue: 0,
      description: 'default index of tab to start on',
    },
  },
};

const Template = (args) => (
  <Tabs {...args}>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const TabsExample = Template.bind({});
TabsExample.args = {};

export const DefaultIndexSelectedTab = () => (
  <Tabs defaultIndex={1}>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const VerticalTabsWithPadding = () => (
  <Tabs orientation="vertical">
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
    <TabPanels p="2">
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);
