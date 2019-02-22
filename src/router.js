import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import SearchIp from '@/pages/SearchIp.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/search_ip',
      component: SearchIp
    }
  ]
});

export default router;