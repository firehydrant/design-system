import React from 'react';
import {
  Box,
  Code,
  Icon,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '../../main';
import { iconList } from './Icon';
import { colorOptions } from '../../theme/colors.theme';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      options: iconList.sort(),
      table: { defaultValue: { summary: 'info' } },
      control: {
        type: 'select',
        options: iconList.sort(),
      },
    },
    color: {
      options: colorOptions,
      table: {
        defaultValue: { summary: 'currentColor' },
        type: {
          summary: `${colorOptions.join('|')}`,
        },
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
    <Table>
      <Thead>
        <Tr>
          <Th w="10%" />
          <Th>
            <kbd>Icon</kbd> prop
          </Th>
          <Th>Component</Th>
        </Tr>
      </Thead>
      <Tbody>
        {iconList.sort().map((icon, index) => (
          <Tr key={index}>
            <Td>
              <Icon name={icon} {...args} />
            </Td>
            <Td>
              <Text as="kbd">{icon}</Text>
            </Td>
            <Td>
              <Code py={1} px={2}>
                {`<${icon[0].toUpperCase() + icon.substring(1) + 'Icon'} />`}
              </Code>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </>
);
AllIcons.argTypes = {
  name: { table: { disable: true }, control: { disable: true } },
};
