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
      items: [
        {
          id: 1,
          title: 'Amazon',
          username: 'user1',
          password: 'pass1',
          url: 'amazon.com',
          notes: 'Shopping'
        },
        {
          id: 2,
          title: 'Google',
          username: 'user12',
          password: 'pass12',
          url: 'google.com',
          notes: 'Work'
        },
        {
          id: 3,
          title: 'Netflix',
          username: 'user123',
          password: 'pass123',
          url: 'netflix.com',
          notes: 'Movies'
        }
      ]
    }
  }
}
</script>
