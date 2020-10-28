const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|jsx|mdx|tsx|ts)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/preset-typescript',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ]
};
