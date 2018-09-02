const path = require('path');

module.exports = {
  entry:  path.resolve(__dirname, 'src/js/main.js'),
  mode: 'development',
  output: {
    filename: 'assets/main.js',
    path: path.resolve(__dirname, 'public')
  }
};