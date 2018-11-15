import Vue from 'vue'
import App from './App.vue'

// 取消控制台提示
Vue.config.productionTip = false

// 引入全局通用样式
import '@styles/main.scss'

// flexible 移动端适配
import '@lib/flexible'

// router 路由
import router from './router/idnex'

// store
import store from '@/store'

// 引入各种插件
import '@lib'



new Vue({
  router, // 从此任何组件可以使用到$router(路由工具)，$route(路由属性)
  store,
  render: h => h(App)
  // render: (createElement) => {
  //   return createElement(App)
  // }
}).$mount('#app')









//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG