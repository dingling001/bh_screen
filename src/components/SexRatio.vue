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
    };
  },
  mounted() {
    const { echartsEl } = this.$refs;

    const myEcharts = echarts.init(echartsEl);

    const options = {
      animation: false,
      graphic: [
        {
          type: 'image',
          left: `${(320 / 720) * 100}%`,
          bottom: 'center',
          style: {
            // eslint-disable-next-line global-require
            image: require('../assets/woman.png'),
            width: 58,
            height: 58,
          },
        },
        {
          type: 'image',
          left: `${(360 / 720) * 100}%`,
          bottom: 'center',
          style: {
            // eslint-disable-next-line global-require
            image: require('../assets/man.png'),
            width: 58,
            height: 58,
          },
        },
      ],
      series: [
        {
          type: 'pie',
          startAngle: -90,
          radius: [218 / 2, 258 / 2],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 21,
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
              name: '女性',
              value: 58,
              label: {
                padding: [0, 0, 140, 120],
                color: '#E90079',
                formatter(params) {
                  // console.log(params);
                  return `${params.data.name}\t\t{color1|${
                    params.data.value
                  }%}`;
                },
                rich: {
                  color1: {
                    fontSize: 32,
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
              value: 4,
            },
            {
              name: '男性',
              value: 42,
              label: {
                color: '#0A89EA',
                padding: [190, 40, 0, 0],
                formatter(params) {
                  // console.log(params);
                  return `${params.data.name}\t\t{color1|${
                    params.data.value
                  }%}`;
                },
                rich: {
                  color1: {
                    fontSize: 32,
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
              value: 5,
            },
          ],
        },
      ],
    };

    myEcharts.setOption(options);
  },
};
</script>

<style lang="less" scoped>
/** @format */
.sex-ratio {
  display: flex;
  flex-flow: column nowrap;
  width: 960 + 120px;
  height: 452px;
  // background-color: #0e0e20;

  &_top {
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 60px;
    width: 100%;
    text-align: left;
    font-size: 29px;
    font-weight: 800;
    color: #fff;
  }

  .echarts-con {
    width: 100%;
    height: 100%;
  }
}
</style>
