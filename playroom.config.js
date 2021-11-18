const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  components: './lib/main',
  outputPath: './docs',

  //   Optional configuration
  title: 'FireHydrant Design System',
  frameComponent: './.playroom/FrameComponent.js',
  widths: [375, 768, 1024, 1100, 1400, 'calc(100vw - 120px)'],
  snippets: './.playroom/snippets.js',
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          new BrotliPlugin({
            asset: '[path].br[query]',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          }),
        ]
      : [],
};
