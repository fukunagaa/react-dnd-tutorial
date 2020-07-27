const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  // エントリポイントの定義
  entry: {
    app: ["@babel/polyfill", path.join(__dirname, "src/app.js")],
  },
  // 出力先の定義
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
  },
  resolve: {
    // モジュール解決定義
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: true }],
              ],
            },
          },
        ],
      },
    ],
  },
};
