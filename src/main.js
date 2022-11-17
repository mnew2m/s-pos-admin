import Vue from 'vue'
import App from './App.vue'
//import VueCompositionAPI from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//Vue.use(VueCompositionAPI)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
