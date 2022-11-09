import path from 'path'
import pkg from './package.json'
import json from '@rollup/plugin-json'
import bable from '@rollup/plugin-babel'
import esbuild from 'rollup-plugin-esbuild'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, pkg.main),
      format: 'umd',
      name: 'index',
      plugins: [],
    },
    {
      file: path.resolve(__dirname, pkg.module),
      format: 'es',
      name: 'index',
      plugins: [],
    },
    {
      file: path.resolve(__dirname, pkg.global),
      format: 'iife',
      name: 'index',
      plugins: [],
    },
  ],
  plugins: [
    esbuild.default({
      target: 'es2018',
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
    }),
    nodeResolve(),
    json(),
    process.env.NODE_ENV === 'production' && commonjs(),
    process.env.NODE_ENV === 'production' &&
      bable({
        presets: ['@babel/preset-env'],
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
  ],
}
