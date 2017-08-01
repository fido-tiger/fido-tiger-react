module.exports = {

    // This is the entry point or start of our react applicaton
    entry: "./client/app.jsx",

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
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