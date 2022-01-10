import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Testing Home.vue', () => {
  it('should tell if Welcome Message is there', () => {
    // when
    const wrapper = mount(Home)

    // then
    expect(wrapper.text()).toMatch('Welcome to SafePass!')
  }
  )
})
