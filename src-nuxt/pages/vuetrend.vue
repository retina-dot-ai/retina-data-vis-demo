<template>
  <article class="message is-info">
    <div class="message-header">
      <p><a href="https://github.com/QingWei-Li/vue-trend">https://github.com/QingWei-Li/vue-trend</a></p>
    </div>
    <div class="message-body">
      <trend
        :data="sparkline_data"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </trend>
    </div>
  </article>
</template>

<script>
import axios_factory from '~/lib/axios_factory'

export default {
  head () {
    return {
      title: 'vuetrend'
    }
  },
  asyncData (context) {
    const axios = axios_factory(context)
    return axios
    .get('/api/vuetrend-data')
    .then((response) => {
      console.log('data', response)
      return {
        'sparkline_data': response.data.sparkline_data
      }
    })
  }
}
</script>
