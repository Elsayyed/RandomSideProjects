import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      
      {
        path: '/Resume',
        component: () => import('../views/Resume')
      },
      
      {
        path: '/Abilities',
        component: () => import('../views/Abilities')
      },

      {
        path: '/Skills',
        component: () => import('../views/Skills')
      }

    ]
  }];
    //{
    // path: '/about',
    // name: 'About',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import('../views/About.vue')
    //}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
