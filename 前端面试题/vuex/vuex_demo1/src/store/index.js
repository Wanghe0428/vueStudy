import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //state用于存放全局属性   
    state: {
        count: 0
    },
    //getters不会修改state中的数据，知识起到包装的作用
    getters: {
        showNum: function(state) {
            return `当前最新的数量是${state.count}`;
        }
    },
    //mutation用于变更store中的数据,
    mutations: {
        //形参永远是state
        add: function(state) {
            state.count += 1;
        },
        decrease: function(state) {
            state.count--;
        },
        decreaseN: function(state, step) {
            state.count -= step;
        }
    },
    //action是用来处理异步任务，但是只有mutation中的函数才有权利修改station中的数据，mutation知识调用mutation中的函数
    actions: {
        decreaseAsync: function(context) {
            setTimeout(() => {
                context.commit('decrease');
            }, 1000);
        },
        addAsync: function(context) {
            setTimeout(() => {
                context.commit("add");
            }, 1000);
        }
    },
    modules: {}
})