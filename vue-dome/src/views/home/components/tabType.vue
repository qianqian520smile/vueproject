<template>
    
      <div class="center">
        <div class="span"></div>
        <ul class="left">
          <li :class="{color:val.type===type}"

           v-for="(val,i) in navdata" 
           :key="i"
           @click="$emit('change',val.type)">{{val.title}}</li>
          <!-- <li>休假</li> -->
        </ul>
        <div class="right">
          <span class="iconfont icon-gengduo-2"></span>
          <span class="iconfont icon-shouqi-01"></span>
        </div>
      </div>
</template>
<script>
export default {
  props:{
     type:String
  },
    data(){
      return{
        navdata:[
          {
            title:"加班",
            type:"overtime"
          }, {
            title:"休假",
            type:"vacation"
          }
        ]
      }
    },
    // methods:{
    //   change(type){
    // //  console.log(type)
    // this.$emit('change',type);
    //   }
    // }
}
</script>

<style lang="scss" scoped>
   
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";

 .center {
    width: 100%;
    height: pxTorem(70px);
    background: #fff;
    @include flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 pxTorem(10px);
    box-sizing: border-box;
  }
  .span {
    width: pxTorem(90px);
  }
  .left {
    display: flex;
    width: pxTorem(140px);
    justify-content: space-around;
    align-items: center;
    height: pxTorem(28px);
    flex: 1;
    margin-right: pxTorem(30px);
    border: 1px solid #333;
    border-radius: pxTorem(15px);
    overflow: hidden;
  }
  .color {
    color: #fff;
    background: rgb(9, 98, 65);
  }
  .left li {
    width: 50%;
    text-align: center;
    overflow: hidden;
    height: 100%;
    line-height: pxTorem(28px);
    letter-spacing: pxTorem(2px);
  }
  .right span {
    font-size: pxTorem(16px);
  }
  .right span:nth-child(1) {
    margin-right: pxTorem(10px);
  }
</style>
