module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@ultis': './src/ultis',
          '@elements': './src/elements',
          '@svgs': './src/svgs',
          '@nav': './src/nav',
          '@assets': './src/assets',
          '@actions': './src/actions',
          '@api': '.src/api',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@reducers': './src/reducers',
          '@sagas/*': './src/sagas',
          '@store/*': './src/store',
          '@fonts': './src/fonts',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
  ],
  env: {
    production: {
      plugins: [['react-native-paper/babel']],
    },
  },
};
