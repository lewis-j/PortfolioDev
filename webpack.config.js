const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module : {
        rules:[
            {
            test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
            },
            {
            test: /\.html$/,
            use:[
            {
            loader: 'html-loader',
            options: { minimize: true }
            }
        ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            
            }
        ]
            
        
    },
    plugins: [
        
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCSSExtractPlugin ({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
    
    
    
    
}