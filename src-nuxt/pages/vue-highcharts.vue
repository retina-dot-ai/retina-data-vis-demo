<template>
  <article class="message is-info">
    <div class="message-header">
      <p><a href="https://github.com/weizhenye/vue-highcharts">https://github.com/weizhenye/vue-highcharts</a></p>
    </div>
    <div class="message-body">
      <div class="columns is-multiline">
        <div v-for="plot_options in highcharts_plot_options" class="column">
          <highcharts :options="plot_options"></highcharts>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import axios_factory from '~/lib/axios_factory'
const measure_map = {
  'cpc': 'Cost Per Click',
  'cost_per_unique_click': 'Cost Per Unique Click',
  'cpp': 'Cost to reach 1000 people'
}

export default {
  head () {
    return {
      title: 'vue-highcharts'
    }
  },
  asyncData (context) {
    const axios = axios_factory(context)

    return axios
    .get('/api/highcharts-data')
    .then((response) => {
      let web_data = response.data
      let highcharts_plot_options = web_data.plots.map((plot) => {
        return {
          chart: {
            type: 'line'
            // type: line or bar
          },
          credits: {
            enabled: false
          },
          title: {
            text: measure_map[plot.measure_name]
          },
          subtitle: {
            text: 'Actual: $' + plot.last_actual_value + ' Expected: $' + plot.last_expected_value
          },
          xAxis: {
            type: 'datetime',
            plotBands: [
              {
                color: '#ffda58',
                from: 1493596800000,
                to: 1493625600000
              }
            ]
          },
          yAxis: {
            type: 'linear',
            title: {
              text: ''
            }
          },
          series: [{
            name: 'Actual',
            data: plot.measure_timestamp_series
          }, {
            name: 'Predicted',
            dashStyle: 'ShortDash', // ShortDash, Dot, LongDash, LongDashDot
            data: plot.predicted_timestamp_series
          }]
        }
      })

      highcharts_plot_options = highcharts_plot_options.slice(1, 2)

      return {
        web_data,
        highcharts_plot_options
      }
    })
  }
}
</script>
