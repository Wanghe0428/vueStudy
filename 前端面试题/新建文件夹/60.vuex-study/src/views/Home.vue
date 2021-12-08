// Home组件
<template>
  <div class="home">
    <h1>Home:count:{{ count }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// mapState是一种映射state中数据的用法，mapState()
import { mapState } from "vuex";
// mapGetters是一种映射getters中方法的用法，mapGetters()
import { mapGetters } from "vuex";

export default {
  computed: {
    // 将vuex中的store库中的state状态映射为计算属性
    ...mapState(["count", "num"]),
    // 将getters中的计算属性映射出来
    ...mapGetters(["count"]),
    // 计算属性count，需要return返回数据
    // count() {
    //   // 通过this.$store来使用state
    //   return this.$store.state.count;
    // },
  },
};
</script>
