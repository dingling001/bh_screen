<template>
  <div class="audience-origin">
    <div class="audience-origin_top">
      <span>观众来源地TOP10</span>
    </div>

    <!-- echarts -->
    <div class="echarts-con" id="chart"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import mixin from '@/mixins/mixin'

  export default {
    name: 'audienceOrigin',
    data() {
      return {
        myEcharts: null,
      };
    },
    props: {
      'origin': {
        type: Array,
        default: []
      }
    },

    mounted() {
      this.myEcharts = echarts.init(document.querySelector("#chart"));
      // console.log(this.origin);
      this.initAudience(this.origin)
      setInterval(() => {
        this.myEcharts.clear();
        this.initAudience(this.origin)
      }, 10000)
    },
    methods: {
      initAudience(datas) {
        const data = datas.slice(-10).reverse();
        let total = 0;
        data.forEach((item) => {
          total += item.value;
        });
        const series = [];
        const titles = [];
        data.forEach((item, index) => {
          const obj = {
            name: item.name,
            type: 'pie',
            startAngle: 45,
            radius: [19.5, 27.5],
            label: {
              show: true,
              fontWeight: 'bold',
              fontSize: 11,
              color: '#fff',
              position: 'center',
              formatter(params) {
                if (params.data.name) {
                  if (total <= 0) {
                    return '0%'
                  } else {
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
                value: total > 0 ? total - item.value : 1,
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
        var options = {
          title: titles,
          series,
        };
        this.myEcharts.setOption(options, true);
      },
    }
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
      padding-left: 30px;
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
