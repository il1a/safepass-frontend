<template>
  <button class="btn btn-primary static-button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
    Add🛸
  </button>
  <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasBottomLabel">Adding New Password Pair</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
          <label class="visually-hidden" for="title">Title</label>
          <div class="input-group">
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="username">Username</label>
          <div class="input-group">
            <div class="input-group-text">@</div>
            <input type="text" class="form-control" id="username" placeholder="Username" v-model="username">
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="password">Password</label>
          <div class="input-group">
            <div class="input-group-text">🔑</div>
            <input type="text" class="form-control" id="password" placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="url">URL</label>
          <div class="input-group">
            <div class="input-group-text">🔗</div>
            <input type="text" class="form-control" id="url" placeholder="Link" v-model="url">
          </div>
        </div>

        <div class="col-12">
          <label class="visually-hidden" for="notes">Notes</label>
          <div class="input-group">
            <div class="input-group-text">📑</div>
            <input type="text" class="form-control" id="notes" placeholder="Details" v-model="notes">
          </div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-success" @click="createItem">Submit</button>
          <button type="button" class="btn btn-danger">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCreateForm',
  data () {
    return {
      title: '',
      username: '',
      password: '',
      url: '',
      notes: ''
    }
  },
  methods: {
    createItem () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/items'

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        title: this.title,
        username: this.username,
        password: this.password,
        url: this.url,
        notes: this.notes,
        holderId: 1
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.static-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
