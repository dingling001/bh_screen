<template>
  <div class="sex-ratio">
    <div class="sex-ratio_top">
      <span>观众性别比例</span>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
    <div class="man" v-if="sexuser.length">
      <span>男性 </span><span>{{manp}}%</span></div>

    <div class="woman" v-if="sexuser.length">
      <span>女性 </span><span>{{womanp}}%</span></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        // image: require('../assets/logo.png'),
        myEcharts: null,
        sextotal: 0,
        sexuser: [],
      };
    },

    watch: {
      'sex_user'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.sexuser = newValue;
          }
        }
        this.sextotal = 0;
        for (var i in this.sexuser) {
          this.sextotal += this.sexuser[i].value
        }
        this.myEcharts.clear();
        this.initSex(this.sexuser)
      },
    },
    props: {
      'sex_user': {
        type: Array,
        default: []
      }
    },
    computed: {
      manp() {
        var m = ((this.sexuser[0].value / this.sextotal) * 100).toFixed(2);
        return m
      },
      womanp() {
        var n = ((this.sexuser[1].value / this.sextotal) * 100).toFixed(2);
        return n
      },
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.sexuser = this.sex_user;
      for (var i in this.sexuser) {
        this.sextotal += this.sexuser[i].value
      }
      this.initSex(this.sexuser);
      setInterval(() => {
        this.myEcharts.clear();
        this.initSex(this.sexuser)
      }, 10000)
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
              bottom: '58%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/woman.png'),
                width: 30,
                height: 30,
              },
            },
            {
              type: 'image',
              right: '43%',
              bottom: '58%',
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
              center: ['50%', '35%'],
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
                    show: false,
                  },
                  // label: {
                  //   padding: [0, 0, 70, 60],
                  //   color: '#E90079',
                  //   formatter(params) {
                  //     return `${params.data.name}\t\t{color1|${
                  //     params.value / total
                  //       }%}`;
                  //   },
                  //   rich: {
                  //     color1: {
                  //       fontSize: 16,
                  //       fontWeight: 'bold',
                  //     },
                  //   },
                  // },
                  itemStyle: {
                    color: '#E90079',
                    borderWidth: 5,
                    borderColor: '#E90079',
                  },
                },
                {
                  name: '',
                  value: 2,
                },
                {
                  name: sexdata[0].name + '性',
                  value: sexdata[0].value,
                  label: {
                    show: false,
                  },

                  // label: {
                  //   color: '#0A89EA',
                  //   padding: [85, 55, 0, 0],
                  //   formatter(params) {
                  //     return `${params.data.name}\t\t{color1|${
                  //       ((params.value / total) * 100).toFixed(2)
                  //       }%}`;
                  //   },
                  //   rich: {
                  //     color1: {
                  //       fontSize: 16,
                  //       fontWeight: 'bold',
                  //     },
                  //   },
                  // },
                  itemStyle: {
                    color: '#0A89EA',
                    borderWidth: 5,
                    borderColor: '#0A89EA',
                  },
                },
                {
                  name: '',
                  value: 2,
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
    height: 300px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 16px;
      padding-bottom: 20px;
      padding-left: 30px;
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

    .woman {
      position: absolute;
      left: 50px;
      color: #D81271;
      bottom: 80px;

      font-size: 16px;
      font-weight: bold;

      span {
        &:first-child {
          font-size: 14px;
        }
      }
    }

    .man {
      position: absolute;
      top: 58px;
      right: 40px;
      color: #2A7EC2;
      font-size: 16px;
      font-weight: bold;

      span {
        &:first-child {
          font-size: 14px;
        }
      }
    }
  }
</style>
