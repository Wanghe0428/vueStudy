<template>
  <div>
  <my-addition></my-addition>
  <p>-------------------------------------</p>
  <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import addition from "./components/addition";
import subtraction from "./components/subtraction";
export default {
  data: function () {
    return {};
  },
  components: {
    'my-addition':addition,
    'my-subtraction':subtraction
  },
};
</script>