<template>
  <div class="full-screen">
    <div class="vist-number">
      <div>今日到馆累计人数</div>
      <ul>
        <li v-for="(item,index) in innum" :key="index" v-if="innum.length">
          <countTo :startVal='startNum' :endVal='parseInt(item)' :duration='3000'></countTo>
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
  import s from '../assets/china_geo'
  import countTo from 'vue-count-to';

  export default {
    data() {
      return {
        innum: 0,
        startNum: 0,
      };
    },
    components: {
      countTo,
    },
    props: {
      'vistNumber': {
        type: Number,
        default: 0
      },
      'areatop': {
        type: Array,
        default: [
          {
            name: "黑龙江",
            value: 10
          },
          {
            name: "香港",
            value: 2
          },
          {
            name: "青海",
            value: 3
          },
          {
            name: "陕西",
            value: 4
          },
          {
            name: "重庆",
            value: 0
          },
          {
            name: "辽宁",
            value: 0
          },
          {
            name: "贵州",
            value: 0
          },
          {
            name: "西藏",
            value: 0
          },
          {
            name: "福建",
            value: 0
          },
          {
            name: "甘肃",
            value: 0
          },
          {
            name: "澳门",
            value: 0
          },
          {
            name: "湖南",
            value: 0
          },
          {
            name: "湖北",
            value: 0
          },
          {
            name: "海南",
            value: 0
          },
          {
            name: "浙江",
            value: 0
          },
          {
            name: "河南",
            value: 0
          },
          {
            name: "河北",
            value: 0
          },
          {
            name: "江西",
            value: 0
          },
          {
            name: "江苏",
            value: 0
          },
          {
            name: "新疆",
            value: 0
          },
          {
            name: "广西",
            value: 0
          },
          {
            name: "广东",
            value: 0
          },
          {
            name: "山西",
            value: 0
          },
          {
            name: "山东",
            value: 0
          },
          {
            name: "安徽",
            value: 0
          },
          {
            name: "宁夏",
            value: 0
          },
          {
            name: "国外",
            value: 0
          },
          {
            name: "四川",
            value: 0
          },
          {
            name: "吉林",
            value: 0
          },
          {
            name: "台湾",
            value: 0
          },
          {
            name: "北京",
            value: 0
          },
          {
            name: "内蒙古",
            value: 0
          },
          {
            name: "云南",
            value: 0
          },
          {
            name: "上海",
            value: 0
          },
          {
            name: "天津",
            value: 2
          }
        ]
      }
    },
    mounted() {
      // console.log(geoJSON);
      // console.log(s)
      // console.log(this.areatop)
      this.initMap();
      this.innum = this.vistNumber.toString().split('');
    },
    methods: {
      initMap() {
        var citys = [];
        var lines = [];
        s.features.forEach((item, index) => {
          // citys.push({
          //   name: item.properties.name,
          //   value: item.properties.cp
          // });
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
        lines.forEach((a, b) => {
          this.areatop.forEach((c, d) => {
            if (a.name == c.name) {
              a.width = c.value;
              // console.log(a.name)
            } else if (a.name != c.name) {
              a.width = 0;
            }
          })
        });
        echarts.registerMap('worldMap', geoJSON);
        const {echartsEl} = this.$refs;
        const myEcharts = echarts.init(echartsEl);
        var series = []
        let maxwidth = Math.max(...lines.map(o => o.width))
        lines.forEach((i, ind) => {
          var width = 0;
          if (maxwidth > 0 && i.width > 0) {
            width = Math.floor(10 * (i.width / maxwidth));
          } else {
            width = 1;
          }
          // console.log(width)
          series.push(
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
                  width: width,
                  opacity: 0.5,
                  curveness: 0.1,
                },
              },
              data: [i],
              // data:mapData.moveLines
            },
          )
        })
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
          series: series,
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
      top: 31px;
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

    .mapline {
      position: absolute;
      z-index: 3;
      left: 51%;
      width: 12%;
      bottom: 0;

      img {
        width: 100%;
      }
    }
  }
</style>
