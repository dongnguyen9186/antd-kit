const path = require('path');
const lessPath = path.resolve(__dirname, '../src/theme/variables.less');

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      exclude:  /\.module\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.module\.less$/,
      include: [
        path.resolve(__dirname, '../src/components'),
      ],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          },
        },
      ],
    });

    return config;
  },

  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
