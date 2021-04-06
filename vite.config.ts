// @ts-nocheck
import { md } from './plugins/md'
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export default {
  base: './', //相对路径访问静态资源
  assetsDir: 'assets', //覆盖之前的_assets 导致github的bug
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => {
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find((n) => n.tag === 'demo')
      const title = parsed.children[0].content
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    },
  },
}
