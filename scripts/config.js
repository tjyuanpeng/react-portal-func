const babel = require("rollup-plugin-babel");
import { uglify } from "rollup-plugin-uglify";

module.exports = {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true
  },
  external: ["react-dom"],
  plugins: [
    babel({
      babelrc: false,
      presets: ["@babel/preset-env"],
      exclude: "node_modules/**"
    }),
    uglify()
  ]
};
