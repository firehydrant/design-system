import React from 'react';
import {
  Button,
  ButtonGroup,
  Link,
  Tag,
  TagLabel,
  IconButton,
} from '../../main';
import { Table, Thead, Tbody, Tr, Th, Td } from './';

export default {
  title: 'Components/Layout/Table',
  component: Table,
  argTypes: {
    verticalAlign: {
      type: { name: 'string', required: false },
      defaultValue: 'initial',
      description: 'different text alignments',
      table: {
        type: { summary: 'initial|baseline|top|middle|bottom|sub|text-top' },
        defaultValue: { summary: 'initial' },
      },
      control: {
        type: 'select',
        options: [
          'initial',
          'baseline',
          'top',
          'middle',
          'bottom',
          'sub',
          'text-top',
        ],
      },
    },
  },
};

export const Overview = ({ args }) => (
  <Table {...args}>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Title</Th>
        <Th>Title</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Value</Td>
        <Td>Value</Td>
        <Td>Value</Td>
      </Tr>
      <Tr>
        <Td>Value</Td>
        <Td>Value</Td>
        <Td>Value</Td>
      </Tr>
      <Tr>
        <Td>Value</Td>
        <Td>Value</Td>
        <Td>Value</Td>
      </Tr>
    </Tbody>
  </Table>
);

export const ColumnAlignment = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Type</Th>
        <Th>Stocked</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td>
          <Link>Fruit</Link>
        </Td>
        <Td>Yes</Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>
          <Link>Fruit</Link>
        </Td>
        <Td>No</Td>
      </Tr>
      <Tr>
        <Td>Potato</Td>
        <Td>
          <Link>Vegetable</Link>
        </Td>
        <Td>No</Td>
      </Tr>
      <Tr>
        <Td>Bread</Td>
        <Td>
          <Link>Grain</Link>
        </Td>
        <Td>No</Td>
      </Tr>
    </Tbody>
  </Table>
);

export const Numbers = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th isNumeric>Amount</Th>
        <Th isNumeric>Total price</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td isNumeric>1</Td>
        <Td isNumeric>$10.00</Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td isNumeric>2</Td>
        <Td isNumeric>$1.50</Td>
      </Tr>
      <Tr>
        <Td>Orange</Td>
        <Td isNumeric>4</Td>
        <Td isNumeric>$4.00</Td>
      </Tr>
      <Tr>
        <Td>Kiwi</Td>
        <Td isNumeric>2</Td>
        <Td isNumeric>$2.50</Td>
      </Tr>
    </Tbody>
  </Table>
);

export const MixedContentAndMetrics = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th isNumeric>Amount</Th>
        <Th isNumeric>Total price</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td isNumeric>1 lb/s</Td>
        <Td isNumeric>$10.00</Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td isNumeric>2 lb/s</Td>
        <Td isNumeric>$1.50</Td>
      </Tr>
      <Tr>
        <Td>Orange</Td>
        <Td isNumeric>4 lb/s</Td>
        <Td isNumeric>$4.00</Td>
      </Tr>
      <Tr>
        <Td>Kiwi</Td>
        <Td isNumeric>3 lb/s</Td>
        <Td isNumeric>$2.50</Td>
      </Tr>
    </Tbody>
  </Table>
);

export const Badges = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Type</Th>
        <Th>Availability</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td>Fruit</Td>
        <Td>
          <Tag variant="success">
            <TagLabel>Stocked</TagLabel>
          </Tag>
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>Fruit</Td>
        <Td>
          <Tag variant="alert">
            <TagLabel>Out of stock</TagLabel>
          </Tag>
        </Td>
      </Tr>
      <Tr>
        <Td>Potato</Td>
        <Td>Vegetable</Td>
        <Td>
          <Tag variant="alert">
            <TagLabel>Out of stock</TagLabel>
          </Tag>
        </Td>
      </Tr>
      <Tr>
        <Td>Break</Td>
        <Td>Grain</Td>
        <Td>
          <Tag variant="alert">
            <TagLabel>Out of stock</TagLabel>
          </Tag>
        </Td>
      </Tr>
    </Tbody>
  </Table>
);

export const Buttons = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Type</Th>
        <Th>Purchase</Th>
        <Th>Find similar</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td>Fruit</Td>
        <Td isInteractive>
          <Button variant="secondary">Buy Now</Button>
        </Td>
        <Td isInteractive>
          <IconButton variant="secondary" name="search" />
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>Fruit</Td>
        <Td isInteractive>
          <Button variant="secondary">Buy Now</Button>
        </Td>
        <Td isInteractive>
          <IconButton variant="secondary" name="search" />
        </Td>
      </Tr>
      <Tr>
        <Td>Potato</Td>
        <Td>Vegetable</Td>
        <Td isInteractive>
          <Button variant="secondary">Buy Now</Button>
        </Td>
        <Td isInteractive>
          <IconButton variant="secondary" name="search" />
        </Td>
      </Tr>
      <Tr>
        <Td>Break</Td>
        <Td>Grain</Td>
        <Td isInteractive>
          <Button variant="secondary">Buy Now</Button>
        </Td>
        <Td isInteractive>
          <IconButton variant="secondary" name="search" />
        </Td>
      </Tr>
    </Tbody>
  </Table>
);

export const ButtonGrouping = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Type</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td>Fruit</Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>Fruit</Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
      <Tr>
        <Td>Potato</Td>
        <Td>Vegetable</Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
      <Tr>
        <Td>Break</Td>
        <Td>Grain</Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
    </Tbody>
  </Table>
);

export const RowAlignment = () => (
  <Table verticalAlign="top">
    <Thead>
      <Tr>
        <Th>Item</Th>
        <Th>Type</Th>
        <Th>Description</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Banana</Td>
        <Td>Fruit</Td>
        <Td>
          A banana is an elongated, edible fruit – botanically a berry –
          produced by several kinds of large herbaceous flowering plants in the
          genus Musa.
        </Td>
        <Td isInteractive minWidth="200px">
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
      <Tr>
        <Td>Apple</Td>
        <Td>Fruit</Td>
        <Td>An apple is an edible fruit produced by an apple tree.</Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
      <Tr>
        <Td>Potato</Td>
        <Td>Vegetable</Td>
        <Td>
          The potato is a root vegetable native to the Americas, a starchy tuber
          of the plant Solanum tuberosum.
        </Td>
        <Td isInteractive>
          <ButtonGroup>
            <Button variant="secondary">Buy Now</Button>
            <IconButton variant="secondary" name="search" />
          </ButtonGroup>
        </Td>
      </Tr>
    </Tbody>
  </Table>
);
