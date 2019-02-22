import Vue from 'vue'
import Router from 'vue-router'

import list from '@/components/list'
import done from '@/components/done'
import setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: list
    },
    {
      path: '/page2',
      component: done
    },
    {
      path: '/setting',
      component: done
    }
  ]
})