const {resolve} = require('path'); // node 内置核心模块，用来处理路径问题。
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin' )

module.exports = {
    entry: './src/js/index.js', // 入口文件 
    output: { 
        filename: 'built.js', // 输出文件名 
        path: resolve(__dirname, 'build/') // 输出文件路径配置 
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            { 
                test: /\.less$/, 
                use: [ 
                    'style-loader',
                    'css-loader', 
                    'less-loader' 
                ]
            },{
                test: /\.(jpg|png|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024, 
                    esModule: false, 
                    publicPath: './',
                    name: '[hash:10].[ext]' 
                }
            },{ 
                test: /\.html$/, 
                // 处理 html 文件的 img 图片（负责引入 img，从而能被 url-loader 进行处理） 
                loader: 'html-loader' 
            },{ 
                exclude: /\.(css|js|html|less|webp)$/, 
                loader: 'file-loader', 
                options: { 
                    name: '[hash:10].[ext]' 
                } 
            }]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS） 
            template: './src/index.html',
            favicon: './src/favicon.ico', // 添加小图标
            // 压缩 html 代码 
            minify: { 
                // 移除空格 
                collapseWhitespace: true, 
                // 移除注释 
                removeComments: true 
            }
        }),
        new MiniCssExtractPlugin({ 
            // 对输出的 css 文件进行重命名 
            filename: 'css/built.css' 
        }),
        // 压缩 css 
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    mode: 'production', //生产环境 
};