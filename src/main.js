import Vue from 'vue'
import App from './App'
import store from './store'
import '@/common/style/iconfont.css'
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
