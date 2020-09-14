import Vue from 'vue'
import App from './App.vue'
import VueNesCss from 'vuenes.css'

Vue.config.productionTip = false
Vue.use(VueNesCss)

new Vue({
  render: h => h(App),
}).$mount('#app')
