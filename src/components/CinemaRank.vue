<template>
  <div class=" week-visit">
    <div class="week-visit_top">
      <p>4D影院热门影片排行榜</p>
    </div>
    <div class="mlist">
      <div class="mitem" v-for="(item,index) in list">
        <div class="mname">《{{item.movie_name}}》</div>
        <div class="imgbox">
          <div class="imgitem"><img src="../assets/icon4.png" alt=""  v-for="i in item.unit"></div>
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
    props: {
      'mlist': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const vm = this;
      if (this.mlist.length > 3) {
        this.mlist = this.mlist.splice(0, 3)
      }
      for (var i in this.mlist) {
        var unit = Math.floor(18 * (this.mlist[i].num / this.mlist[0].num));
        this.list.push({
          movie_name: this.mlist[i].movie_name,
          unit: unit,
          num: this.mlist[i].num
        })
      }
    },

  };
</script>

<style lang="less" scoped>
  /** @format */
  .week-visit {
    display: flex;
    flex-flow: column nowrap;
    height: 290px;
    width: 343px;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      /*padding-left: 60px;*/
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
      .mitem {
        margin-bottom: 10px;

        .mname {
          font-size: 11px;
          text-align: left;
          color: #fff;
          margin-bottom: 5px;
        }

        .imgbox {
          display: flex;
          align-items: center;

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
