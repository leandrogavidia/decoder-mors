const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        publicPath: "./",
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },

    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@images": path.resolve(__dirname, "./src/assets/images"),
            "@vars": path.resolve(__dirname, "./src/vars.scss"),
            "@mixins": path.resolve(__dirname, "./src/mixins.scss"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@MorseCode": path.resolve(__dirname, "./src/utils/morseAlphabet.js")
        }
    },

    mode: "production",

    module: {
        rules:  [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg/,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][hash][ext][query]",
                },
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, "src", "assets/images"),
        //             to: "assets/images"
        //         }
        //     ]
        // }),
        new CleanWebpackPlugin,
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
};
