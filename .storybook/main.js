const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

// seems their is a current issues with webpack, storybook and Chakra deps
// https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-810293915
module.exports = {
  stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
