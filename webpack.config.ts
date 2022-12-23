import { Configuration } from "webpack";
import "webpack-dev-server";
import path from "path";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotEnv from "dotenv-webpack";

const config: Configuration = {
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
    new DotEnv(),
  ],
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[chunkhash].bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.join(process.cwd(), "src"), "node_modules"],
    alias: {
      react: path.join(process.cwd(), "node_modules", "react"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          outputPath: "images",
          name() {
            if (process.env.NODE_ENV === "development") {
              return "[path][name].[ext]";
            }
            return "[contenthash].[ext]";
          },
        },
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
};

export default config;
