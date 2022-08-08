module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
          absoluteRuntime: false,
          corejs: false,
          helpers: true,
          regenerator: true,
          version: '7.0.0-beta.0',
      },
  ],
  [
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ],
  'react-native-reanimated/plugin',
  ],
};

const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '~/',
  rootPathSuffix: 'src/js',
};