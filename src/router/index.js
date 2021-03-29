import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Newsfeed from '../views/Newsfeed.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Newsfeed',
    name: 'About',
    component: Newsfeed
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
