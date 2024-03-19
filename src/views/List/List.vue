<template>

  <div class="canvars" ref="myRef"></div>

</template>
 
<script>
import { ref, onMounted, getCurrentInstance } from 'vue'
export default {
  setup() {
    const { proxy } = getCurrentInstance() // 获取全局配置项
    const myRef = ref(null) // 获取dom实例
 
    onMounted(() => {
      renderChart() // 生命周期挂载函数渲染图表
    })
 
    const renderChart = () => {
      const myChart = proxy.$echarts.init(myRef.value)
 
      myChart.setOption({
        title: {
          text: '示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
 
    return {
      myRef
    }
  }
}
</script>
 
<style scoped lang="scss">
.canvars {
  width: 100%;
  height: 100%;
}
</style>