const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileLoader = require("file-loader");

module.exports = {
    mode: "development",
    devtool: "inline-cheap-source-map",
    entry: {
        root: "./code/homepage/homepage.def.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    // Creates `style` nodes from JS strings
                    //'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }, {
                test: /tpl\.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html',
                            outputPath: 'templates'
                        }
                    }
                ],
            }, {
                test: /\.ttf$/i, ///\.woff2$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].ttf', //'[name].woff2',
                            outputPath: "fonts"
                        },
                    }
                ],
            }, {
                test: /\.gif$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].gif',
                            outputPath: "images"
                        },
                    }
                ],
            }, {
                test: /\.png$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].png',
                            outputPath: "images"
                        },
                    }
                ],
            }, {
                test: /\.ico$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].ico',
                            outputPath: "images"
                        },
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "head",
            template: "./code/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
        })
    ],
    output: {
        filename: "bundles/[name].js",
        path: path.resolve(__dirname, "..")
    }
};