// Vue と テスト対象のコンポーネントをインポートする
import Vue from 'vue'
import Greeding from '@/components/Greeding/Greeding'

function getInstance (Components, propsData) {
  const Ctor = Vue.extend(Components)
  const vm = new Ctor({ propsData }).$mount()
  return vm
}

describe('Greeding.vue', () => {
  it('<p> tag content equal props data `person`', () => {
    const instance = getInstance(Greeding, {person: 'john'})

    expect(instance.$el.querySelector('p').textContent)
      .toBe('Hello, john')
  })

  it('<p> tag content don\'t equal props data `person`', () => {
    const instance = getInstance(Greeding, {person: 'hiroshi'})

    expect(instance.$el.querySelector('p').textContent)
      .not.toBe('Hello, john')
  })
})
