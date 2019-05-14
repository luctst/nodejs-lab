const config = require("./webpack/config");
const plugins = require("./webpack/webpack-plugin");

module.exports = {
    ...config,
    plugins,
}