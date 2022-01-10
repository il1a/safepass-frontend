import { mount } from '@vue/test-utils'
import ItemCreateForm from '@/components/ItemCreateForm'

describe('Testing ItemCreateForm.vue', () => {
  it('should not show form unless clicked', () => {
    // when
    const wrapper = mount(ItemCreateForm)

    // then
    expect(wrapper.find('#offcanvasBottom').classes()).not.toContain('show')
  })
})
