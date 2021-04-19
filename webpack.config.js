const HtmlWebpackPlugin = require('html-webpack-plugin')

const path  = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
           
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.PNG$|\.svg$|\.woff(2)?$|\.ttf$|\.eot$/,
                loader: "file-loader"
            }
           
       ]
   },
    plugins: [new HtmlWebpackPlugin({
                title: 'Bud Transactions',
                    template: 'public/index.html'
                })
            ]
}