<template>
  <div id="index-wrapper">
    <h3>Welcome to join Happy Chatroom!</h3>
    <h4>Please enter your username</h4>
    <join />
  </div>
</template>

<script>
import join from '~/components/join.vue'

export default {
  components: {
    join
  }
}
</script>

<style>
#index-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (max-width: 767px) {
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 16px;
  }
}
</style>
