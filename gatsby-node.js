// exports.modifyWebpackConfig = (config) => {
//   config.removeLoader('file-loader');
//   config.loader('file-loader', (cfg) => {
//     const newConfig = cfg;
//     newConfig.test = /\.(ico|eot|otf|webp|ttf)(\?.*)?$/;
//     newConfig.loader = 'file?name=/[path][name].[ext]';
//     return newConfig;
//   });
//   return config;
// };
