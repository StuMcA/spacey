import { shallowMount } from '@vue/test-utils'
import OrbitView from '@/components/OrbitView/OrbitView.vue'

describe('OrbitView.vue Implementation Test', () => {
  let wrapper = null

  // SETUP - run prior to each unit test
  beforeEach(() => {
  })

  // TEARDOWN - run after to each unit test
  afterEach(() => {
    wrapper.destroy()
  })

  // render the component with props
  it('initializes with correct elements', () => {
    wrapper = shallowMount(OrbitView, {
      propsData: {
      }
    })

    // check the name of the component
    expect(wrapper.name()).toMatch('OrbitView')
  })
})