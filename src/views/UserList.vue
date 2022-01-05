<template>
  <div class="user-list">
    <item-table :items="this.items"></item-table>
  </div>
  <item-create-form></item-create-form>
</template>

<script>
import ItemTable from '@/components/ItemTable'
import ItemCreateForm from '@/components/ItemCreateForm'

export default {
  name: 'user-list',
  components: {
    ItemTable,
    ItemCreateForm
  },
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
