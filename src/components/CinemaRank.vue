<template>
  <div class=" week-visit">
    <div class="week-visit_top">
      <p>热门影片累计观看人次</p>
    </div>
    <div class="cont">
      <div class="info" v-for="(item, index) in showMovies" :key="index">
        <div class="c1">《{{item.name}}》</div>
        <div class="c2">
          <div class="c2-icon" :style="{ 'width': compMoviesListRangePerc(item.value)}"></div>
        </div>
        <div :class="['c3','color'+index%3 ]">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CinemaRank',
    data() {
      return {
        showMovies: [
          {
            name: '鲁滨逊漂流记',
            value: '16866',
          },
          {
            name: '七大奇迹',
            value: '16364',
          },
          {
            name: '磁场',
            value: '13141',
          },
        ],
        moviesList: [
          {
            name: '鲁滨逊漂流记',
            value: '16866',
          },
          {
            name: '七大奇迹',
            value: '16364',
          },
          {
            name: '磁场',
            value: '13141',
          },
          {
            name: '冰雪世界',
            value: '12817',
          },
          {
            name: '地球栖息地',
            value: '11492',
          },
          {
            name: '探寻外太空生命',
            value: '11286',
          },
          {
            name: '从地球到宇宙',
            value: '10338',
          },
          {
            name: '与恐龙同行',
            value: '8638',
          },
          {
            name: '星球动力',
            value: '8340',
          },
          {
            name: '大闹天宫',
            value: '6617',
          },
          {
            name: '城堡之谜',
            value: '5766',
          },
          {
            name: '暗物质',
            value: '5389',
          },
          {
            name: '羽龙传奇',
            value: '5197',
          },
          {
            name: '细菌大作战',
            value: '5062',
          },
          {
            name: '勇闯天涯',
            value: '3918',
          },
          {
            name: '重返二叠纪',
            value: '3472',
          },
          {
            name: '国家公园探险',
            value: '3194',
          },
          {
            name: '海怪',
            value: '2460',
          },
          {
            name: '太空探测器',
            value: '1983',
          },
          {
            name: '白垩纪公园',
            value: '1666',
          },
          {
            name: '钱江寻宝记',
            value: '1453',
          },
          {
            name: '神秘的宇宙',
            value: '950',
          },
          {
            name: '亲历北极光',
            value: '904',
          },
          {
            name: '新地平线',
            value: '883',
          },
          {
            name: '我的爸爸是森林之王',
            value: '880',
          },
          {
            name: '剑齿王朝',
            value: '774',
          },
          {
            name: '钱学森',
            value: '376',
          },
        ], // 电影列表
        maxfilmvalue: 0,
      };
    },
    mounted() {
      const vm = this;
      vm.getCurrentData();
      // 循环电影列表
      const n = 3;
      let start = 0;
      let end = start + n;
      // setInterval(() => {
      //   if (vm.moviesList.length > 0) {
      //     vm.showMovies = vm.moviesList.slice(start, end);
      //     start += n;
      //     end += n;
      //   }
      //   if (start >= vm.moviesList.length) {
      //     start = 0;
      //     end = start + n;
      //   }
      // }, 5000);
    },
    methods: {
      // 获取统计数据
      getCurrentData() {
        const vm = this;
        vm.renderMoviesList(vm.moviesList);
        vm.maxfilmvalue = parseInt(vm.moviesList[0].value, 10);
        for (const i in vm.moviesList) {
          const cur = parseInt(vm.moviesList[i].value, 10);
          cur > vm.maxfilmvalue ? vm.maxfilmvalue = cur : null;
        }
        console.log(vm.maxfilmvalue);
      },
      renderMoviesList(data) {
        const vm = this;
        vm.hallrangelist = data;
        vm.baseValue = 0;
        vm.hallrangelist.forEach((a, i) => {
          if (vm.baseValue < a.value) {
            vm.baseValue = a.value;
          }
        });
      },
      // 热门电影排行-计算百分比
      compMoviesListRangePerc(val) {
        const vm = this;
        // vm.baseValue <= 0 ? vm.baseValue = 1 : '';
        const perc = `${Math.round((val / vm.maxfilmvalue) * 100)}%`;
        console.log(perc);
        return perc;
      },
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .week-visit {
    display: flex;
    flex-flow: column nowrap;
   /* width: 960 + 120px;
    height: 452px;*/
    // background-color: #0e0e20;
    width: 343px;
    /*height: 280px;*/
    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      padding-left: 60px;
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

    /*.st3{  height: 24rem;  position: absolute; right: 0;}*/

    .cont {
    }

    .info {
      width: 100%;
      position: relative;
      margin-bottom: 30px;
      overflow: hidden;
    }

    .info .c1 {
      max-width: 229px;
      font-size: 11px;
      color: #fff;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .info .c2 {
      position: absolute;
      width: 220px;
      margin-right: 30px;
      left: 0;
      top: 35px;
      height: 40px;
    }

    .info .c2 .c2-icon {
      position: relative;
      height: 40px;
      max-width: 95%;
      overflow: hidden;
      background-image: url(../assets/icon4.png);
      background-size: 40px auto;
      background-position: left center;
      background-repeat: repeat-x;
    }

    .info .c3 {
      float: right;
      font-size: 13px;
      padding-right: 71px;

      &.color0 {
        color: #FF2045;
      }

      &.color1 {
        color: #F35C28;
      }

      &.color2 {
        color: #FFCC00;
      }
    }


  }
</style>
