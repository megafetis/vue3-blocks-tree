// webpack config
const path = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const tsNameof = require("ts-nameof");


module.exports = (env = {}) => ([
//   {

//   context: path.resolve(__dirname, 'src'),
//   mode: env.production ? 'production' : 'development',
//   target:'web',
//   entry: {
//     "vue3-blocks-tree": './index.ts',
//     "vue3-blocks-tree-style":"./styles/blocks-tree.less"
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].umd.min.js",
//     library:"Vue3OrgTree",
//     libraryTarget:"umd",
//     umdNamedDefine:true,
    
//   },

//   watchOptions: {
//     aggregateTimeout: 200,
//     poll: 1000,
//     ignored: ['src/assets/**', 'node_modules/**']
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(sass|scss|css)$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: { hmr: !env.production }
//           },
//           {
//             loader: "css-loader",
//             query: {
//               importLoaders: 1
//             }
//           },
//           'resolve-url-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: !env.production,
//             }
//           }
//         ],
//       },

//       {
//         test: /\.(less)$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: { hmr: !env.production }
//           },
//           {
//             loader: "css-loader",
//             query: {
//               importLoaders: 1
//             }
//           },
//           'resolve-url-loader',
//           {
//             loader: 'less-loader',
//             options: {
//               sourceMap: !env.production,
//             }
//           }
//         ],
//       },

//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           getCustomTransformers: () => ({ before: [tsNameof] }),
//           productionMode: !!env.production,
//         }
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader"
//       },
//       {
//         test: /\.ts$/,
//         exclude: /node_modules/,
//         use: [

//           {
//             loader: "ts-loader",
//             options: {
//               appendTsSuffixTo: [/\.vue$/],
//               getCustomTransformers: () => ({ before: [tsNameof] })
//             }
//           }
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       },
//       {
//         test: /\.(eot|woff|ttf|otf|woff2)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000
//         }
//       }
      
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.js', '.vue', '.json'],
//     alias:{
//       'vue':'vue/dist/vue.esm-browser.prod'
//     }
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       filename: 'vue3-blocks-tree.css',

//     }),
//     new WebpackBar(),
//     new VueLoaderPlugin(),
//     new DefinePlugin({
//       __VUE_OPTIONS_API__:false,
//       __VUE_PROD_DEVTOOLS__:true
//     })
//   ],

//   devtool: env.production ? false : 'source-map',
 
// },
{

  context: path.resolve(__dirname, 'demo'),
  mode: env.production ? 'production' : 'development',
  entry: {
    "app": './index.js',
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].min.js",
  },

  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ['src/assets/**', 'node_modules/**']
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.production }
          },
          {
            loader: "css-loader",
            query: {
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !env.production,
            }
          }
        ],
      },

      {
        test: /\.(less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.production }
          },
          {
            loader: "css-loader",
            query: {
              importLoaders: 1
            }
          },
          'resolve-url-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: !env.production,
            }
          }
        ],
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          getCustomTransformers: () => ({ before: [tsNameof] }),
          productionMode: !!env.production,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
              getCustomTransformers: () => ({ before: [tsNameof] })
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|woff|ttf|otf|woff2)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.runtime.esm-browser.prod'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',

    }),
    new WebpackBar(),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE_OPTIONS_API__:false,
      __VUE_PROD_DEVTOOLS__:true
    })
  ],

  devtool: env.production ? false : 'source-map',
 
}]);
