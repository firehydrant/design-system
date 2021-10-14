import React from 'react';
import { Breadcrumbs } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    crumbs: {
      name: 'crumbs',
      type: 'object',
    },
  },
};

const threeBreadcrumbsList = {
  ids: ['Breadcrumb_One', 'Breadcrumb_Two', 'Current_Page'],
  breadcrumbs: {
    'Breadcrumb_One': {
      id: 'Breadcrumb_One', text: 'Breadcrumb One', url: '/'
    },
    'Breadcrumb_Two': {
      id: 'Breadcrumb_Two', text: 'Breadcrumb Two', url: '/'
    },
    'Current_Page': {
      id: 'Current_Page', text: 'Current Page', url: '/'
    },
  }
};
const moreBreadcrumbsList = {
  ids: ['Breadcrumb_One', 'Breadcrumb_Two', 'Breadcrumb_Three', 'Breadcrumb_Four', 'Current_Page'],
  breadcrumbs: {
    'Breadcrumb_One': {
      id: 'Breadcrumb_One', text: 'Breadcrumb One', url: '/'
    },
    'Breadcrumb_Two': {
      id: 'Breadcrumb_Two', text: 'Breadcrumb Two', url: '/'
    },
    'Breadcrumb_Three': {
      id: 'Breadcrumb_Three', text: 'Breadcrumb Three', url: '/'
    },
    'Breadcrumb_Four': {
      id: 'Breadcrumb_Four', text: 'Breadcrumb Four', url: '/'
    },
    'Current_Page': {
      id: 'Current_Page', text: 'Current Page', url: '/'
    },
  }
};

const Template = (args) => <Breadcrumbs {...args} />;

export const DefaultThreeCrumbs = Template.bind({});
DefaultThreeCrumbs.args = { crumbs: threeBreadcrumbsList };

export const MoreThanThreeCrumbs = Template.bind({});
MoreThanThreeCrumbs.args = { crumbs: moreBreadcrumbsList};