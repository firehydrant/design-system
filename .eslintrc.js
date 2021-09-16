// const { peerDependencies } = require('./package.json');

module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    // 'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
    // 'import/no-unresolved': [
    //   'error',
    //   /**
    //    * Ignores "import/no-unresolved" errors from eslint because React is installed as a peerDependency
    //    * https://github.com/import-js/eslint-plugin-import/issues/825#issuecomment-542618188
    //    *
    //    * We could just install react as a devDep then we wouldn't need this workaround
    //    */
    //   { ignore: Object.keys(peerDependencies) },
    // ],
  },
};
