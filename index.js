const express = require('express');
const path = require('path');
const expressNunjucks = require('express-nunjucks');
const sassMiddleware = require('node-sass-middleware');
const middleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const routes = require('./src/routes');

const app = express();

const DEV = app.get('env') === 'development';

app.set('views', `${__dirname  }/src`);
app.set('view engine', 'njk');

expressNunjucks(app, {
  watch: DEV,
  noCache: DEV
});

// Webpack
const compiler = webpack(webpackConfig);
app.use(middleware(compiler));

app.use(sassMiddleware({
    src: path.join(__dirname, 'src/scss'),
    dest: path.join(__dirname, 'public/assets'),
    debug: false,
    outputStyle: 'compressed',
    prefix:  '/assets/' 
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);


app.listen(3000, () => {
  console.log('🚀 Running on localhost:3000');
});
