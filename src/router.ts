import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'

import { h } from 'vue'
import MarkDown from './components/MarkDown.vue'

import GetStarted from './markdown/get-started.md'
import Install from './markdown/install.md'
import Intro from './markdown/intro.md'

const history = createWebHashHistory()
const md = (string) => h(MarkDown, { content: string, key: string })

export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: DocDemo },
        { path: 'get-started', component: md(GetStarted) },
        { path: 'install', component: md(Install) },
        { path: 'intro', component: md(Intro) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
})
