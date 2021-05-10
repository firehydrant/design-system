import React from 'react';
import { Text, Button } from '../../main';
import { Card, CardHeader, CardTitle, CardActions } from './Card';

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
        <CardTitle>Title</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithHeaderAndMaxWidth = () => {
  return (
    <Card maxWidth="372px">
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithLongHeader = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithLongHeaderAndMaxWidth = () => {
  return (
    <Card maxWidth="372px">
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithMultipleActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title heading</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};

export const CardWithMultipleActionsAndMaxWidth = () => {
  return (
    <Card maxWidth="372px">
      <CardHeader>
        <CardTitle>Title heading</CardTitle>
        <CardActions>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary">Button</Button>
        </CardActions>
      </CardHeader>
      <Text>Card with some example content inside</Text>
    </Card>
  );
};
