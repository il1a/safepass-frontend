<template>
  <div id="user-list">
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
      items: [],
      claims: '',
      accessToken: ''
    }
  },
  methods: {
    loadItems () {
      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const email = this.claims.email
      const endpoint = baseUrl + '/api/v1/items' + '?owner=' + email
      console.log('Page loaded')
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        }
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(item => {
          this.items.push(item)
        }))
        .catch(error => console.log('error', error))
    },
    async setup () {
      if (this.$root.authenticated) {
        this.claims = await this.$auth.getUser()
        this.accessToken = await this.$auth.getAccessToken()
      }
    }
  },
  async created () {
    await this.setup()
    this.loadItems()
  },
  mounted () {
  }
}
</script>
