<template>
      <div class="con" @click="$router.push({
        path:`/detail/${list.list_type}/${list.applicationNumber}`,
      
      })">
        <div class="top_t">
          <span>{{list.applicationNumber}}</span>
          <p>
            <span class="iconfont icon-xuanzhong-01 big"></span>
            <span>待审批</span>
          </p>
        </div>
        <div class="fen">
          <div class="kai">
            <p>申请人</p>
            <span>{{list.nickname}}</span>
          </div>
          <div class="kai">
            <p class="leixing" id="one">加班类型</p>
            <!-- <span>{{list.describes}}</span> -->
            <span>{{showType(list.type,list.list_type)}}</span>
          </div>
        </div>
        <div class="fens">
         
            <p class="date">加班日期</p>
            <span>{{new Date(list.startTime).toLocaleDateString()}}</span>
        
            <p class="leixings">加班时数</p>
            <!-- <span>{{list.type}}</span> -->
            <span>{{reducetime(list.startTime,list.endTime)}}</span>
        </div>
      </div>
</template>
<script>
import {showType} from '@/utils/componentTime'
export default {
   props:["list"],
   methods:{
      showType(type,title){
       return showType(type,title)
      },
         reducetime(start,end){
       let start_num=new Date(new Date(start).toGMTString())*1;
       let end_num=new Date(new Date(end).toGMTString())*1;
       let num =(end_num - start_num)/1000;
       let day=(num/60/60/24).toFixed(1);
       return day;
   }

   },
 
}
</script>

<style lang="scss" scoped>
    
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";
.fens{
  display: flex;
  font-size: pxTorem(14px);
  justify-content: space-around;
}
.con {
    width: 100%;
    height: pxTorem(120px);
    background: #fff;
    line-height: pxTorem(40px);
    margin-top: pxTorem(20px);
    // @include box_flex;
    //   @include align;
    //    @include direction(column);

    .top_t {
      @include box_flex;
      @include justify(space-between);
      padding: 0 pxTorem(20px);
      @include sizing;
      font-size: pxTorem(16px);
      color: #666;
      letter-spacing: pxTorem(2px);
      .big {
        font-size: pxTorem(20px);
        color: rgb(251, 210, 68);
      }
    }
    .fen {
      width: 100%;
      @include box_flex;
      @include justify(space-between);
      padding: 0 pxTorem(20px);
      @include sizing;
      font-size: pxTorem(15px);
      letter-spacing: pxTorem(1px);
    }
    .kai {
      width: 50%;
      @include box_flex;
      span {
        margin-left: pxTorem(2px);
      }
      p {
        color: #666;
      }
    }
    #one{
      margin-left: pxTorem(-18px);
    }
    .date{
      color: #666;
    }
   
    .leixings {
      color: #666;
    }
  }
</style>
