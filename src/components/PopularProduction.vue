<template>
  <div class="popular-production">
    <div class="popular-production_top">
      <span>热门展项排行榜</span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl">
      <ul>
        <li
          v-for="(item, index) in exhibit"
          :key="index"
          :class="{first: index === 0, second: index === 1, thrid: index === 2, fourth: index === 3, fifth: index === 4}"
        >
          <div :style="{borderBottomWidth:160*item.prenncent+'px'}"></div>
          <div><span :class="{'span':item.exhibit_name.length>5}">{{item.exhibit_name}}</span></div>
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
        exhibit_list: []
      };
    },
    watch: {
      'exhibit'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.exhibit_list = newValue;
          }
        }
        for (var j in  this.exhibit_list) {
          this.exhibit_list[j].prenncent = parseInt(this.exhibit_list[j].like_num) / parseInt(this.exhibit_list[0].like_num)
        }
      },
    },
    props: {
      'exhibit': {
        type: Array,
        default: []
      }
    },
    created() {
      // console.log(this.exhibit)
      this.exhibit_list = this.exhibit;
      for (var i in  this.exhibit_list) {
        this.exhibit_list[i].prenncent = parseInt(this.exhibit_list[i].like_num) / parseInt(this.exhibit_list[0].like_num)
      }
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .popular-production {
    display: flex;
    flex-flow: column nowrap;
    /*  width: 960 + 120px;*/
    width: 367px;
    height: 340px;

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
        padding: 0 34px 20px 0;

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
              width: 70px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              font-size: 12px;
              color: #fff;
              font-weight: bold;
              margin: 10px 0;
              position: relative;
              height: 20px;

              span {
                &.span {
                  position: absolute;
                  animation: marquee 5s linear infinite;
                  font-size: 12px;
                  color: #fff;
                }
              }
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

  @keyframes marquee {
    from {
      left: 0
    }

    to {
      left: -100%
    }
  }
</style>
