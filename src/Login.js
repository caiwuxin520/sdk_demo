import Vue from 'vue'
// lib模式下，vue的主入口文件
import Lib from './components/HelloWorld.vue'

Vue.config.productionTip = false

class Login {
  constructor(option) {
    if (!Login.instance) {
      Login.renderDom(option)
      Login.instance = this
    }
    return Login.instance
  }
  // 渲染vue
  static renderDom(option) {
    // 先判断参数
    if (!option) {
      console.log('缺少参数')
      return
    }
    // 1.创建挂载节点
    const {propsOptions} = option;
    const outer = document.createElement('div')
    outer.setAttribute('id', 'Login')
    document.body.appendChild(outer)
    // 2.vue挂载
    new Vue({
      render: h => h(Lib, {
        props: propsOptions
      })
    }).$mount('#Login')
  }
  // 初始化
  static init(option) {
    if (!this.instance) {
      this.instance = new Login(option)
    }
    return this.instance
  }
}

export default Login