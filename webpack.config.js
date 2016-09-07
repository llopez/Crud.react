module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './bin',
    filename: 'bundle.js',
    publicPath: "/assets/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets:['react', 'es2015']
      }
    }, { 
      test: /\.css$/, 
      loader: "style-loader!css-loader"
    }]
  }
};

