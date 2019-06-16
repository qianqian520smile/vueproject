<template>
    <header class="head">
      <b v-if="back" @click="$router.back()">
         <span class="iconfont icon-arrow-left"></span>
      </b>
      <b class="blod">{{titletext}}</b>
      <!-- <div class="right">
        <span class="iconfont icon-riqixuanze left"></span>
        <span class="iconfont icon-fangdajing"></span>
      </div> -->
      <slot></slot>
    </header>
</template>
<script>
export default {
    props:{
      back:{
        default:true,
        type:Boolean
      },
      title:{
        default:'',
        type:String
      }
    },
    computed:{
      titletext(){
          return this.title ? this.title : this.$route.meta.title
      }
    }
}
</script>

<style lang="scss" scoped>
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
  header {
  background: #fff;
  height: pxTorem(50px);
  width: 100%;
  @include box_flex;
  @include align;
  @include justify(space-between);
  padding: 0 pxTorem(20px);
  @include sizing;
  font-size: pxTorem(20px);
  .blod {
    font-weight: bold;
    flex: 1;
    text-align: center;
    margin-left: pxTorem(20px);
  }
  .left {
    margin-right: pxTorem(10px);
  }
}
</style>

