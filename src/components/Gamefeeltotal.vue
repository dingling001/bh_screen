<template>
  <div class="compared">
    <div class="compared_top">
      <span>“你好智能”累计体验人数：</span><span>
      <ICountUp
        :delay="delay"
        :endVal="totaldata"
        :options="options"
        @ready="onReady"
        class="iconup"
      />
    </span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import ICountUp from 'vue-countup-v2';

  export default {
    data() {
      return {
        delay: 1000,
        endVal: 120500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        },
        myEcharts: null,
        totaldata: 0,
        listdata: []
      };
    },
    watch: {
      'total': {
        handler(val) {
          this.totaldata = val;
        },
        immediate: true
      },
      'list'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.myEcharts.clear();
            this.initFeelTotal(newValue)
          }
        }
      },
    },
    props: {
      'total': {
        type: Number,
        default: 0
      },
      'list': {
        type: Array,
        default: []
      }
    },
    components: {
      ICountUp,
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.listdata = this.list;
      this.initFeelTotal(this.listdata);
      var tota = setInterval(() => {
        this.myEcharts.clear();
        this.initFeelTotal(this.listdata)
      }, 10000)
    },
    methods: {
      onReady(instance, CountUp) {
        const that = this;
        instance.update(that.totaldata);
      },
      initFeelTotal(list) {
        var xlist = [];
        var ylist = [];
        var ylist1 = [];
        list.forEach((item, index) => {
          xlist.push(item.t_date);
          ylist.push(item.total);
          ylist1.push(item.temp)
        })
        // console.log(ylist)
        const options = {
          color: ['#E5318B', '#4E65DF'],
          grid: {
            top: 30,
            bottom: 40,
            left: 80,
            right: 40,
          },
          legend: {
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 8,
              fontWeight: 'bold',
            },
            right: '20%',
            top: 50,
            selectedMode: false,
            data: ['当日体验', '临时体验'],
            orient: 'vertical',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            interval: 0,
            axisLine: {
              show: false,
              interval: 0,
            },
            axisTick: {
              show: true,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#966CF7',
              },
              interval: 0,
            },
            axisLabel: {
              interval: 0,
              show: true,
              fontSize: 8,
              color: '#fff',
              formatter(val) {
                const arr = val.split('-');
                return `${arr[1]}/${arr[2]}`;
              },
            },
            data: xlist.reverse(),
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            name: '人数',
            nameGap: 40,
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 8,
              fontWeight: 'bold',
            },
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
              showMinLabel: true,
              fontSize: 8,
              padding: [0, 20, 0, 0],
              color: 'rgba(255,255,255,.72)',
            },
          },
          series: [
            {
              type: 'line',
              name: '体验人数',
              symbol: 'none',
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#DB5D09', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FF9999', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                width: 5,
                type: 'solid',
              },
              data: ylist,
              markPoint: {
                data: [
                  {
                    name: '最大值',
                    type: 'max',
                    valueIndex: 0,
                    symbol: 'none',
                  },
                ],
              },
            },
            {
              type: 'line',
              name: '预约人数',
              symbol: 'none',
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#7349D0', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#79C1FF', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                width: 5,
                type: 'solid',
              },

              data: ylist1,
            },
          ],
        };
        this.myEcharts.setOption(options);
      }
    },

  };
</script>

<style lang="less" scoped>
  /** @format */
  .compared {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    /* width: 960 + 120px;
     height: 480px;*/
    width: 367px;
    height: 251px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      padding-left: 30px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      color: #fff;

      .iconup {
        font-size: 22px;
        font-weight: 800;
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>
