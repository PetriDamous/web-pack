const path = require("path");
const webpack = require('webpack');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist/JS")
    },
    devServer: {
        open: "Chrome",
        compress: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}); 