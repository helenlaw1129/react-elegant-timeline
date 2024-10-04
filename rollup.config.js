const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const pkg = require('./package.json');

module.exports = {
  input: 'src/Timeline.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    postcss({
      extract: 'styles.css', 
      minimize: true,            
      modules: false,             
    }),
  ],
};