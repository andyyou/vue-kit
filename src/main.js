import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)

import Sandbox from './components/sandbox'

new Vue({
  el: 'body',
  components: {
    Sandbox
  }
})
