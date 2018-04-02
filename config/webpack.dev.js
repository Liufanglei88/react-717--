const webpack = require("webpack");
let baseConfig = require("./webpack.base");
let DefinePlugin = webpack.DefinePlugin;
baseConfig.plugins.push(
  new DefinePlugin({
    "process.env.NODE_ENV": '"development"'
  }),
  new webpack.HotModuleReplacementPlugin()
);
module.exports = {
  ...baseConfig,
  devServer: {
    historyApiFallback: true, //不跳转
    noInfo: true,
    port: 8080,
    open: true,
    inline: true, //实时刷新
    hot: true
  },
  devtool: "eval-source-map"
};
