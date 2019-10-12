<template>
  <div class="popular-exs">
    <div class="popular-exs_top ">
      <span>热门展区排行榜</span>
    </div>

    <!-- echart -->
    <div class="echarts-con " ref="echartsEl">
      <ul>
        <li
          v-for="(item, index) in exhibition_list"
          :key="index"
          :class="[ index === 0?'first':'',index === 1? 'second':'' ,index === 2? 'thrid':'' ,]"
        >
          <!--          'animated slideInRight delay-'+index+'s'-->
          <span>{{ item.exhibition_name }}</span>
          <div>
            <span :style="`width: ${item.total / exhibition_list[0].total * 100}%`" class="animated slideInLeft"></span>
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
        // exhibit: [
        //   {exhibit_name: '地下挖掘', look_num: 113},
        //   {exhibit_name: '多彩的形状', look_num: 50},
        //   {exhibit_name: '多彩的形状', look_num: 50},
        //   {exhibit_name: '地下生活的哺乳动物', look_num: 41},
        //   {exhibit_name: '仰望星空', look_num: 41},
        //   {exhibit_name: '人体八大系统', look_num: 39},
        //   {exhibit_name: '未来交通生活畅想', look_num: 32},
        //   {exhibit_name: '地下采矿', look_num: 31},
        //   {exhibit_name: '简仪', look_num: 28},
        //   {exhibit_name: '地下生活的虫子', look_num: 25},
        // ],
        exhibition_list: []
      };
    },
    watch: {
      'exhibition'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.exhibition_list = newValue;
          }
        }
        for (var j in this.exhibition_list) {
          this.exhibition_list[j].total = this.exhibition_list[j].total > 500 ? this.exhibition_list[j].total : this.exhibition_list[0].total * ((10 - j) / 10) - 20
        }
      },
    },
    props: {
      'exhibition': {
        type: Array,
        default: []
      },
    },
    created() {
      // this.initexs();
      this.exhibition_list = this.exhibition;
      for (var i in this.exhibition_list) {
        this.exhibition_list[i].total = this.exhibition_list[i].total > 500 ? this.exhibition_list[i].total : this.exhibition_list[0].total * ((10 - i) / 10) - 20
      }
    },

  };
</script>

<style lang="less" scoped>
  /** @format */
  .popular-exs {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    /*width: 960 + 120px;*/
    height: 463px;
    width: 79%;
    // background-color: #0e0e20;

    &_top {
      /*padding-top: 30px;*/
      /*padding-left: 200px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
      padding: 29px 0;

    }

    .echarts-con {
      width: 100%;
      height: 100%;
      /*padding: 45px 0;*/

      > ul {
        /*padding-left: 200px;*/
        /*padding-right: 108px;*/
        padding: 0 38px 0 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        /*height: 100%;*/
        height: 330px;

        li {
          // margin-bottom: 45px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 36px;
          // &:last-child {
          //   margin: 0;
          // }
          &.first {
            > span {
              &:first-of-type {
                color: #E72B45;
              }

              &:last-of-type {
                color: #fff;
                background-color: #EA5A2A;
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
              width: 86px;
              line-height: 1.5;
              font-size: 12px;
              font-weight: bold;
              color: #6272b6;
              text-align: left;
            }

            &:last-of-type {
              width: 38px;
              height: 16px;
              font-size: 11px;
              line-height: 14px;
              color: #2a9faa;
              background-color: #203544;
              border-radius: 3px;
            }
          }

          > div {
            /*width: 200px;*/
            height: 14px;
            flex: 1;
            margin: 0 8px;
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
            }
          }
        }
      }
    }
  }
</style>
