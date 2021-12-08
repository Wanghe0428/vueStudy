<template>
  <div id="app">
    <Home></Home>
    <About></About>
    <Btn></Btn>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Btn from "./views/Btn.vue";
export default {
  // 组件注册
  components: {
    Home,
    About,
    Btn,
  },
};
</script>
