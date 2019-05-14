const path = require("path");

module.exports = {
    mode: "development",
    target: 'web',
    entry: {
        index: path.resolve("docs", "src", "index.js")
    },
    output: {
        path: path.resolve("docs"),
        chunkFilename: 'static/[name].[chunkhash].chunk.js',
        filename: "static/[name].[hash].bundle.js"
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        contentBase: path.resolve("docs", "public"),
        compress: true,
        port: 8080,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        quiet: true,
        hot: true
    },
}