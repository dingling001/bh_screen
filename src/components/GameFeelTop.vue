<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”体验次数TOP5:</span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl"></div>
    <div class="avatar_box">
      <!--      0<=hello_num<=3   初级-->
      <!--      3< hello_num <=10 中级-->
      <!--      10<hello_num <=30 高级-->
      <!--      30<hello_num  特级-->
      <div class="avataritem" v-for="(item ,index) in topfive"
           :style="{marginTop:70-80*(item.hello_num/topfive[0].hello_num)+'px'}">
        <div
          :class="['avatar_bg',item.hello_num>=0&&item.hello_num<=3?'bachuji':'',item.hello_num>3&&item.hello_num<=10?'zhongji':'',item.hello_num>10&&item.hello_num<=30?'gaoji':'',item.hello_num>30?'teji':'']">
          <img class="avtor" :src="item.avatar" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        myEcharts: null,
        topfivedata: []
      }
    },
    watch: {
      'topfive'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.myEcharts.clear();
            this.iniTopfive(newValue);
          }
        }
      },
    },
    props: {
      'topfive': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      // console.log(this.topfive)
      this.topfivedata = this.topfive;
      this.iniTopfive(this.topfivedata);
      var ftop = setInterval(() => {
        this.myEcharts.clear();
        this.iniTopfive(this.topfivedata);
      }, 10000)
    },
    methods: {
      iniTopfive(data) {
        let xdata = [];
        // let ydata = [];
        data.forEach((item, index) => {
          xdata.push({
            value: item.hello_num,
            name: item.real_name,
          })
          // ydata.push({
          //   value: 90 * (item.hello_num / 90) + 10,
          //   symbol: 'image://' + item.avatar,
          //   symbolSize: [28, 28],
          // })
        });
        // this.main(item.avatar, function (res) {
        //   return res
        // })
        const options = {
          colors: ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'],
          grid: {
            top: 60,
            bottom: 30,
            left: 50,
            right: 120,
          },
          xAxis: {
            type: 'category',
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              // color(params, index) {
              //   const colorList = ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'];
              //   return colorList[index];
              // },

              color: '#fff',
              fontSize: 10,
              margin: 20,
            },
            data: ['第1名', '第2名', '第3名', '第4名', '第5名'],
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#A4A4A4',
              fontSize: 10,
            },
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
          },
          series: [{
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              padding: 5,
              color: '#fff',
              fontSize: 9,
              formatter(data) {
                // console.log(data)
                return data.name;
              },
            },
            itemStyle: {
              color(params) {
                const colorList = ['#BC15EC', '#7F16E7', '#5715EB', '#2B41F4', '#1787EB'];
                return colorList[params.dataIndex];
              },
            },
            barWidth: 22,
            data: xdata,
            //   [{value: 80, name: '刘学'}, {value: 70, name: '杨辉'}, {value: 67, name: '孙海岩'}, {
            //   value: 20,
            //   name: '孙海岩',
            // }, {value: 10, name: '孙海岩'}]
          }],
        };
        this.myEcharts.setOption(options);
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .child-age {
    display: flex;
    flex-flow: column nowrap;
    /*width: 1080px;*/
    /*height: 452px;*/
    /*width: 367px;*/
    height: 240px;
    width: 100%;
    position: relative;

    &_top {
      padding-top: 18px;
      padding-bottom: 20px;
      padding-left: 30px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }

    .avatar_box {
      position: absolute;
      left: 64px;
      bottom: 0;
      width: 100%;
      display: flex;
      height: 70%;

      .avataritem {
        margin-right: 31.5px;

        .avatar_bg {
          background-repeat: no-repeat;
          background-size: cover;
          width: 29px;
          height: 29px;
          position: relative;

          img {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            left: 0;
            right: 0;
            top: 5px;
            margin: 0 auto;
          }
        }

        .bachuji {
          background-image: url("../assets/chuji.png");
        }

        .zhongji {
          background-image: url("../assets/zhongji.png");
        }

        .gaoji {
          background-image: url("../assets/gaoji.png");
        }

        .teji {
          background-image: url("../assets/teji.png");
        }

      }

    }
  }
</style>
