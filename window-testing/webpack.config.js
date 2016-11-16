var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders:[{
            test: /\.jsx?$/,
            loader:"babel-loader",
            exclude: /node_modules/
        }]
    },
    resolve: {
        alias: {
            'react':'preact-compat',
            'react-dom':'preact-compat'
        }
    },
    plugins:[new HtmlWebpackPlugin({
        template: './assets/index.html'
    })]
}