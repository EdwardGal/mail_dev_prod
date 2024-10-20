import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const environment = process.env.NODE_ENV || "development";
const development = environment === "development";

const DIST_DIR = path.resolve("./docs");
const SRC_DIR = path.resolve("./src");

export default {
  cache: { type: "filesystem" },
  mode: environment,
  context: SRC_DIR,
  resolve: {
    extensions: [".js"],
    modules: [SRC_DIR, "node_modules"],
    alias: {
      "@templates": path.resolve(SRC_DIR, "templates"), // Алиас для шаблонов
    },
  },
  entry: {
    main: "./app.js",
  },
  output: {
    path: DIST_DIR,
    filename: development ? "js/[name].js" : "js/[name].[contenthash:6].js",
    chunkFilename: development ? "js/[id].js" : "js/[id].[contenthash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { esModule: false },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: false,
    minimize: !development,
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  devtool: development ? "source-map" : false,
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["main"],
      template: "./index.html",
      templateParameters: { environment },
      scriptLoading: "blocking",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(environment),
    }),
    new MiniCssExtractPlugin({
      filename: development
        ? "css/[name].css"
        : "css/[name].[contenthash:6].css",
      chunkFilename: development
        ? "css/[id].css"
        : "css/[id].[contenthash:6].css",
    }),
    ...(development
      ? []
      : [
          new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
          }),
        ]),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(SRC_DIR, "templates"),
      publicPath: "/templates", 
    },
    watchFiles: [`${SRC_DIR}/**/*.*`],
    open: true,
    compress: true,
    port: 3000,
    host: "local-ip",
  },
};
