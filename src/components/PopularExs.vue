<template>
  <div class="popular-exs">
    <div class="popular-exs_top">
      <span>热门展区排行榜</span>
    </div>

    <!-- echart -->
    <div class="echarts-con" ref="echartsEl">
      <ul>
        <li
          v-for="(item, index) in exhibit"
          :key="index"
          :class="{first: index === 0, second: index === 1, thrid: index === 2}"
        >
          <span>{{ item.exhibit_name }}</span>
          <div>
            <span :style="`width: ${item.look_num / 113 * 100}%`"></span>
          </div>
          <span>{{ `No.${index + 1}` }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exhibit: [
        { exhibit_name: '地下挖掘', look_num: 113 },
        { exhibit_name: '多彩的形状', look_num: 50 },
        { exhibit_name: '多彩的形状', look_num: 50 },
        { exhibit_name: '地下生活的哺乳动物', look_num: 41 },
        { exhibit_name: '仰望星空', look_num: 41 },
        { exhibit_name: '人体八大系统', look_num: 39 },
        { exhibit_name: '未来交通生活畅想', look_num: 32 },
        { exhibit_name: '地下采矿', look_num: 31 },
        { exhibit_name: '简仪', look_num: 28 },
        { exhibit_name: '地下生活的虫子', look_num: 25 },
      ],

      count: 113,
    };
  },
};
</script>

<style lang="less" scoped>
/** @format */
.popular-exs {
  margin-bottom: 22px;
  display: flex;
  flex-flow: column nowrap;
  width: 960 + 120px;
  height: 864px;
  // background-color: #0e0e20;

  &_top {
    padding-top: 60px;
    padding-left: 200px;
    width: 100%;
    text-align: left;
    font-size: 30px;
    font-weight: 800;
    color: #fff;
  }
  .echarts-con {
    width: 100%;
    height: 100%;
    padding: 45px 0;
    > ul {
      padding-left: 200px;
      padding-right: 108px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      height: 100%;
      li {
        // margin-bottom: 45px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        // &:last-child {
        //   margin: 0;
        // }
        &.first {
          > span {
            &:first-of-type {
              color: #ff2045;
            }

            &:last-of-type {
              color: #fff;
              background-color: #ff2045;
            }
          }

          > div {
            span {
              background: #ff2045;
            }
          }
        }

        &.second {
          > span {
            &:first-of-type {
              color: #eb4a12;
            }

            &:last-of-type {
              color: #fff;
              background-color: #eb4a12;
            }
          }

          > div {
            span {
              background: #eb4a12;
            }
          }
        }
        &.thrid {
          > span {
            &:first-of-type {
              color: #ffcc00;
            }

            &:last-of-type {
              color: #fff;
              background-color: #ffcc00;
            }
          }

          > div {
            span {
              background: #ffcc00;
            }
          }
        }
        > span {
          &:first-of-type {
            width: 9em;
            line-height: 1.5;
            font-size: 20px;
            font-weight: bold;
            color: #6272b6;
            text-align: left;
          }
          &:last-of-type {
            width: 75px;
            height: 36px;
            line-height: 36px;
            font-size: 24px;
            color: #2a9faa;
            background-color: #203544;
          }
        }

        > div {
          width: 400px;
          height: 18px;
          overflow: hidden;
          border-radius: 8px;
          display: flex;
          background: rgba(32, 53, 68, 1);
          > span {
            width: 0;
            height: 100%;
            border-radius: 8px;
            background: linear-gradient(
              90deg,
              rgba(31, 70, 240, 0.6),
              rgba(51, 255, 238, 0.6)
            );
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
