import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/user/User'
import UserDetail from '../pages/user/UserDetail'
import UserProfile from '../pages/user/UserProfile'
import Role from '../pages/Role'
import NotFound from '../pages/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/users', name: 'users', component: User },
    { path: '/users/:id/', name: 'userDetail', component: UserDetail },
    { path: '/users/:id/edit', name: 'userEdit', component: UserDetail },
    { path: '/roles', name: 'roles', component: Role },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', redirect: { name: 'login' } },
    { path: '*', name: 'notFound', component: NotFound }
  ]
})
