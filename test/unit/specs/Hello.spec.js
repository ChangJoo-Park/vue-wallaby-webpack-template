import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  // Scenario 1: Check text content
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })

  // Scenario 2: Check type of props
  it('should props count is Number', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({
      propsData: { count: 1 }
    }).$mount()
    expect(typeof vm.$props.count).toBe('number')
  })

  // Scenario 3: Check props default value
  it('should props default value of count is 1 ', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$props.count).toBe(1)
  })

  // Scenario 4: Check props bound value
  it('should props count is Number', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor({
      propsData: { count: 2 }
    }).$mount()
    expect(vm.$props.count).toBe(2)
  })
})
