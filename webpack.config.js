import webpack from 'webpack';  
import path from 'path';

module.exports = {

    entry: "./client/app.jsx",

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/public/'
    },

    module: {
        loaders: [{
                test: /\.jsx?$/,
                include: /client/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-1"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: "eval-source-map",
    watch: true
};