import React from 'react';
import { Box, Icon, Text, Table, Thead, Tbody, Tr, Th, Td } from '../../main';
import { iconList } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'name of desired icon',
      table: {
        type: {
          summary: `${iconList.join('|')}`,
        },
      },
      control: {
        type: 'select',
        options: iconList.sort(),
      },
    },
  },
};

export const Default = (args) => <Icon {...args} />;

export const AllIcons = (args) => (
  <>
    <Box as="code" display="block" pb={4}>
      There are {iconList.length} icons
    </Box>
    <Table color="currentColor">
      <Thead>
        <Th w="10%" />
        <Th>
          <kbd>Icon</kbd> prop
        </Th>
        <Th>Component</Th>
      </Thead>
      <Tbody>
        {iconList.sort().map((icon) => (
          <Tr key={icon}>
            <Td>
              <Icon name={icon} {...args} />
            </Td>
            <Td>
              <Text as="kbd">{icon}</Text>
            </Td>
            <Td>{`<${
              icon[0].toUpperCase() + icon.substring(1) + 'Icon'
            } />`}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </>
);
AllIcons.argTypes = {
  name: { table: { disable: true }, control: { disable: true } },
};
