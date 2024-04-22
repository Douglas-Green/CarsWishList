/** @format */

const path = require("path");

module.exports = {
  // Define the entry point of your application
  entry: "./src/index.js",
  // Define the output directory and filename
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  // Define rules for modules (Loaders)
  // Optional: Define plugins that you might want to use
  plugins: [],
  // Define how source maps are generated
  mode: "development", // Mode can be 'development' or 'production'
};
