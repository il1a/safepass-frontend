<template>
  <nav class="navbar navbar-light" style="background-color: #4ec4a8;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SafePass</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" aria-current="page" to="login">Login</router-link>
            <router-link class="nav-link" to="registration">Register</router-link>
            <router-link class="nav-link" to="/about">About us</router-link>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/user-list">Your Storage</router-link>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
