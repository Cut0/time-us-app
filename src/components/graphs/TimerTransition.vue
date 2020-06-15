<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: { options: { type: Object, default: null }, params: { type: Array } },
  mounted() {
    this.renderChart(this.formatParams(this.params), this.options)
  },
  methods: {
    formatParams(params) {
      const labels = []
      const datasets = []
      params.map(param => {
        if (!labels.includes(param.date)) labels.push(param.date)
        if (datasets.some(el => el.label === param.label)) {
          datasets.find(el => el.label === param.label).data.push(param.value)
        } else {
          datasets.push({
            label: param.label,
            lineTension: 0,
            borderColor: param.color,
            data: [param.value]
          })
        }
      })
      return { labels, datasets }
    }
  }
}
</script>
