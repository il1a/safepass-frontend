<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
          SafePass
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/login" v-if="!authenticated">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" v-if="authenticated">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user-list" v-if="authenticated">Your Storage</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" v-if="authenticated" v-on:click="logout()">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return { authenticated: false }
  },
  async created () {
    await this.isAuthenticated()
    this.$auth.authStateManager.subscribe(this.isAuthenticated)
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: 'isAuthenticated'
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>

</style>
