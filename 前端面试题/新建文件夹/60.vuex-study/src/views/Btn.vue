<template>
  <div id="btn">
    <button @click="handleAdd()">点我加1撒</button>
    <button @click="handleDecreaseAsync()">点我减1撒</button>
    <div>{{ $store.state.user.name }}</div>
    <!-- 使用store子模块user中的mutations属性的setName方法进行修改数据 -->
    <button @click="setName('王大哥')">点击修改名字呦</button>
  </div>
</template>

<script>
// mapMutations是一种映射mutations方法的一种方法，一般把这些方法映射为methods方法
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // 使用mapMutations将mutations中改变state的方法映射为methods方法
    ...mapMutations(["handleAdd", "handleDecrease"]),
    // 使用mapActions将actions中改变state的方法映射为methods方法
    ...mapActions(["handleDecreaseAsync"]),
    /**
     这段代码与上面那个代码有着相同的作用
     ...mapActions({
      handleDereaseAsync:"handleDecreaseAsync"
    }),
     *  */
    // 映射修改store子模块user中的state数据的方法
    ...mapMutations({
      // 需要加路径
      setName: "user/setName",
    }),
    // 点击加法按钮触发的减法方法
    // handleAdd() {
    //   // 这种直接对state中的数据做修改是不推荐的，更改vuex的store中状态的唯一方法是替米提交mutation
    //   //  即使你在页面上看到了数据的变化，但store库中的state状态数据依然是没变的
    //   // this.$store.state.count++;

    //   // 应该使用mutations属性来改变vuex中的全局状态
    //   //调用store中的mutation方法，使用commit方法来调用,也就是commit提交某个方法
    //   this.$store.commit("handleAdd");
    // },
    // 点击减法按钮触发的减法操作方法
    // handleDecrease() {
    //   // 同步操作使用mutation，对应的方法是commit
    //   // this.$store.commit("handleDecrease");
    //   //  异步操作使用actions,对应的方法是dispatch()派遣的意思
    //   this.$store.dispatch("handleDecreaseAsync");
    // },
  },
};
</script>