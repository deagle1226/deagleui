var path = require('path');
var dir = path.resolve(__dirname) + '/';
module.exports = {
    entry: ['webpack/hot/dev-server', dir + 'dev.jsx'],
    output: {
        path: dir,
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        root: dir,
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'cheap-source-map',
    devServer: {
        port: 8888,
        hot: true,
        inline: true,
        filename: 'bundle.js',
        contentBase: dir,
        stats: {
            chunks: false,
            assets: true,
            hash: false,
            cached: false,
            cachedAssets: false,
            color: true
        }
    },
    module: {
        loaders: [
            {test: /\.*/, exclude: /node_modules/, loader: 'babel-loader?stage=0'},
            {test: /\.(scss|css)$/, loader: 'style!css!autoprefixer-loader!sass'}
        ]
    }
};