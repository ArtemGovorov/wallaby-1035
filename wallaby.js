const transform = require("jsx-controls-loader").loader;
module.exports = function (wallaby) {
  // var load = require;

  return {
    debug: true,
    files: [
      `./jest.startup.js`,
      './src/client/modules/_stories/luis/snapshot_handler.js',
      "src/client/**/*.ts*",
      "src/shared/**/*.ts*",
      'src/**/*.snap',
      'package.json',
      '!src/**/*.test.ts*',
    ],
    tests: [
      "!src/**/*.snap",
      "src/**/*.test.ts*"

    ],
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({module: 'commonjs'})
    },
    preprocessors: {
      "**/*.tsx": file => transform(file.content)
    },
    env: {
      type: "node",
      runner: "node"
    },
    testFramework: "mocha"
  };
};