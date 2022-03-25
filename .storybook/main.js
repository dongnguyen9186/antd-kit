module.exports = {
  stories: [
    "../src/components/**/*.stories.tsx",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        require.resolve("style-loader"),
        require.resolve("css-loader"),
        // {
        //   loader: require.resolve("css-loader"),
        //   options: {
        //     modules: true,
        //     importLoaders: 1,
        //     localIdentName: "[name]__[local]___[hash:base64:5]",
        //   },
        // },
        {
          loader: require.resolve("less-loader"),
          options: {
            javascriptEnabled: true
          },
        },
      ],
    });
    return config;
  },
  addons: [
    '@storybook/addon-knobs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
};
