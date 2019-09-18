<template>
  <div class="popular-production">
    <div class="popular-production_top">
      <span>热门展项排行榜</span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl">
      <ul>
        <li
          v-for="(item, index) in production"
          :key="index"
          :class="{first: index === 0, second: index === 1, thrid: index === 2, fourth: index === 3, fifth: index === 4}"
        >
          <div></div>
          <div>{{ item.name }}</div>
          <div>{{ `No.${index + 1}` }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        production: [
          {name: '像素世界', see_num: 42},
          {name: '甘肃之光', see_num: 20},
          {name: '宇宙探索 飞天探梦', see_num: 19},
          {name: '天籁之声 数学之魅 运动之律', see_num: 17},
          {name: '泡芙堡', see_num: 16},
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .popular-production {
    display: flex;
    flex-flow: column nowrap;
    /*  width: 960 + 120px;*/
    width: 100%;
    height: 268px;

    &_top {
      /*padding-top: 60px;*/
      /*padding-left: 200px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
      padding: 18px 0;
    }

    .echarts-con {
      /*padding: 40px 0;*/
      width: 100%;
      height: 100%;

      > ul {
        /*padding-left: 200px;*/
        /*padding-right: 108px;*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 235px;
        padding: 0 0 30px 0;

        li {
          height: 100%;
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-end;
          align-items: center;

          &.first {
            order: 2;

            > div {
              &:first-of-type {
                border-bottom-width: 126px;
                border-bottom-color: #5715eb;
              }

              &:last-of-type {
                color: #ff2045;
              }
            }
          }

          &.second {
            order: 1;

            > div {
              &:first-of-type {
                border-bottom-width: 37px;
                border-bottom-color: #7f16e7;
              }

              &:last-of-type {
                color: #fa5c25;
              }
            }
          }

          &.thrid {
            order: 3;

            > div {
              &:first-of-type {
                border-bottom-width: 28px;
                border-bottom-color: #132aea;
              }

              &:last-of-type {
                color: #ffcc00;
              }
            }
          }

          &.fourth {
            order: 0;

            > div {
              &:first-of-type {
                border-bottom-width: 42px;
                border-bottom-color: #bc15ec;
              }

              &:last-of-type {
                color: #fff;
              }
            }
          }

          &.fifth {
            order: 4;

            > div {
              &:first-of-type {
                border-bottom-width: 25px;
                border-bottom-color: #1787eb;
              }

              &:last-of-type {
                color: #fff;
              }
            }
          }

          > div {
            &:first-of-type {
              width: 38px;
              border-left: 19px solid transparent;
              border-right: 19px solid transparent;
              border-bottom: 41px solid #bc15ec;
              transition: all 0.4s linear;
            }

            &:nth-child(2) {
              width: 74px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 11px;
              color: #fff;
              font-weight: bold;
              margin: 10px 0;
            }

            &:last-of-type {
              font-size: 11px;
              color: #fff;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
