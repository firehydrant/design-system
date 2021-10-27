import React from 'react';

import { ThemeProvider } from '../lib/main';

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', ['Actions', 'Forms', 'Layout'], 'Recipes'],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'grey',
        value: '#eef1f6',
      },
      {
        name: 'dark',
        value: '#182042',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
