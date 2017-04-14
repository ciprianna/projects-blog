const { resolve } = require('path');
var webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        // Activate HMR for react

        'webpack-dev-server/client?http://localhost:8080',
        // Bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // Bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './index.js'
        // Entry point of the app
    ],

    output: {
        filename: 'bundle.js',
        // The output bundle

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
        // Necessary for HMR to know where to load hot update chunks
    },

    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        // Enable HMR on server

        contentBase: resolve(__dirname, 'dist'),
        // Match the output path

        publicPath: '/'
        // Match the output 'publicPath'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules', ],
            },
        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Enable HMR globally

        new webpack.NamedModulesPlugin(),
        // Prints more readable module names in the browser console on HMR updates
    ],
};