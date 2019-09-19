<template>
  <div class="sex-ratio">
    <div class="sex-ratio_top">
      <span>观众性别比例</span>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        // image: require('../assets/logo.png'),
        myEcharts: null
      };
    },
    props: {
      'sex_user': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initSex(this.sex_user);
      setInterval(()=>{
        this.myEcharts.clear();
        this.initSex(this.sex_user)
      },3000)
    },
    methods: {
      initSex(sexdata) {
        var total = 0
        for (var i in sexdata) {
          total += parseInt(sexdata[i].value)
        }
        const options = {
          graphic: [
            {
              type: 'image',
              left: '43%',
              bottom: '50%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/woman.png'),
                width: 30,
                height: 30,
              },
            },
            {
              type: 'image',
              right:  '43%',
              bottom: '50%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/man.png'),
                width: 30,
                height: 30,
              },
            },
          ],
          series: [
            {
              type: 'pie',
              startAngle: -90,
              radius: [90 / 2, 106 / 2],
              center: ['50%', '40%'],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 10,
                  },
                  position: 'outside',
                },
              },
              labelLine: {
                show: true,
                length: 5,
                length2: 5,
                lineStyle: {
                  width: 0,
                },
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                },
              },
              data: [
                {
                  name: sexdata[1].name + '性',
                  value: sexdata[1].value,
                  label: {
                    padding: [0, 0, 70, 60],
                    color: '#E90079',
                    formatter(params) {
                      return `${params.data.name}\t\t{color1|${
                      params.value / total
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 16,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: '#E90079',
                    borderWidth: 5,
                    borderColor: '#E90079',
                  },
                },
                {
                  name: '',
                  value: total / 10,
                },
                {
                  name: sexdata[0].name + '性',
                  value: sexdata[0].value,
                  label: {
                    color: '#0A89EA',
                    padding: [85, 55, 0, 0],
                    formatter(params) {
                      return `${params.data.name}\t\t{color1|${
                        ((params.value / total) * 100).toFixed(2)
                        }%}`;
                    },
                    rich: {
                      color1: {
                        fontSize: 16,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  itemStyle: {
                    color: '#0A89EA',
                    borderWidth: 5,
                    borderColor: '#0A89EA',
                  },
                },
                {
                  name: '',
                  value: total / 10,
                },
              ],
            },
          ],
        };
        this.myEcharts.setOption(options);
      }
    }

  };
</script>

<style lang="less" scoped>
  /** @format */
  .sex-ratio {
    display: flex;
    flex-flow: column nowrap;
    /*width: 960 + 120px;*/
    /*height: 452px;*/
    width: 367px;
    height: 196px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 25px;
      /*padding-bottom: 20px;*/
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
