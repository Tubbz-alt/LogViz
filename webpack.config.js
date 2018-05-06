const path = require('path');

module.exports = {
    entry: './dist/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ipp_logviz.bundle.js'
    },
    module: {
             rules: [
               {
                 test: /\.css$/,
                 use: [
                   'style-loader',
                   'css-loader'
                 ]
               }
             ]
          }
};
