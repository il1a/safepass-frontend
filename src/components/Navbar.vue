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
              <router-link class="nav-link" aria-current="page" to="login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="registration">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/user-list">Your Storage</router-link>
            </li>
          </ul>
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
