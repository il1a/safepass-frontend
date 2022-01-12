<template>
  <div id="home">
    <h2 v-if="!this.$root.authenticated">Welcome to the SafePass! Please proceed to login</h2>
    <img alt="Vue logo" src="../assets/logo.png" v-if="!this.$root.authenticated">
    <div v-if="!this.$root.authenticated">
      <p>Hello, ...have we already met?</p>
      <router-link role="button" to="/login">
        Login
      </router-link>
    </div>

    <div v-if="this.$root.authenticated">
      <br><br><br><br>
      <p>Ah right it's you, {{claims.name}}!</p>
      <p>
        You have successfully logged in! Yay!
        Visit <a href="/user-list">your vault</a> if you are brave enough to take a look inside the mysterious cave.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data: function () {
    return {
      claims: ''
    }
  },
  created () { this.setup() },
  methods: {
    async setup () {
      if (this.$root.authenticated) { this.claims = await this.$auth.getUser() }
    }
  }
}
</script>
