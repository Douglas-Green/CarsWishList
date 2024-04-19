const path = require("path");

module.exports = {
  // Define the entry point of your application
  entry: "./src/index.js",
  // Define the output directory and filename
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  // Define rules for modules (Loaders)
  module: {
    rules: [
      {
        test: /\.js$/, // Apply rule to files ending with .js
        exclude: /node_modules/, // Do not process node modules
        use: {
          loader: "babel-loader", // Use babel-loader for these files
          options: {
            presets: ["@babel/preset-env"], // Use preset configuration
          },
        },
      },
    ],
  },
  // Optional: Define plugins that you might want to use
  plugins: [],
  // Define how source maps are generated
  devtool: "eval-source-map", // Good for development
  mode: "development", // Mode can be 'development' or 'production'
};
