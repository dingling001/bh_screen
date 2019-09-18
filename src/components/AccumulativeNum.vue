<template>
  <div class="accumulative">
    <div class="accumulative-top">
      <div class="accumulative-top_left">
        <span>累计预约人数:</span>
        <span>19,128</span>
      </div>
      <div class="accumulative-top_right">
        <span>累计体验人数:</span>
        <span>29,128</span>
      </div>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  mounted() {
    const { echartsEl } = this.$refs;

    const myEcharts = echarts.init(echartsEl);

    const options = {
      series: [
        {
          type: 'pie',
          startAngle: 90,
          radius: [45,50],
          center: ['25%', '50%'],
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 11,
              },
              position: 'inside',
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
              name: '',
              value: 100 - 50,
              itemStyle: {
                color: '#131C43',
                borderWidth: 8,
                borderColor: '#131C43',
              },
            },
            {
              name: '陪伴票',
              value: 50,
              label: {
                padding: [50, 0, 20, 100],
                color: '#fff',
                formatter(params) {
                  // console.log(params);
                  return `${params.data.name}\t\t{color1|${
                    params.data.value
                  }%}\n{color2|9564}`;
                },
                rich: {
                  color1: {
                    fontSize: 11,
                    fontWeight: 'bold',
                    color: '#FF107A',
                  },
                  color2: {
                    fontSize: 14,
                    color: '#fff',
                    fontWeight: 'bold',
                    lineHeight: 40,
                  },
                },
              },
              itemStyle: {
                color: '#FF107A',
                borderWidth: 8,
                borderColor: '#FF107A',
              },
            },
          ],
        },
        {
          type: 'pie',
          startAngle: -90,
          radius: [45, 50],
          center: ['75%', '50%'],
          label: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 11,
              },
              position: 'inside',
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
              name: '儿童',
              value: 58,
              label: {
                padding: [0, 0, 20, 100],
                color: '#FFB400',
                formatter(params) {
                  // console.log(params);
                  return `${params.data.name}\t\t{color1|${
                    params.data.value
                  }%}`;
                },
                rich: {
                  color1: {
                    fontSize: 14,
                    fontWeight: 'bold',
                  },
                },
              },
              itemStyle: {
                color: '#FFB400',
                borderWidth: 8,
                borderColor: '#FFB400',
              },
            },
            {
              name: '',
              value: 4,
            },
            {
              name: '成人',
              value: 42,
              label: {
                color: '#FF2045',
                padding: [20, 90, 0, 0],
                formatter(params) {
                  // console.log(params);
                  return `${params.data.name}\t\t{color1|${params.value}%}`;
                },
                rich: {
                  color1: {
                    fontSize: 14,
                    fontWeight: 'bold',
                  },
                },
              },
              itemStyle: {
                color: '#FF2045',
                borderWidth: 8,
                borderColor: '#FF2045',
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
.accumulative {
/*  width: 960 + 120px;
  height: 452px;*/
  display: flex;
  flex-flow: column nowrap;
  /*width: 367px;*/
  height: 240px;
  width: 100%;
  &-top {
    padding-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
justify-content: space-around;
    div {
      /*margin: 0 auto;*/
      display: flex;
      > span {
        &:first-child {
          margin-right: 16px;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.75);
        }
        &:last-child {
          font-size: 13px;
          color: #fff;
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
