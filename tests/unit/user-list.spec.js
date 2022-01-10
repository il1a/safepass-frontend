import { mount } from '@vue/test-utils'
import UserList from '@/views/UserList'
import ItemTable from '@/components/ItemTable'
import ItemCreateForm from '@/components/ItemCreateForm'

describe('Testing UserList.vue', () => {
  it('should be visible', () => {
    // when
    const wrapper = mount(UserList)

    // then
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should have item table component', () => {
    // when
    const wrapper = mount(UserList)

    // then
    const itemTable = wrapper.findComponent(ItemTable)
    expect(itemTable.exists()).toBeTruthy()
  })

  it('should have items create form component', () => {
    // when
    const wrapper = mount(UserList)

    // then
    const createForm = wrapper.findComponent(ItemCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })
})
