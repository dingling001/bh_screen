<template>
  <div class="online-register">
    <div class="online-register_top">
      <span>线上注册用户数：</span>
      <span>
      <ICountUp
        :delay="delay"
        :endVal="onlinedata.count"
        :options="options"
        @ready="onReady"
        class="iconup"
      />
      </span>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import ICountUp from 'vue-countup-v2';

  export default {
    data() {
      return {
        myEcharts: null,
        delay: 1000,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        },
      }
    },
    components: {
      ICountUp
    },
    props: {
      onlinedata: {
        type: Object,
        default: {}
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initOnline(this.onlinedata);
      console.log(this.onlinedata)
    },
    methods: {
      initOnline(onlinedata) {
        const options = {
          graphic: [
            {
              type: 'image',
              left: '15%',
              top: '35%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/PC.png'),
                width: 35,
                height: 35,
                y: 55,
              },
            },
            {
              type: 'image',
              left: '45%',
              top: '35%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/Other.png'),
                width: 35,
                height: 35,
                y: 55,
              },
            },
            {
              type: 'image',
              left: '75%',
              top: '35%',
              style: {
                // eslint-disable-next-line global-require
                image: require('../assets/Mobile.png'),
                width: 35,
                height: 35,
                y: 55,
              },
            },
          ],
          title: [
            {
              show: true,
              text: 'PC端',
              left: '15%',

              textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontSize: 11,
                fontWeight: 'bold',
              },
            },
            {
              text: '导视屏',
              show: true,
              left: '45%',
              textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 'bold',
                fontSize: 11,
              },
            },
            {
              text: '移动端',
              show: true,
              left: '75%',
              textStyle: {
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 'bold',
                fontSize: 11,
              },
            },
          ],
          series: [
            {
              name: 'pc',
              type: 'pie',
              startAngle: 140,
              radius: [70 / 2 - 2, 70 / 2],
              center: ['20%', 75],
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#666F9A',
                borderWidth: 8,
                borderColor: '#666F9A',
              },
              data: [
                {
                  name: '',
                  value: onlinedata.count - onlinedata.w_count,
                },
                {
                  name: '',
                  number: onlinedata.w_count,
                  value: ((onlinedata.w_count / onlinedata.count) * 100).toFixed(2),
                  itemStyle: {
                    color: '#00B7EE',
                    borderColor: '#00b7ee',
                  },
                },
                {
                  name: '',
                  value: onlinedata.count / 10,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                  },
                },
              ],
            },
            {
              name: 'other',
              type: 'pie',
              startAngle: 140,
              radius: [70 / 2 - 2, 70 / 2],
              center: ['50%', 75],
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#666F9A',
                borderWidth: 8,
                borderColor: '#666F9A',
              },
              data: [
                {
                  name: '',
                  value: onlinedata.count - onlinedata.d_count,
                },
                {
                  name: '',
                  number: onlinedata.d_count,
                  value: ((onlinedata.d_count / onlinedata.count) * 100).toFixed(2),
                  itemStyle: {
                    color: '#2FE4C3',
                    borderColor: '#2FE4C3',
                  },
                },
                {
                  name: '',
                  value: onlinedata.count / 10,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                  },
                },
              ],
            },
            {
              name: 'mobile',
              type: 'pie',
              startAngle: 140,
              radius: [70 / 2 - 2, 70 / 2],
              center: ['80%', 75],
              labelLine: {
                show: false,
              },
              itemStyle: {
                color: '#666F9A',
                borderWidth: 8,
                borderColor: '#666F9A',
              },
              data: [
                {
                  name: '',
                  value: onlinedata.count - onlinedata.m_count,
                },
                {
                  name: '',
                  number: onlinedata.m_count,
                  value: ((onlinedata.m_count / onlinedata.count) * 100).toFixed(2),
                  itemStyle: {
                    color: '#EA68A2',
                    borderColor: '#EA68A2',
                  },
                },
                {
                  name: '',
                  value: onlinedata.count / 10,
                  itemStyle: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                  },
                },
              ],
            },
          ],
        };
        this.myEcharts.setOption(options);
      },
      onReady(instance, CountUp) {
        const that = this;
        instance.update(that.onlinedata.count);
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .online-register {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    /*  width: 960 + 120px;
      height: 452px;*/
    width: 367px;
    height: 240px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 36px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;

      > span {
        &:last-child {
          font-size: 17px;
        }
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>
