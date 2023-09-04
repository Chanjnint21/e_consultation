import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLayout from '../views/Layout/AuthLayout.vue'
import IntroScreen from '../views/Introduction.vue'
import AppLayout from '../views/Layout/AppLayout.vue'
import HomeView from '../views/Home/HomeView.vue'
import QAndAView from '../views/Home/QandA.vue'
import Explore from '../views/Home/ExploreView.vue'
import MoreService from '../views/Home/ExtraService.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: AuthLayout,
    children: [{
      path: '',
      component: IntroScreen
    }]
  },
  {
    path: '/',
    name: 'user',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AppLayout ,
    children: [{
      path:'/home',
      component: HomeView
    },{
      path:'/q&a',
      component: QAndAView
    },{
      path:'/explore',
      component: Explore
    },{
      path:'/more_service',
      component: MoreService
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
