<template>
  <form class="join">
    <input id="username" v-model="username" />
    <p :class="{ alert: !usernameCheck }" for="username">(1-10 characters)</p>
    <nuxt-link :to="link">
      <button>Join to Chat!</button>
    </nuxt-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      usernameCheck: false,
      link: ''
    }
  },
  watch: {
    username(name) {
      const userbyte = new Blob([name]).size
      this.usernameCheck = !(userbyte >= 10) && !(userbyte === 0)
      this.$store.commit('setUsername', this.username)
    },
    usernameCheck(res) {
      this.link = res ? '/chatroom' : ''
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
}

input {
  width: 80%;
  padding: 8px;
  margin-bottom: 20px;
  font-size: 28px;
}
p {
  position: absolute;
  right: -33%;
  color: #fff;
}

button {
  padding: 10px 30px;
  border: 0;
  border-radius: 19px;
  color: #fff;
  background-color: #ff748c;
  font-weight: 800;
  cursor: pointer;
}
.alert {
  color: red;
}

@media (max-width: 767px) {
  input {
    margin-bottom: 0;
  }
  p {
    position: relative;
    right: 0px;
  }
}
</style>
