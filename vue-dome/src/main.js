import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/flexble'
import './static/scss/common.scss'
import './utils/fonts/iconfont.css'
import store from './store'
import head from '@/components/header/head'
import {DatePicker,TimePicker} from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.component('el-header',head)
Vue.use(DatePicker)   //el-date-picker
Vue.use(TimePicker)   //el-time-picker


import elui from "@/plugins/elui"
Vue.use(elui);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
