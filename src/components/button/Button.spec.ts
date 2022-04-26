import Button from './Button.vue'
import { mount } from '@vue/test-utils'

describe('button 测试', () => {
  it('文本测试', () => {
    const title = '我是按钮'
    const wrapper = mount(Button, {
      slots: {
        default: title
      }
    })
    expect(wrapper.text()).toBe(title)
  })
  it('size测试', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain('el-button--small')
  })
})
