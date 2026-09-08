const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const REPO_NAME = "weather-app";

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/index.js",


    output: {
      path: path.resolve(__dirname, "dist"), 
      filename: "bundle.js",
      clean: true,
      publicPath: isProduction ? `/${REPO_NAME}/` : "/",
    },

    mode: isProduction ? "production" : "development",

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
      ],
    },

    resolve: {
      extensions: [".js", ".jsx"],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],

    devServer: {
      static: "./dist",
      port: 3000,
      open: true,
      hot: true,
    },
  };
};