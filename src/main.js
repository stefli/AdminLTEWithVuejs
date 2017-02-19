import Vue from 'vue'
import App from './App'
import router from './config/routes'

require('./assets/less/AdminLTE.less')
require('./assets/less/skins/skin-blue.less')

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*
router.beforeEach((transition) => {
  if (transition.to.auth) {
    transition.redirect('/login');
  } else {
    transition.next();
  }
});
*/
