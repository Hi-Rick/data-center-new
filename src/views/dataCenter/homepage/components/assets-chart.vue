<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import {getAssetFirst} from "../../../../api";

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
      chart: null,
      legendName: [],
      seriesData: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getPieData()
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
    getPieData() {
      this.legendName = [];
      this.seriesData = [];
      getAssetFirst().then(response => {
        if (response.data.code === 200) {
          let list = response.data.data;
          for(let item of list) {
            this.legendName.push(item.data.assetSource);
            this.seriesData.push({
              name: item.data.assetSource,
              value: item.nums
            });
          }
          this.initChart();
        }
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption( {
        title: {
          text: '数据资产',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   left: 'center',
        //   top: 'bottom',
        //   data: this.legendName
        // },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series: [
          {
            name: '数据资产结构',
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: this.seriesData
          }
        ]
      })



    },
  }
}
</script>
