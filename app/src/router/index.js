import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Sharing from '@/components/Sharing'
import SharingLunch from '@/components/SharingLunch/SharingLunch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Sharing
    },
    {
      path: '/lunch',
      name: 'SharingLunch',
      component: SharingLunch
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
