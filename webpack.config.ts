import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

config();



module.exports = {
  module: {
      rules: [
          {
              test: /\.css$/,
              include: [
                  path.resolve(__dirname, 'src/styles.css'), 
              ],
              use: [
                  MiniCssExtractPlugin.loader,
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.scss$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                  'postcss-loader'
              ]
          },
          {
              test: /\.ts$/,
              loader: 'ts-loader',
              include: [
                  /node_modules/
              ]
          },
          {
              test: /\.(png|svg|ico)$/,
              include: [
                  path.resolve(__dirname, 'src/assets/*.png'),
                  path.resolve(__dirname, 'src/assets/*.svg'),
                  path.resolve(__dirname, 'src/assets/img/*.png')
              ],
              use: [
                  {
                      loader: 'file-loader'
                  }
              ]
          }
      ]
  },
  plugins: [
      new MiniCssExtractPlugin({ experimentalUseImportModule: true }),
      new EnvironmentPlugin(['API_URL'])
  ]
};