<template>
  <div class="full-screen">
    <div class="vist-number">
      <div>今日到馆累计人数</div>
      <ul>
        <li v-for="(item,index) in innum" :key="index" v-if="innum.length">
          <countTo :startVal='startNum' :endVal='parseInt(item)' :duration='3000' ></countTo>
        </li>

      </ul>
    </div>

    <div class="echarts-con" ref="echartsEl"></div>
    <div class="mapline"><img src="../assets/bianjie.png" alt=""></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import geoJSON from '@/assets/word.json';
  import mapData from '@/assets/count_data.json';
  import s from '../assets/china_geo'
  import w from '../assets/world_geo'
  import countTo from 'vue-count-to';

  export default {
    data() {
      return {
        innum: 0,
        startNum:0
      };
    },
    components: {
      countTo,
    },
    props: ['vistNumber'],
    mounted() {
      // console.log(geoJSON);
      // console.log(s)
      this.initMap();
      this.innum = this.vistNumber.toString().split('');
    },
    methods: {
      initMap() {
        var citys = [];
        var lines = [];
        s.features.forEach((item, index) => {
          citys.push({
            name: item.properties.name,
            value: item.properties.cp
          })
          lines.push({
            coords: [item.properties.cp, [117.802248, 39.4189]],
            fromName: item.properties.name,
            toName: "天津市",
            name: item.properties.name
          })
          // mapData.moveLines.forEach((a, i) => {
          //   if(a.fromName.indexOf(item.name)>1){
          //     console.log(i)
          //     item.cp=a.coords[0]
          //   }
          // })
        })
        echarts.registerMap('worldMap', geoJSON);
        const {echartsEl} = this.$refs;
        const myEcharts = echarts.init(echartsEl);
        const option = {
          // legend: {
          //   show: false,
          //   orient: 'vertical',
          //   top: 'bottom',
          //   left: 'right',
          //   data: ['地点', '线路'],
          //   textStyle: {
          //     color: '#fff',
          //   },
          // },
          geo: {
            map: 'worldMap',
            zoom: 3.2,
            center: [105.2978515625, 35.8544921875],
            label: {
              emphasis: {
                show: false,
              },
            },
            roam: false, // 是否允许缩放
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0.84)', // 地图背景色
                borderColor: '#516a89', // 省市边界线00fcff 516a89
                borderWidth: 1,
              },
              emphasis: {
                color: 'rgba(37, 43, 61, .5)', // 悬浮背景
              },
            },
            regions: [
              {
                name: "China",
                selected: true,
                itemStyle: {
                  borderColor: '#48596b',
                  borderWidth: 3,
                  borderType: 'solid',
                  areaColor: '#022316',
                  // opacity: 0,
                  // areaColor: {
                  //   type: 'linear',
                  //   x: 0,
                  //   y: 0,
                  //   x2: 0,
                  //   y2: 1,
                  //   colorStops: [
                  //     {
                  //       offset: 1,
                  //       color: '#022136', // 0% 处的颜色
                  //     },
                  //     {
                  //       offset: 1,
                  //       color: '#022136', // 100% 处的颜色
                  //     },
                  //   ],
                  //   globalCoord: false, // 缺省为 false
                  // },
                  // shadowColor: 'rgba(128, 217, 248, 1)',
                  // shadowColor: 'rgba(255, 255, 255, 1)',
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,
                  shadowBlur: 0,
                },
                emphasis: {
                  areaColor: 'red',
                  borderWidth: 1,
                  borderColor: '#48596b'
                },
              },
            ],
          },
          series: [
            {
              name: '线路',
              type: 'lines',
              // type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              large: true,
              effect: {
                show: true,
                constantSpeed: 40,
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
                        color: '#378eef',
                      },
                    ],
                    false,
                  ),
                  width: 1,
                  opacity: 0.5,
                  curveness: 0.1,
                },
              },
              data: lines,
              // data:mapData.moveLines
            },
            {
              name: '地点',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              symbolSize: 0,
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
              data: citys,
            },
          ],
        };
        myEcharts.setOption(option);
      }
    }
  };
</script>

<style lang="less" scoped>
  /** @format */

  .full-screen {
    width: 100%;
    height: 768px;
    display: flex;
    flex-flow: column nowrap;
    color: lighten(#0e0e20, 40);

    .vist-number {
      position: absolute;
      top: 85px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      z-index: 8888;

      > div {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }

      > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 18px;

        > li {
          margin-right: 12px;
          width: 25px;
          font-size: 20px;
          font-weight: bold;
          line-height: 31px;
          border-radius: 6px;
          text-align: center;
          color: #fff;
          background-color: #0C3284;

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
    .mapline{
      position: absolute;
      z-index: 3;
      left: 51%;
      width: 12%;
      bottom: 0;
      img{
        width: 100%;
      }
    }
  }
</style>
