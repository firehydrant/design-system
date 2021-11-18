module.exports = {
  components: './lib/main.ts',
  outputPath: './docs',

  //   Optional configuration
  title: 'FireHydrant Design System',
  frameComponent: './.playroom/FrameComponent.js',
  widths: [375, 768, 1024, 1100, 1400, 'calc(100vw - 120px)'],
  snippets: './.playroom/snippets.js',
  typeScriptFiles: ['lib/**/*.{ts,tsx}', '!**/node_modules'],
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
            },
          },
        },
        {
          test: /\.jsx?$/,
          include: __dirname,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
  }),
};
