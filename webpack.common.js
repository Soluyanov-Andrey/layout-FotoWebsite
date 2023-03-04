const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    // точка входа
    entry: './src/index.js',
    // точка выхода
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        // assetModuleFilename: 'images/[name][ext]'
    },

    module: {
        rules: [
            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
             },
             {
                test: /\.pug$/,
                loader: '@webdiscus/pug-loader'
            },


            {
                //
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options: {sourceMap: true}
                    },
                // Закоментировав можно убрать зжатия css
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {sourceMap: true}
            
                    // },
                //
                    {
                        loader:'sass-loader',
                        options: {
                            sourceMap: true}

                    }
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                           filename: 'fonts/[name][ext]'
                         },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                 type: 'asset/resource',
                 generator: {
                    filename: 'images/[name][ext]'
                  },
            }
        ],
    },

    plugins: [
      
        new HtmlWebpackPlugin(
            {
                template: './src/index.html'
            }
        ),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css'

        }),

        new CopyPlugin({
            patterns: [
              { from: './src/images', to: 'images' },
              { from: './src/fonts', to: 'fonts' }
            ],
          }),

       // в предыдущей версии писал так
       // с этим модулем были проблемы установился v 2.0.2 и выдовал ошибку
       // сменил на ^1.0.0
       // new CleanWebpackPlugin([
       //    './dist/*.*'
       //])
       


        new CleanWebpackPlugin(),

    ]
}