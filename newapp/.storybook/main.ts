import custom from '../webpack.config';
export const config = {
  webpackFinal: async (config, {
    configType
  }) => {
    return { ...config,
      module: { ...config.module,
        rules: custom.module!.rules
      }
    };
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-actions'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5'
  }
};
export const core = {
  builder: 'webpack5'
};