const path = require("path");
// may darkest hour

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/JS")
    },
    resolve: {
        extensions: [
            ".js"
        ]
    }
};