<template>
  <div>
    <h3></h3>
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
  name: 'ItemTable',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
