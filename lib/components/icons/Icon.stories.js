import React from 'react';
import { Wrap, Icon } from '../../main';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    name: {
      name: 'name',
      type: { name: 'string', required: true },
      description: 'component to use all our icons',
      table: {
        type: {
          summary:
            'account|alert|analyticsFilled|analyticsOutline|arrowDown|arrowLeft|arrowRight|arrowUp|atom|check|chevronDown|chevronLeft|chevronRight|chevronUp|close|delete|download|edit|error|externalLink|file|help|helpFilled|homeFilled|homeOutline|import|incidentResponseFilled|incidentResponseOutline|incidentsFilled|incidentsOutline|info|infrastructureFilled|infrastructureOutline|integrationsFilled|integrationsOutline|lock|menu|minus|organizationFilled|organizationOutline|plus|refresh|rocket|runbooksFilled|runbooksOutline|search|settings|starFilled|starOutline|statusPagesFilled|statusPagesOutline|success|team|ticket|unlock|userFilled|userOutline|warning',
        },
        defaultValue: { summary: 'n/a' },
      },
      control: {
        type: 'select',
        options: [
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
          'error',
          'externalLink',
          'file',
          'help',
          'helpFilled',
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
        ],
      },
    },
  },
};

export const Default = (args) => <Icon {...args} />;

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
      <Icon name="help" />
      <Icon name="organizationOutline" />
      <Icon name="userOutline" />
    </Wrap>
  </>
);

export const AllOthers = () => (
  <Wrap spacing={2} p={2}>
    <Icon name="account" />
    <Icon name="atom" />
    <Icon name="email" />
    <Icon name="externalLink" />
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
