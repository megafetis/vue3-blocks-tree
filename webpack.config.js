// webpack config
const path = require('path');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { VueLoaderPlugin } = require('vue-loader');
const { DefinePlugin } = require('webpack');
const tsNameof = require("ts-nameof");


module.exports = (env = {}) => ({

  context: path.resolve(__dirname, 'src'),
  mode: env.production ? 'production' : 'development',
  entry: {
    "vue3-blocks-tree": './index.ts',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].umd.min.js",
    publicPath: '/',
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
          // env.production ? MiniCssExtractPlugin.loader:"vue-style-loader",   
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
              // sourceMapContents: false
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
          // {
          //   loader: "babel-loader",
          //   options: { babelrc: true }
          // },
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: { hmr: !env.production }
      //     },
      //     'css-loader'
      //   ]
      // }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      // 'vue': '@vue/runtime-dom'
      //  'vue': 'vue/dist/vue.esm-bundler.js'
      // 'vue': 'vue/dist/vue.runtime.esm-browser.prod'
      // 'vue': 'vue/dist/vue.esm-browser.prod'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    //   minify: false,
    //   favicon: './public/favicon.ico',
    // }),
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
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  devtool: env.production ? false : 'source-map',
  // devServer: {
  //   contentBase: false,
  //   // contentBase: path.join(__dirname, '../app/homemodule'),
  //   contentBase: path.join(__dirname, 'src/public'),
  //   publicPath: process.env.BASE_URL,
  //   index: './index.html',
  //   hot: true,
  //   stats: 'minimal',
  //   quiet: true,
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   },
  //   historyApiFallback: true,
  // }
});
