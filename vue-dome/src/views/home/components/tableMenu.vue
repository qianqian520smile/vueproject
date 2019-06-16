<template>
   <div class="top">
        <dl :class="{
          bg:value.index === index
          }"
          @click="change(value.index)"
          v-for="value in menudata"
          :key="value.index"
          >
          <dt>
            <span :class="'iconfont '+value.icon"></span>
          </dt>
          <dd>{{value.title}}</dd>
        </dl>
       
      </div>
</template>
<script>
export default {
  data(){
    return{
      index:0,
      menudata:[
        {
          title:"待处理",
          icon:'iconfont icon-naozhong',
          index:0
        }, {
          title:"已发起",
          icon:'icon-07',
          index:1
        }, {
          title:"已处理",
          icon:'icon-yibangding',
          index:2
        }
      ]
    }
  },
  methods:{
    change(index){
      this.index=index;
      this.$emit('change',index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
   .top {
    //   @include flex;
    display: flex;
    width: 100%;
    height: pxTorem(100px);
    // background: pink;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    dl > dd {
      font-size: pxTorem(14px);
      margin-top: pxTorem(6px);
    }
    dt > .iconfont {
      font-size: pxTorem(22px);
    }
    .bg{
      color: rgb(9, 98, 65);
    }
  }
</style>
