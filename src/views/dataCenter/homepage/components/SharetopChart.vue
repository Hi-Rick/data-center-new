<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      // var index = 0;
      // var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
      // var itemStyle ={}
      this.chart.setOption( {
        title: {
          text: '数据资源共享次数',
          // subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['水库数据', '流域数据', '行政区数据', '堤防数据', '河道防洪数据', '监测站数据','主数据', '外部数据', '内部数据', '数据源']
        },
        series: [
          {

            type: 'bar',
            data: [17, 30, 32,34,45,46,60, 66, 70, 88,]
          }
        ]
      })
    }
  }
}
</script>
