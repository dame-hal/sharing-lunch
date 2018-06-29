import Vue from 'vue'
import Router from 'vue-router'

import SharingLunch from '@/components/SharingLunch/SharingLunch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SharingLunch
    }
  ]
})
