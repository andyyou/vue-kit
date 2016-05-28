<template>
<div class="message">

  <div>
    <img src="../assets/images/vue.png">
  <div>
  <p>{{ msg }}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: `Hi, vue-kit@${new Date().getFullYear()}`
    }
  }
}
</script>

<style lang="sass" scoped>
$color: #41B883;

.message {
  color: $color;
  text-align: center;
  margin: 30px;
}
</style>
