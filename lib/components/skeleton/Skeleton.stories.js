import React from 'react';
import {
  Box,
  Skeleton,
  SkeletonHeading,
  SkeletonText,
  SkeletonCircle,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Text,
} from '../../main';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    children: {
      description: 'Inner elements or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    height: {
      description: 'Explicit height of skeleton',
    },
    isLoaded: {
      description:
        'Will hide skeleton when added (set to true); children of Skeleton will become visible',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = ({ children, ...args }) => (
  <Skeleton {...args}>{children}</Skeleton>
);

const TextTemplate = ({ children, ...args }) => (
  <SkeletonText {...args}>{children}</SkeletonText>
);

export const Default = Template.bind({});

export const Heading = ({ children, ...args }) => (
  <SkeletonHeading {...args}>{children}</SkeletonHeading>
);

export const Paragraph = TextTemplate.bind({});
Paragraph.args = {
  noOfLines: 4,
  skeletonHeight: '18px',
};

export const Avatar = ({ children, ...args }) => (
  <SkeletonCircle {...args}>{children}</SkeletonCircle>
);

export const TableRecipe = ({ ...args }) => (
  <Table verticalAlign="middle">
    <Thead>
      <Tr>
        <Td width="80%">
          <Skeleton maxW="65ch" {...args}>
            Table header
          </Skeleton>
        </Td>
        <Td textAlign="right">
          <SkeletonCircle size="24px" mr={4} display="inline-block" {...args} />
          <SkeletonCircle size="24px" display="inline-block" {...args} />
        </Td>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td width="80%">
          <Skeleton maxW="65ch" {...args}>
            Content to be loaded
          </Skeleton>
        </Td>
        <Td textAlign="right">
          <SkeletonCircle size="24px" mr={4} display="inline-block" {...args} />
          <SkeletonCircle size="24px" display="inline-block" {...args} />
        </Td>
      </Tr>

      <Tr>
        <Td width="80%">
          <Skeleton maxW="65ch" {...args}>
            Content to be loaded
          </Skeleton>
        </Td>
        <Td textAlign="right">
          <SkeletonCircle size="24px" mr={4} display="inline-block" {...args} />
          <SkeletonCircle size="24px" display="inline-block" {...args} />
        </Td>
      </Tr>

      <Tr>
        <Td width="80%">
          <Skeleton maxW="65ch" {...args}>
            Content to be loaded
          </Skeleton>
        </Td>
        <Td textAlign="right">
          <SkeletonCircle size="24px" mr={4} display="inline-block" {...args} />
          <SkeletonCircle size="24px" display="inline-block" {...args} />
        </Td>
      </Tr>

      <Tr>
        <Td width="80%">
          <Skeleton maxW="65ch" {...args}>
            Content to be loaded
          </Skeleton>
        </Td>
        <Td textAlign="right">
          <SkeletonCircle size="24px" mr={4} display="inline-block" {...args} />
          <SkeletonCircle size="24px" display="inline-block" {...args} />
        </Td>
      </Tr>
    </Tbody>
  </Table>
);
TableRecipe.args = {
  isLoaded: false,
};

export const IsLoaded = Template.bind({});
IsLoaded.args = {
  isLoaded: true,
  children:
    'Anything placed inside as a child will be visible when isLoaded is passed.',
};

export const ImpliedHeight = Template.bind({});
ImpliedHeight.args = {
  height: 'unset',
  isLoaded: false,
  children: (
    <Box>
      <Text>Children inside the Skeleton component</Text>
      <Text>should cause it to grow to the height of the children</Text>
      <Text>but you must unset the height prop (which defaults to 18px).</Text>
    </Box>
  ),
};