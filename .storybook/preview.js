export * from '~~/.nuxt-storybook/storybook/preview.js'

import Vue from 'vue'
import '~storybook'

// 対象のコンポーネント
import Button from '../components/test/Button.vue'

// オブジェクトにまとめる
const components = {
  Button: Button
  // 他のコンポーネントがあればここに追加
}

// コンポーネントを登録
Object.keys(components).forEach((name) => {
  Vue.component(name, components[name])
})
