import React from 'react';
import { Text, Box, Flex, Button } from '../../main';
import { Card, CardHeader, CardTitle } from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = { children: 'Card with some example content inside' };

export const CardWithHeader = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h3">Title</CardTitle>
        <Button variant="secondary">Button</Button>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithHeaderAndMaxWidth = () => {
  return (
    <Box maxWidth="272px">
      <Card>
        <CardHeader>
          <CardTitle as="h3">Title</CardTitle>
          <Button variant="secondary">Button</Button>
        </CardHeader>
        <Text>Card with some example content inside</Text>
      </Card>
    </Box>
  );
};
