import { mount } from '@vue/test-utils'

import HelloWorld from '@/components/HelloWorld.vue'
describe('Testing Home.vue', () => {
  it('should tell if Welcome Message is there', () => {
    // when
    const wrapper = mount(HelloWorld)

    // then
    expect(wrapper.text()).toMatch('')
  }
  )
})
