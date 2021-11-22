import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import '@/assets/css/style.css'
import './registerServiceWorker'

import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '761319302532-0qog7khl4ol4k5niur6br2fvq4b5ueto.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')