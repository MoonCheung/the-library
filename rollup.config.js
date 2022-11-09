import path from 'path'
import pkg from './package.json'
// import json from '@rollup/plugin-json';
// import esbuild from 'rollup-plugin-esbuild';
// import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: path.resolve(__dirname, './src/index.js'),
  output: [
    { file: path.resolve(__dirname, pkg.main), format: 'umd', name: 'index' },
    { file: path.resolve(__dirname, pkg.module), format: 'esm', name: 'index' },
  ],
}
