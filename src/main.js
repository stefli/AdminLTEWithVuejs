import Vue from 'vue'
import App from './App'
import router from './config/routes'
import AdminLTE from './assets/js/app'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

// AdminLTE
require('./assets/less/AdminLTE.less')
require('./assets/less/skins/skin-blue.less')

// Toastr
require('toastr/build/toastr.min.css')

// Vuex
import Vuex from 'vuex';
// import store from './store/';
Vue.use(Vuex);

// Axios
import axios from 'axios'
axios.interceptors.request.use(function (config) {
  config.headers['X-TOKEN'] = 'Token here'
  return config;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
//  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    /*
    if (!store.state.user.userinfo.token && to.path !== '/login') {
        store.dispatch('remove_userinfo');
        next('/login');
    } else {
        if (store.state.user.userinfo.token && to.path === '/login') {
            next({ path: '/' });
        } else {
            next();
        }
    }
    */
    next();
})
