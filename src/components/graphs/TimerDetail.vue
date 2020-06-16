<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    options: { type: Object, default: null },
    params: { type: Array },
    todayValue: { type: String }
  },
  mounted() {
    this.setChartConfig()
    this.renderChart(this.formatParams(this.params), this.options)
  },
  methods: {
    formatParams(params) {
      const labels = []
      const datasets = [{ data: [], backgroundColor: [] }]
      params.map(param => {
        labels.push(param.label)
        datasets[0].data.push(param.value)
        datasets[0].backgroundColor.push(param.color)
      })
      datasets[0].borderColor = 'transparent'
      return { labels, datasets }
    },
    setChartConfig() {
      this.addPlugin({
        afterDraw: (chart, go) => {
          const ctx = chart.ctx
          chart.data.datasets.forEach((dataset, i) => {
            let dataSum = 0
            dataset.data.forEach(element => {
              dataSum += element
            })

            const meta = chart.getDatasetMeta(i)
            if (!meta.hidden) {
              meta.data.forEach(function(element, index) {
                // フォントの設定
                let fontSize = 12
                let fontStyle = 'normal'
                ctx.fillStyle = '#000'
                ctx.font = Chart.helpers.fontString(fontSize, fontStyle)

                // ラベルをパーセント表示に変更
                let labelString = chart.data.labels[index]
                let dataString =
                  Math.round((dataset.data[index] / dataSum) * 100).toString() +
                  '%'
                // positionの設定
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'

                let padding = -2
                let position = element.tooltipPosition()
                // ツールチップに変更内容を表示
                ctx.fillText(
                  labelString,
                  position.x,
                  position.y - fontSize / 2 - padding
                ) // title
                ctx.fillText(
                  dataString,
                  position.x,
                  position.y + fontSize / 2 - padding
                ) // データの百分率
              })
            }
          })
          const fontSize = 24
          const fontStyle = 'normal'
          ctx.fillStyle = '#000'
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle)
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(this.todayValue, chart.width / 2, chart.height / 2)
        }
      })
    }
  }
}
</script>
