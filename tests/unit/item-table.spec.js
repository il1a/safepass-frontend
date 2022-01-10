import { shallowMount } from '@vue/test-utils'
import ItemTable from '@/components/ItemTable'

describe('testing ItemTable', () => {
  it('should prove the absence of component classes', () => {
    const wrapper = shallowMount(ItemTable, {
      props: {
        items: {
        }
      }
    })

    expect(wrapper.classes() == null)
  })
})
