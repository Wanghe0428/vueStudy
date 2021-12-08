<template>
  <div>
    <h1>{{ getNum }}</h1>
    <button @click="handle1">-1</button>
    <button @click="handle">-n</button>
  </div>
</template>

<script>
import { mapState, mapMutations,mapGetters } from "vuex";
export default {
  data: function () {
    return {};
  },
  methods: {
    //  this.$store.commit('decrease');
    //将函数decrease、decreaseN映射为全局函数，可供调用
    ...mapMutations(["decrease", "decreaseN"]),
    
    handle1: function () {
      this.$store.dispatch("decreaseAsync");
    },
    handle: function () {
      //把减3的操作延时1秒钟
      //不要在mutation中不要执行异步操作
      // setTimeout(()=>{
      // this.decreaseN(3);
      // },1000);
      this.decreaseN(3);
    },
  },
  computed: {
    //利用mapState()函数，需要用到那个全局属性，就把此属性写到数组中
    //...代表展开运算符，意思是把全局数据映射为当前组件的计算属性
    ...mapState(["count"]),
    ...mapGetters(['getNum']),
  },
};
</script>