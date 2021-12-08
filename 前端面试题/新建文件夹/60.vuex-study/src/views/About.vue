// about页面
<template>
  <div class="about">
    <!-- 这里使用了vuex的getters计算属性 -->
    <h1>about: count:{{ $store.getters.count }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
