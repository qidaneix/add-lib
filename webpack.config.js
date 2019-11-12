const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].umd.js",
    library: {
      root: "addLib"
    },
    libraryTarget: "umd",
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};
