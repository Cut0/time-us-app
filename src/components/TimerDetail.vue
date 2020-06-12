<script>
// ここでこのコンポーネントで使用するグラフの種類を定義する。今回はドーナツグラフなのでDoughnutとなる。
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data() {
    return {
      datas: {
        // 凡例とツールチップに表示するラベル
        labels: ['休憩時間', '勉強時間', 'その他'],
        // 表示するデータ
        datasets: [
          {
            data: [10, 15, 6],
            backgroundColor: ['#8BC34A', '#FF9800', '#BDBDBD'],
            borderColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  mounted() {
    this.addPlugin({
      afterDraw(chart, go) {
        let ctx = chart.ctx
        chart.data.datasets.forEach((dataset, i) => {
          let dataSum = 0
          dataset.data.forEach(element => {
            dataSum += element
          })

          let meta = chart.getDatasetMeta(i)
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
        let fontSize = 24
        let fontStyle = 'normal'
        ctx.fillStyle = '#000'
        ctx.font = Chart.helpers.fontString(fontSize, fontStyle)

        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('00:00:00', chart.width / 2, chart.height / 2)
      }
    })
    this.renderChart(this.datas, this.options)
  }
}
</script>
