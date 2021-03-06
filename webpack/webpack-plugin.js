const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
    new htmlWebpackPlugin({
        title: "Learn NodeJS",
        inject: true,
        template: "./docs/public/index.html",
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }
    })
];
