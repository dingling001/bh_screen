<template>
  <div class="audience-origin">
    <div class="audience-origin_top">
      <span>观众来源地TOP10</span>
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
        origin: [
          {name: '澳门', value: 0},
          {name: '国外', value: 0},
          {name: '台湾', value: 0},
          {name: '香港', value: 5},
          {name: '西藏', value: 16},
          {name: '海南', value: 109},
          {name: '上海', value: 184},
          {name: '云南', value: 322},
          {name: '重庆', value: 392},
          {name: '青海', value: 404},
          {name: '贵州', value: 472},
          {name: '宁夏', value: 565},
          {name: '广西', value: 614},
          {name: '广东', value: 813},
          {name: '浙江', value: 1179},
          {name: '新疆', value: 1315},
          {name: '福建', value: 1360},
          {name: '江西', value: 1714},
          {name: '湖南', value: 2224},
          {name: '甘肃', value: 2329},
          {name: '江苏', value: 2799},
          {name: '陕西', value: 3076},
          {name: '四川', value: 3080},
          {name: '安徽', value: 3684},
          {name: '湖北', value: 4557},
          {name: '吉林', value: 6021},
          {name: '内蒙古', value: 6066},
          {name: '辽宁', value: 7803},
          {name: '山西', value: 8873},
          {name: '北京', value: 10376},
          {name: '黑龙江', value: 11075},
          {name: '河南', value: 11286},
          {name: '山东', value: 21795},
          {name: '河北', value: 54203},
          {name: '天津', value: 147210},
        ],
      };
    },
    props: {
      'origins': {
        type: Array,
        default: [
          {name: '澳门', value: 0},
          {name: '国外', value: 0},
          {name: '台湾', value: 0},
          {name: '香港', value: 5},
          {name: '西藏', value: 16},
          {name: '海南', value: 109},
          {name: '上海', value: 184},
          {name: '云南', value: 322},
          {name: '重庆', value: 392},
          {name: '青海', value: 404},
          {name: '贵州', value: 472},
          {name: '宁夏', value: 565},
          {name: '广西', value: 614},
          {name: '广东', value: 813},
          {name: '浙江', value: 1179},
          {name: '新疆', value: 1315},
          {name: '福建', value: 1360},
          {name: '江西', value: 1714},
          {name: '湖南', value: 2224},
          {name: '甘肃', value: 2329},
          {name: '江苏', value: 2799},
          {name: '陕西', value: 3076},
          {name: '四川', value: 3080},
          {name: '安徽', value: 3684},
          {name: '湖北', value: 4557},
          {name: '吉林', value: 6021},
          {name: '内蒙古', value: 6066},
          {name: '辽宁', value: 7803},
          {name: '山西', value: 8873},
          {name: '北京', value: 10376},
          {name: '黑龙江', value: 11075},
          {name: '河南', value: 11286},
          {name: '山东', value: 21795},
          {name: '河北', value: 54203},
          {name: '天津', value: 147210},
        ]
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      const myEcharts = echarts.init(echartsEl);
      this.origin = this.origins;
      const data = this.origin.slice(-10).reverse();
      let total = 0;
      this.origin.forEach((item) => {
        total += item.value;
      });
      const series = [];
      const titles = [];

      data.forEach((item, index) => {
        const obj = {
          name: item.name,
          type: 'pie',
          startAngle: 45,
          radius: [55 / 2 - 10, 55 / 2],
          label: {
            show: true,
            fontWeight: 'bold',
            fontSize: 11,
            color: '#fff',
            position: 'center',
            formatter(params) {
              if (params.data.name) {
                if(total<=0){
                  return '0%'
                }else{
                  return `${((params.data.value / total) * 100).toFixed(2)}%`;
                }
              }
              return '';
            },
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: '#131C43',
          },
          data: [
            {
              name: item.name,
              value: item.value,
              itemStyle: {
                color: index <= 2 ? '#FF107A' : '#3F7DFC',
              },
            },
            {
              value: total>0?total-item.value:1,
              itemStyle: {},
            },
          ],
        };

        const title = {
          text: item.name,
          textStyle: {
            color: '#6272B6',
            fontWeight: 'bold',
            fontSize: 12,
            textAlign: 'right',
          },
        };

        if (index <= 4) {
          title.left = `${(210 * index / 1120) * 100}%`;
          title.top = 25;
          if (index === 0) {
            title.left = 20;
            obj.center = [85, 30];
          } else {
            obj.center = [
              `${(((120 + 84) * index + 175) / 1120) * 100}%`,
              30,
            ];
          }
        } else if (index === 5) {
          obj.center = [85, 110];
          title.top = 100;
          title.left = 20;
          // title.left = '7%';
        } else {
          title.left = `${((210 * (index - 5)) / 1120) * 100}%`;
          title.top = 100;
          obj.center = [
            `${(((120 + 84) * (index - 5) + 175) / 1120) * 100}%`,
            110,
          ];
        }

        if (index === 1) {
          title.left = `${((250 * index) / 1120) * 100}%`;
        }
        if (index === 2) {
          title.left = `${((224 * index) / 1120) * 100}%`;
        }
        if (index === 6) {
          title.left = `${((250 * (index - 5)) / 1120) * 100}%`;
        }
        if (index === 7) {
          title.left = `${((225 * (index - 5)) / 1120) * 100}%`;
        }
        series.push(obj);
        titles.push(title);
      });

      const options = {
        title: titles,
        series,
      };

      myEcharts.setOption(options);
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .audience-origin {
    display: flex;
    flex-flow: column nowrap;
    width: 520px;
    height: 280px;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #b7bedb;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>
