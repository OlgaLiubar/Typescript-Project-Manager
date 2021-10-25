const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // clean:true
    },
    // devServer: {
    //     static: {
    //         directory: path.join(__dirname, '/')
    //     }
    // },
    // devtool: 'false',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
      new CleanPlugin.CleanWebpackPlugin()
    ]
};
