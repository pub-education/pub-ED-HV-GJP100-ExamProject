const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        port: 3003,
        host: '127.0.0.1',
        open: true,
        client: {
            logging: 'verbose'
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.join(__dirname, buildDirectory)
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};