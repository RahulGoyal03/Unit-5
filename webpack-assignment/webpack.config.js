const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"), // folder name
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '../css/fonts/[name]-[hash:8].[ext]'
                    }
                }
            },
        ],
    },
};