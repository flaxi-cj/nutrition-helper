const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    entry: path.join(__dirname, "src", "index.js"),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index.js',
        publicPath: '/',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/preset-react', { "runtime": "automatic" }]
                    ],
                    babelrc: false
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            favicon: path.join(__dirname, "src/assets/images/bowl-food-solid.png"), 
        }),
    ],
}