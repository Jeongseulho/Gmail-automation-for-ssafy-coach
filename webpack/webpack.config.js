const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    gmail_content_script: path.join(__dirname, '../src/contents/gmail/content_script.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules|\.spec\.ts$/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets/', to: './assets/' },
        {
          from: './public/manifest.json',
          to: './manifest.json',
        },
      ],
    }),
  ],
};
