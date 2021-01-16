const path = require('path')

const config = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        // open: true,
        hot: true,
        port : 9000
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}

module.exports = config