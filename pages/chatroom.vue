<template>
  <div class="chat-wrapper">
    <div class="chat-message">
      <ul ref="ul">
        <li v-for="broadcast in broadcasts" :key="broadcast.index">
          {{ broadcast }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="submit">
      <textarea
        id="message"
        v-model="message"
        name="message"
        rows="3"
        placeholder="message.."
        @keyup.enter="submit"
      ></textarea>
      <label for="message" :class="{ alert: !messageCheck }"
        >{{ messageLength }}/256</label
      >
      <button :disabled="!messageCheck" @click="submit">SEND</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      message: '',
      messageLength: 0,
      messageCheck: false,
      broadcasts: []
    }
  },
  watch: {
    message(msg) {
      this.messageLength = new Blob([msg.trim()]).size
    },
    messageLength(length) {
      this.messageCheck = (length <= 256 && length > 0) || false
    },
    broadcasts() {
      this.scrollToBottom()
    }
  },

  mounted() {
    this.username = this.$store.getters.getUsername
    this.startWs()
  },

  beforeDestroy() {
    this.ws.onclose = function(e) {
      // eslint-disable-next-line
      console.log('close connection')
    }
    this.$store.commit('setUsername', 'Anonymous')
  },
  methods: {
    startWs() {
      this.ws = new WebSocket('ws://localhost:5000')
      this.ws.onopen = (e) => {
        // eslint-disable-next-line
        console.log('open connection')
        this.ws.send(JSON.stringify({ username: this.username }))
      }
      this.ws.onmessage = (e) => {
        const data = JSON.parse(e.data)
        const objectLength = Object.keys(data).length
        if (objectLength === 1) {
          this.broadcasts.push(`Welcome! ${data.username} joins our chatroom.`)
        } else {
          this.broadcasts.push(`${data.username} : ${data.message}`)
        }
      }
    },
    submit() {
      if (this.messageCheck) {
        this.ws.send(
          JSON.stringify({ username: this.username, message: this.message })
        )
        this.message = ''
      }
    },
    scrollToBottom() {
      this.$refs.ul.scrollTop =
        this.$refs.ul.scrollHeight - this.$refs.ul.clientHeight
    }
  }
}
</script>

<style>
.chat-wrapper {
  width: 90%;
  margin: auto;
}
.chat-message {
  height: calc(100vh - 350px);
  min-height: 200px;
  margin: 5px;
  display: flex;
  overflow: auto;
}

.alert {
  color: red;
}

ul {
  width: 100%;
  padding: 0 10px;
  margin: 0;
  overflow: auto;
  list-style-type: none;
}

textarea {
  padding: 10px;
  font-size: 18px;
  width: 100%;
}

label {
  align-self: flex-end;
}

@media (max-width: 767px) {
  .chat-wrapper {
    width: 95%;
  }
  .chat-message {
    height: calc(100vh - 250px);
  }
  textarea {
    font-size: 16px;
    padding: 5px;
  }
  label {
    font-size: 12px;
    /* padding-right: 0; */
  }
}
</style>
