import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { RadioGroup, Radio, Form, Field, CellGroup, DatetimePicker, Popup } from 'vant'
import 'reset-css'
import 'normalize.css'
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(DatetimePicker)
Vue.use(Popup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
