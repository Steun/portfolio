import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/page/Page'
import Project from '@/components/project/Project'
import Info from '@/components/info/Info'

Vue.use(Router)

export default new Router({
  mode: 'history', // This removes the trailing # on the URL
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
          component: Project,
          children: [
            {
              path: 'info',
              name: 'info',
              component: Info
            }
          ]
        }
      ]
    }
  ]
})
