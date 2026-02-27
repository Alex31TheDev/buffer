const path = require("path");

module.exports = {
    mode: "production",
    entry: "./index.js",
    target: "node",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    }
};
