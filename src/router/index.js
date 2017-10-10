import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page
    }
  ]
})
