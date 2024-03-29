import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page/Page'
import Project from '@/components/project/Project'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Page,
      children: [
        {
          path: '',
          component: Project
        },
        {
          path: ':project',
          name: 'project',
          component: Project
        }
      ]
    }
  ]
})
