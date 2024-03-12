const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            inject: 'head',
            scriptLoading: 'defer',
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/i,
                loader: 'svg-inline-loader',
                options: {
                    xml: false,
                    removeTags: true,
                    removingTags: ['title', 'desc', 'defs', 'style'],
                    removeSVGTagAttrs: true,
                    removingTagAttrs: ['width', 'height', 'class', 'stroke', 'fill'],
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/icons',
                    },
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
