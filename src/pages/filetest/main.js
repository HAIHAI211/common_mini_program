import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#455A73',
      navigationBarTitleText: '极客',
      navigationBarTextStyle: '#fff'
    }
  }
}
