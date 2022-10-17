import {terser} from "rollup-plugin-terser";

export default {
  input: './suiport.js',
  output: {
    file: 'suiport.min.js',
    format: 'iife'
  },
  plugins: [
    terser()
  ]
};