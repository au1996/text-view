import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TextView from '../src/components/TextView.vue'

describe('mount component', () => {
  test('content 测试文本', async () => {
    expect(TextView).toBeTruthy()

    const wrapper = mount(TextView, {
      props: {
        content: '测试文本',
      },
    })
    expect(wrapper.html()).toContain('测试文本')
  })

  test('openText: 查看文本 closeText: 收起文本', async () => {
    expect(TextView).toBeTruthy()

    const wrapper = mount(TextView, {
      props: {
        content: '测试文本',
        openText: '查看文本',
        closeText: '收起文本',
      },
    })

    // openText
    const btn = await wrapper.find('.btn')
    expect(btn.text()).toContain('查看文本')

    // closeText
    await btn.trigger('click')
    expect(btn.html()).toContain('收起文本')
  })

  test('link', async () => {
    expect(TextView).toBeTruthy()

    const wrapper = mount(TextView, {
      props: {
        content: '测试文本',
        link: 'https://au1996.github.io/blog/',
      },
    })

    // openText
    const btn = await wrapper.find('.btn')
    expect(btn.text()).toContain('展开')
  })
})
