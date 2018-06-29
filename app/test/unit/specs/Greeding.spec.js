// Vue と テスト対象のコンポーネントをインポートする
import Vue from 'vue'
import Greeding from '@/components/Greeding'

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
})
