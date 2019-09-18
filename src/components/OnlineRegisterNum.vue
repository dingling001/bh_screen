<template>
  <div class="online-register">
    <div class="online-register_top">
      <span>线上注册用户数：</span>
      <span>8,120</span>
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
      graphic: [
        {
          type: 'image',
          left: '16%',
          top:'40%',
          style: {
            // eslint-disable-next-line global-require
            image: require('../assets/PC.png'),
            width: 29,
            height: 25,
            y: 55,
          },
        },
        {
          type: 'image',
          left: '46%',
          top:'40%',
          style: {
            // eslint-disable-next-line global-require
            image: require('../assets/Other.png'),
            width: 30,
            height: 31,
            y: 55,
          },
        },
        {
          type: 'image',
          left: '77%',
          top:'40%',
          style: {
            // eslint-disable-next-line global-require
            image: require('../assets/Mobile.png'),
            width: 25,
            height: 28,
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
          show: true,
          left: '45%',
          text: '导视屏',
          textStyle: {
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 'bold',
            fontSize: 11,
          },
        },
        {
          show: true,
          left: '75%',
          text: '移动端',
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
          label: {
            show: true,
            position: 'outside',
            padding: [50, -75, 0, 0],
            formatter(params) {
              if (params.data.name === 'show') {
                return `{b|${params.data.number}}\n{a|${params.data.value}%}`;
              }
              return '';
            },
            rich: {
              a: {
                color: '#00B7EE',
                lineHeight: '33',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
              b: {
                color: '#fff',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
            },
          },
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
              name: 'no',
              value: 100 - 41.25,
            },
            {
              name: 'show',
              number: 3350,
              value: 41.25,
              itemStyle: {
                color: '#00B7EE',
                borderColor: '#00b7ee',
              },
            },

            {
              name: 'hidde',
              value: 10,
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
          label: {
            show: true,
            position: 'outside',
            padding: [50, -75, 0, 0],
            formatter(params) {
              if (params.data.name === 'show') {
                return `{b|${params.data.number}}\n{a|${params.data.value}%}`;
              }
              return '';
            },
            rich: {
              a: {
                color: '#2FE4C3',
                lineHeight: '33',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
              b: {
                color: '#fff',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
            },
          },
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
              name: 'no',
              value: 100 - 41.25,
            },
            {
              name: 'show',
              number: 3350,
              value: 41.25,
              itemStyle: {
                color: '#2FE4C3',
                borderColor: '#2FE4C3',
              },
            },

            {
              name: 'hidde',
              value: 10,
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
          label: {
            show: true,
            position: 'outside',
            padding: [50, -75, 0, 0],
            formatter(params) {
              if (params.data.name === 'show') {
                return `{b|${params.data.number}}\n{a|${params.data.value}%}`;
              }
              return '';
            },
            rich: {
              a: {
                color: '#EA68A2',
                lineHeight: '33',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
              b: {
                color: '#fff',
                fontWeight: 'bold',
                align: 'center',
                fontSize: 13,
              },
            },
          },
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
              name: 'no',
              value: 100 - 41.25,
            },
            {
              name: 'show',
              number: 3350,
              value: 41.25,
              itemStyle: {
                color: '#EA68A2',
                borderColor: '#EA68A2',
              },
            },

            {
              name: 'hidde',
              value: 10,
              itemStyle: {
                color: 'rgba(0,0,0,0)',
                borderWidth: 0,
              },
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
    padding-top: 25px;
    padding-bottom: 40px;
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
