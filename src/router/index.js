import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page/Page'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  routes: [
    {
      path: '/',
      name: 'page',
      component: Page
    }
  ]
})
