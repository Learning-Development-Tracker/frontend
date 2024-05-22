import { EnvironmentPlugin } from 'webpack';
import { config } from 'dotenv';
import { resolve } from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


config();

module.exports = {
    module: {
        rules: [
          // Add your custom loaders here
          {
            test: /\.css$/,
            include: [
              resolve(__dirname, 'node_modules/primeng/resources/themes/lara-light-blue/theme.css'),
              resolve(__dirname, 'node_modules/primeng/resources/primeng.min.css'),
              resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
              resolve(__dirname, 'src/styles.css'),
              resolve(__dirname, 'src/app/*.css'),
              resolve(__dirname, 'src/app/shared/components/**/*.css'),
              resolve(__dirname, 'src/app/views/**/*.css'),
              resolve(__dirname, 'src/app/views/admin/*.css'),
              resolve(__dirname, 'src/app/views/admin/component/**/*.css'),
              resolve(__dirname, 'src/app/views/admin/**/*.css'),
              resolve(__dirname, 'src/app/views/admin/views/**/*.css'),
              resolve(__dirname, 'src/app/views/admin/views/manage-resources/*.css'),
              resolve(__dirname, 'src/app/views/admin/views/manage-resources/**/*.css'),
              resolve(__dirname, 'src/app/views/admin/views/manage-resources/resource-details/**/*.css'),

           ],
            use: [
                MiniCssExtractPlugin.loader,
                'style-loader', 
                'css-loader', 
                'postcss-loader']
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
            include: /node_modules/
          },
           {
            test: /\.(png|svg|ico)$/,
            include: [
              resolve(__dirname, 'src/assets/*.png'),
              resolve(__dirname, 'src/assets/*.svg'),
              resolve(__dirname, 'src/assets/img/*.png')
           ],
            use: [
              {
                loader: 'file-loader'
              }
            ]
          }
        
        ],
      },
    //   ,
    //   externals: {
    //     'font-awesome/css/font-awesome.css': 'window',
    //     // (more)
    // },
  plugins: [
    new MiniCssExtractPlugin({experimentalUseImportModule: true}),
    new EnvironmentPlugin(['FIREBASE_API_DEV'])
  ]
}