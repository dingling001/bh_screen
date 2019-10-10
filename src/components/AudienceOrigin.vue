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
        data: []
      };
    },
    watch: {
      'origin'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.data = newValue;
          }
        }
      }
    },
    computed: {
      origindata() {
        return this.data.slice(0, 10)
      }
    },
    props: {
      'origin': {
        type: Array,
        default: [],
      }
    },

    mounted() {
      this.myEcharts = echarts.init(document.querySelector("#chart"));
      this.data = this.origin;
      this.initAudience(this.origindata)
      var audience = setInterval(() => {
        this.myEcharts.clear();
        this.initAudience(this.origindata)
      }, 10000)
    },
    methods: {
      initAudience(datas) {
        const data = datas;
        let total = 0;
        data.forEach((item) => {
          total += item.value;
        });
        const series = [];
        const titles = [];
        data.forEach((item, index) => {
          const names = {
            name: item.name,
            type: 'pie',
            startAngle: 45,
            radius: [19.5, 26.5],
            label: {
              show: true,
              fontWeight: 'bold',
              fontSize: 9,
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
            title.top = 25;
            title.left = (item.name.length > 2 ? 10 : 20) + index * 100;
            names.center = [80 * (index + 1) + index * 20, 30];
          } else if (index > 4 && index <= 9) {
            title.top = 100;
            title.left = (item.name.length > 2 ? 10 : 20) + (index - 5) * 100;
            names.center = [80 * ((index - 5) + 1) + (index - 5) * 20, 110];
          }
          series.push(names);
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
    height: 270px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0)); /* 标准的语法 */

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
