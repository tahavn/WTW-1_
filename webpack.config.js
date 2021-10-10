const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    open: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          },
        ],
        exclude: path.resolve(`${__dirname}/src/svg`),
      },
       {
        test: /\.svg$/,
        // use: [
        //   {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: (name) => {
                console.log('#############', name);
                return `${/svg([\\|/])(.*?)\1/gm.exec(name)[2]}.svg`;
              },
            },
        //   },
        // ],
         include: [path.resolve(`${__dirname}/src/svg`)],
      },
    ],
  },
  plugins: [
    new SpriteLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
};
