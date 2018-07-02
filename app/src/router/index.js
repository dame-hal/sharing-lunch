import Vue from 'vue'
import Router from 'vue-router'

import SharingLunch from '@/components/SharingLunch/SharingLunch'
import Greeding from '@/components/Greeding/Greeding'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SharingLunch
    },
    {
      path: '/greeding',
      name: 'Greeding',
      component: Greeding
    }
  ]
})
