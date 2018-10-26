module.exports = {
  entry: './client/index.js', // assumes your entry point is the index.js in the root of your /project/client folder
  mode: 'development',
  output: {
    path: __dirname, // assumes your bundle.js will be in the root of your /project/public folder
    filename: './public/bundle.js',
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

//in webpack.config.js(this file) we tell webpack to use babel via babel-loader but now we must tell babel what presets to use, so that's in .babelrc and in this case we use the presets we installed earlier (that should be in our package json)
