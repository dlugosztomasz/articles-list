const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [ 'babel-polyfill', './src/index.js' ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx' ],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'main.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
        contentBase: path.resolve('dist'),
        hot: true,
        port: 3000
    }
};
