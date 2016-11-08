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
            loader:"babel-loader"
        }]
    },
    plugins:[new HtmlWebpackPlugin()]
}