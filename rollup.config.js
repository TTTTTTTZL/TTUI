// 安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild' // 把TS 编译成JS
import vue from 'rollup-plugin-vue' //把 Vue 结尾的文件编译成 JS
import scss from 'rollup-plugin-scss' //把 Scss 结尾的编译成 CSS
import dartSass from 'sass' // 用来支持 rollup-plugin-scss
import { terser } from 'rollup-plugin-terser' // 混淆JS 代码

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      globals: {
        vue: 'Vue',
      },
      name: 'TT',
      file: 'dist/lib/TT.js',
      format: 'umd',
      plugins: [terser()],
    },
    {
      name: 'TT',
      file: 'dist/lib/TT.esm.js',
      format: 'es',
      plugins: [terser()],
    },
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
    vue({
      include: /\.vue$/,
    }),
  ],
}
