const {resolve} = require('path'); // node 内置核心模块，用来处理路径问题。
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
                    'style-loader',
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
        // 自动清理输出文件夹
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS） 
            template: './src/index.html',
            favicon: './src/favicon.ico' // 添加小图标
        })
    ],
    mode: 'development', //开发环境 
    devServer: { 
        // 项目构建后路径 
        contentBase: resolve(__dirname, 'build/'), 
        // 启动 gzip 压缩 
        compress: true,  
        port: 8888, 
        open: true 
    }
};