<template>
  <div class=" week-visit">
    <div class="week-visit_top">
      <p>4D影院热门影片排行榜</p>
    </div>
    <div class="mlist">
      <div class="mitem" v-for="(item,index) in list">
        <div class="mname">《{{item.movie_name}}》</div>
        <div class="imgbox">
          <div class="imgitem"><img src="../assets/icon4.png" alt="" v-for="i in item.unit"></div>
          <span :class="'num'+index">{{item.num}}</span>
        </div>
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
        moviesList: [], // 电影列表
        maxfilmvalue: 0,
        list: []
      };
    },
    watch: {
      'mlist'(newValue, oldValue) {
        if (newValue.length) {
          for (let i = 0; i < newValue.length; i++) {
            if (oldValue[i] != newValue[i]) {
              this.initCrank(newValue)
            }
          }
        }
      },
    },
    props: {
      'mlist': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const vm = this;
      vm.initCrank(this.mlist);
      setInterval(() => {
        vm.initCrank(this.mlist);
      }, 10000)
    },
    methods: {
      initCrank(mlist) {
        this.list = [];
        if (mlist.length > 3) {
          mlist = mlist.splice(0, 3)
        }
        for (var i in mlist) {
          var unit = Math.floor(18 * (mlist[i].num / mlist[0].num));
          this.list.push({
            movie_name: mlist[i].movie_name,
            unit: unit,
            num: mlist[i].num
          })
        }
      }
    }

  };
</script>

<style lang="less" scoped>
  /** @format */
  .week-visit {
    display: flex;
    flex-flow: column nowrap;
    height: 218px;
    width: 343px;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      /*padding-left: 30px;*/
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

    .mlist {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 100%;

      .mitem {
        /*margin-bottom: 10px;*/

        .mname {
          font-size: 11px;
          text-align: left;
          color: #fff;
          margin-bottom: 10px;
        }

        .imgbox {
          display: flex;
          align-items: center;
          font-weight: bold;

          .imgitem {
            width: 300px;
            text-align: left;

            img {
              display: inline-block;
              margin: 0;
              width: 15px;
              text-align: left;
            }
          }

          .num0 {
            color: #E72B45;
          }

          .num1 {
            color: #E65A2A;
          }

          .num2 {
            color: #F5C61E;
          }
        }
      }
    }

  }
</style>
