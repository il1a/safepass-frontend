<template>
  <div class="user-list"></div>
  <div>
    <h3>Your Storage</h3>
    <table class="table table-dark table-striped">
      <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Title</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col">URL</th>
        <th scope="col">Notes</th>
      </tr>
      </thead>
      <tbody>
      <tr class="col" v-for="item in items" :key="item.id">
        <th scope="row"> {{ item.id }} </th>
        <td>{{ item.title }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.password }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.notes }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'user-list',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/items'
    console.log('Page loaded')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(item => {
        this.items.push(item)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
