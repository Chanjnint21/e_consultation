import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/styles/master.css'
import carouselsSlider from './components/carouselsSlider.vue'

Vue.config.productionTip = false

Vue.component('carousel-slide', carouselsSlider)

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
