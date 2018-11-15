var path = require('path');
 
module.exports = {
    entry: './example/index.js',
    output: {
        path: path.resolve('example'),
        filename: 'bundle.js'
    },
    mode:'development',
    devServer: {
       contentBase: path.join(__dirname, 'example'),
       inline: true,
       port: 5000
    },
    module: {
       rules: [
          {
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          },
          {
            test: /\.(sass|scss)$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [path.resolve(__dirname, 'node_modules')],
                },
              },
            ],
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          },
       ]
    }
}
