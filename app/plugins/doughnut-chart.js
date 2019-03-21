import Vue from 'vue'
import { Doughnut } from 'vue-chartjs'

Vue.component('portolio-doughnut-chart', {
  extends: Doughnut,
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
})
