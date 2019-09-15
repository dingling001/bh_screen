<template>
  <div class="full-screen">
    <div class="vist-number">
      <div>今日到馆累计人数</div>
      <ul>
        <li v-for="(item,index) in vistNumber.toString().padStart(6, '0')" :key="index">{{ item }}</li>
      </ul>
    </div>

    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import geoJSON from '@/assets/word.json';
import mapData from '@/assets/count_data.json';

export default {
  data() {
    return {
      vistNumber: 840521,
    };
  },

  mounted() {
    console.log(geoJSON);

    echarts.registerMap('worldMap', geoJSON);

    const { echartsEl } = this.$refs;

    const myEcharts = echarts.init(echartsEl);

    const option = {
      legend: {
        show: false,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
          color: '#fff',
        },
      },
      geo: {
        map: 'worldMap',
        zoom: 3.5,
        center: [105.2978515625, 35.8544921875],
        label: {
          emphasis: {
            show: false,
          },
        },
        roam: false, // 是否允许缩放
        itemStyle: {
          normal: {
            color: 'rgba(0, 0, 0, 0.1)', // 地图背景色
            borderColor: '#44586A', // 省市边界线00fcff 516a89
            borderWidth: 1,
          },
          emphasis: {
            color: 'rgba(37, 43, 61, .5)', // 悬浮背景
          },
        },
        regions: [
          {
            name: 'China',
            itemStyle: {
              normal: {
                borderColor: '#44586A',
                borderWidth: 5,
                // areaColor: '#00f',
                areaColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: '#022136', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#022136', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 0,
              },
              emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0,
              },
            },
          },
        ],
      },
      series: [
        {
          name: '地点',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          symbolSize: 2,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke',
          },
          label: {
            emphasis: {
              show: false,
              position: 'right',
              formatter: '{b}',
            },
          },
          itemStyle: {
            normal: {
              color: '#46bee9',
            },
          },
          data: mapData.citys,
        },
        {
          name: '线路',
          type: 'lines',
          coordinateSystem: 'geo',
          zlevel: 2,
          large: true,
          effect: {
            show: true,
            constantSpeed: 100,
            // symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            symbol: 'pin',
            symbolSize: 10,
            trailLength: 0,
          },
          lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#58B3CC',
                  },
                  {
                    offset: 1,
                    color: '#F58158',
                  },
                ],
                false,
              ),
              width: 1,
              opacity: 0.5,
              curveness: 0.1,
            },
          },
          data: mapData.moveLines,
        },
      ],
    };

    myEcharts.setOption(option);
  },
};
</script>

<style lang="less" scoped>
/** @format */

.full-screen {
  width: 100%;
  height: 1536px;
  display: flex;
  flex-flow: column nowrap;
  color: lighten(#0e0e20, 40);

  .vist-number {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    z-index: 8888;

    > div {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }

    > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      > li {
        margin-right: 12px;
        width: 50px;
        font-size: 40px;
        font-weight: bold;
        line-height: 62px;
        border-radius: 6px;
        text-align: center;
        color: #fff;
        background-color: #032aa9;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .echarts-con {
    width: 100%;
    height: 100%;
  }
}
</style>
