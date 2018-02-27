import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
export default {
  input: 'src/TelegramLogger.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'TelegramLogger',
  },
  plugins: [
    globals(),
    builtins()
  ]
};