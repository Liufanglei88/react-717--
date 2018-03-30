const webpack = require("webpack");
let baseConfig = require("./webpack.base");
let UglifyPlugin = webpack.optimize.UglifyJsPlugin;
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(new UglifyPlugin());
baseConfig.plugins.push(
  new DefinePlugin({
    "process.env": '"production"'
  })
);
module.exports = {
  ...baseConfig
};
