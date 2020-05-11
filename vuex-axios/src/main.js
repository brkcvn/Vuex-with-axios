
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import {store} from './store/store'

Vue.config.productionTip = false
window.axios = require('axios')

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'

})