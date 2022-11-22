import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import CompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false;
Vue.use(CompositionAPI)

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
