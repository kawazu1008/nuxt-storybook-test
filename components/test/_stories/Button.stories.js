// 対象のコンポーネント
import Button from '../Button.vue'

// 表示設定
export default {
  title: 'Button',
  component: Button
}

// デフォルト
export const Default = () => `
  <Button label="ラベル" />
`
Default.storyName = 'デフォルト'
