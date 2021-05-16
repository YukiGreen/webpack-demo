const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024 // 10 KB
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成 index.html
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample', // 生成 html的title
      meta: {
        viewport: 'width=device-width' // 修改html的一些属性
      },
      template: './src/index.html' // 指定所需要使用到的模板
    }),
    // 用于生成 about.html， 需要生成多个html文件，只需要声明多个htmlWebpackPlugin插件实例即可
    new HtmlWebpackPlugin({
      filename: 'about.html'
    })
  ]
}
