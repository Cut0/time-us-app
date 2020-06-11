<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['options'],
  data() {
    return {
      datas: {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: '勉強',
            lineTension: 0,
            borderColor: '#FF9800',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          },
          {
            label: 'その他',
            lineTension: 0,
            borderColor: '#8BC34A',
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>
