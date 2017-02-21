import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import System from '../pages/System'
import User from '../pages/user/User'
import UserDetail from '../pages/user/UserDetail'
import UserProfile from '../pages/user/UserProfile'
import Role from '../pages/role/Role'
import NotFound from '../pages/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
//  mode: 'history',
//  hashbang: false,
  base: __dirname,
  routes: [
    { path: '/', redirect: { name: 'dashboard' } },
    { path: '/dashboard', name: 'dashboard', component: Home },
    { path: '/system', name: 'system', component: System,
      children: [
        // User
        { path: 'users', name: 'users', component: User },
        { path: 'users/create/', name: 'createUser', component: UserDetail },
        { path: 'users/:id/', name: 'viewUser', component: UserDetail },
        { path: 'users/:id/edit/', name: 'editUser', component: UserDetail },
        // Role
        { path: 'roles', name: 'roles', component: Role }
      ]
    },

    // Common
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', redirect: { name: 'login' } },

    // Default
    { path: '*', name: 'notFound', component: NotFound }
  ]
})
