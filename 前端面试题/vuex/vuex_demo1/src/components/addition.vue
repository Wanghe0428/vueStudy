<template>
  <div>
    <h1>当前的最新的值为：{{ $store.state.count }}</h1>
    <!-- <button @click="addition">+1</button> -->
  </div>
</template>

<script>
import { mapActions } from "vues";
export default {
  data: function () {
    return {};
  },
  methods: {
    ...mapActions(["addAsync"]),
    addition: function () {
      // //这种操作是完全不合法的，不能直接操作state中的数据进行变化，而是通过操作mutation进行操作数据
      // this.$store.state.count++;
      //对mutation中的函数进行调用，用commit函数,commit的作用就是调用某个mutation函数
      // this.$store.commit("add", 4);
      this.addAsync();
    },
  },
};
</script>