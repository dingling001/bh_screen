<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”体验次数TOP5:</span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        myEcharts: null
      }
    },
    props: {
      'topfive': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.iniTopfive(this.topfive);
      setInterval(() => {
        this.myEcharts.clear();
        this.iniTopfive(this.topfive);
      }, 10000)
    },
    methods: {
      iniTopfive(data) {
        let xdata = [];
        let ydata = [];
        data.forEach((item, index) => {
          xdata.push({
            value: item.hello_num,
            name: item.real_name,
          })
          ydata.push({
            value: 90 * (item.hello_num / 90) + 10,
            symbol: 'image://' + item.avatar
          })
        });
        // this.main(item.avatar, function (res) {
        //   return res
        // })
        const options = {
          colors: ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'],
          grid: {
            top: 50,
            bottom: 30,
            left: 50,
            right: 120,
          },
          xAxis: {
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              // color(params, index) {
              //   const colorList = ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'];
              //   return colorList[index];
              // },

              color: '#fff',
              fontSize: 10,
              margin: 20,
            },
            data: ['第1名', '第2名', '第3名', '第4名', '第5名'],
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#A4A4A4',
              fontSize: 10,
            },
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
          },
          series: [{
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              padding: 10,
              color: '#fff',
              fontSize: 10,
              formatter(data) {
                // console.log(data)
                return data.name;
              },
            },
            itemStyle: {
              color(params) {
                const colorList = ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'];
                return colorList[params.dataIndex];
              },
            },
            barWidth: '20%',
            data: xdata,
            //   [{value: 80, name: '刘学'}, {value: 70, name: '杨辉'}, {value: 67, name: '孙海岩'}, {
            //   value: 20,
            //   name: '孙海岩',
            // }, {value: 10, name: '孙海岩'}]
          },
            {
              type: 'pictorialBar',
              barGap: '-100%',
              symbolPosition: 'end',
              symbolSize: 22,
              symbolOffset: [0, '-230%'],
              data: ydata
            }],
        };
        this.myEcharts.setOption(options);
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .child-age {
    display: flex;
    flex-flow: column nowrap;
    /*width: 1080px;*/
    /*height: 452px;*/
    /*width: 367px;*/
    height: 240px;
    width: 100%;

    &_top {
      padding-top: 36px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>
