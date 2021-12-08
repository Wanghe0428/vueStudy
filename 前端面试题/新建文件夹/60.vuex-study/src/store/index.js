import Vue from 'vue'
import Vuex from 'vuex'
// 拆分写法，引入state
import state from "./state"
// 导入user.js模块
import user from "./modules/user"
Vue.use(Vuex)

export default new Vuex.Store({
  // 全局数据，在任何页面中都可以通过this.$store.state访问state里面的数据
  state,
  // getters相当于组件中的computed计算属性，getters是全局的，computed是组件内部使用的
  getters: {
    count(state) {
      return state.count
    }
  },
  // mutations相当于组件中的methods，提交vuex状态改变的唯一方法就是mutations属性
  // 但是他不能使用异步方法，比如定时器、axios
  mutations: {
    //计数器count加1的方法，也可以传参,payload为参数，也可以不传
    handleAdd(state) {
      state.count++
    },
    // 计数器减法
    handleDecrease(state) {
      state.count--
    }
  },
  // actions专门用来处理异步，实际修改状态值的依然是mutations
  actions: {
    // 点击按钮后等一秒钟再减1
    // context上下文就相当图这个store实例this.$store
    handleDecreaseAsync(context) {
      setTimeout(() => {
        // 下面代码相当于this.$store.commit("handleDecrease")
        context.commit("handleDecrease")
      }, 1000)
    }

  },
  modules: {
    // 单独引入user用户的模块vuex状态管理模块，以后就可以使用user的store库的状态
    // 要获取user里面的state数据需要：this.$store.state.user
    user,
  }
})
