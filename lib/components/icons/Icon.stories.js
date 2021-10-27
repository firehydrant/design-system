import React from 'react';
import { Wrap, Icon, Text, Table, Thead, Tbody, Tr, Th, Td } from '../../main';

let iconList = [
  'account',
  'alert',
  'analyticsFilled',
  'analyticsOutline',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'atom',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'close',
  'delete',
  'download',
  'edit',
  'email',
  'externalLink',
  'file',
  'filter',
  'helpFilled',
  'helpOutline',
  'homeFilled',
  'homeOutline',
  'import',
  'incidentResponseFilled',
  'incidentResponseOutline',
  'incidentsFilled',
  'incidentsOutline',
  'info',
  'infrastructureFilled',
  'infrastructureOutline',
  'integrationsFilled',
  'integrationsOutline',
  'lock',
  'menu',
  'minus',
  'organizationFilled',
  'organizationOutline',
  'plus',
  'refresh',
  'rocket',
  'runbooksFilled',
  'runbooksOutline',
  'search',
  'settings',
  'starFilled',
  'starOutline',
  'statusPagesFilled',
  'statusPagesOutline',
  'success',
  'team',
  'ticket',
  'unlock',
  'userFilled',
  'userOutline',
  'warning',
];

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
  <Table color="currentColor">
    <Thead>
      <Th w="10%">Icon</Th>
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
          <Td>{`<${icon[0].toUpperCase() + icon.substring(1) + 'Icon'} />`}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);
AllIcons.argTypes = {
  name: { table: { disable: true }, control: { disable: true } },
};

export const Arrows = () => (
  <>
    <Wrap spacing={2} p={2}>
      <Icon name="arrowRight" />
      <Icon name="arrowLeft" />
      <Icon name="arrowUp" />
      <Icon name="arrowDown" />
    </Wrap>
    <Wrap spacing={2} p={2}>
      <Icon name="chevronRight" />
      <Icon name="chevronLeft" />
      <Icon name="chevronUp" />
      <Icon name="chevronDown" />
    </Wrap>
  </>
);

export const Status = () => (
  <Wrap spacing={2} p={2}>
    <Icon name="success" />
    <Icon name="alert" />
    <Icon name="warning" />
  </Wrap>
);

export const Action = () => (
  <Wrap spacing={2} p={2}>
    <Icon name="close" />
    <Icon name="check" />
    <Icon name="plus" />
    <Icon name="delete" />
    <Icon name="edit" />
    <Icon name="starOutline" />
    <Icon name="starFilled" />
    <Icon name="search" />
    <Icon name="refresh" />
    <Icon name="minus" />
    <Icon name="import" />
    <Icon name="download" />
  </Wrap>
);

export const ProductsAndPages = () => (
  <>
    <Wrap spacing={2} p={2}>
      <Icon name="homeFilled" />
      <Icon name="incidentsFilled" />
      <Icon name="incidentResponseFilled" />
      <Icon name="runbooksFilled" />
      <Icon name="infrastructureFilled" />
      <Icon name="statusPagesFilled" />
      <Icon name="analyticsFilled" />
      <Icon name="integrationsFilled" />
      <Icon name="helpFilled" />
      <Icon name="organizationFilled" />
      <Icon name="userFilled" />
    </Wrap>
    <Wrap spacing={2} p={2}>
      <Icon name="homeOutline" />
      <Icon name="incidentsOutline" />
      <Icon name="incidentResponseOutline" />
      <Icon name="runbooksOutline" />
      <Icon name="infrastructureOutline" />
      <Icon name="statusPagesOutline" />
      <Icon name="analyticsOutline" />
      <Icon name="integrationsOutline" />
      <Icon name="helpOutline" />
      <Icon name="organizationOutline" />
      <Icon name="userOutline" />
    </Wrap>
  </>
);

export const Other = () => (
  <Wrap spacing={2} p={2}>
    <Icon name="account" />
    <Icon name="atom" />
    <Icon name="email" />
    <Icon name="externalLink" />
    <Icon name="filter" />
    <Icon name="info" />
    <Icon name="menu" />
    <Icon name="rocket" />
    <Icon name="settings" />
    <Icon name="team" />
    <Icon name="ticket" />
    <Icon name="lock" />
    <Icon name="unlock" />
  </Wrap>
);
