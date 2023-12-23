import babel from 'rollup-plugin-babel'
export default {
  input: './index.js',
  output: {
    file: './lib/monitor.js',
    format: 'umd',
    name: 'monitor',
  },
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: [
        '@babel/preset-env'
      ]
    })
  ]
}