const {getDefaultConfig} = require('metro-config');
const path = require('path');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      enableBabelRCLookup: true,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      blacklistRE: /.*\/node_modules\/.*\/node_modules\/react-native\/.*/,
      enableDangerousModuleMethods: true,
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
      extraNodeModules: new Proxy(
        {},
        {
          get: (target, name) =>
            path.join(process.cwd(), `node_modules/${name}`),
        },
      ),
      // Tambahkan alias untuk direktori src
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },
    watchFolders: [
      path.resolve(__dirname, '.'), // Tambahkan direktori root project Anda disini
      path.resolve(__dirname, 'src'), // Tambahkan direktori src Anda disini
    ],
  };
})();
