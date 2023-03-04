const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
       mode: 'development',
       devtool:"source-map",
       //включает отслеживание изменения в файлах без devServer
       watch: true,
       //интервал через который производится анализ
       watchOptions:{
              aggregateTimeout:100,
              ignored: /node_modules/
       }
});