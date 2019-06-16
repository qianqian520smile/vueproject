<template>
   <div class="wrap">
     <el-header>
       <div class="right">
        <span class="iconfont icon-riqixuanze left"></span>
        <span class="iconfont icon-fangdajing"></span>
      </div> 
     </el-header>
    <div class="box">
      <TableMenu @change="menuchange"/>
      <TableStyle :type="tableOption.type" @change="typeChange"/>
    </div>
    <section>
      <div v-for="item in list" :key="item.applicationNumber" class="list">
      <Todolist :list="item"/>
      </div>
      <div id="adds" @click="show=true">
        <span>+</span> 发起任务
      </div>
    </section>
    <PopUp :show="show" @close="show = false"/>
  </div>
</template>

<script>
import TableMenu from "./components/tableMenu";
import TableStyle from "./components/tabType";
import Todolist from "./components/todolist";
import PopUp from "@/components/popUp";
import Header from "@/components/header/head";
import request from '@/utils/request';
import { mapState,mapActions } from "vuex";
export default {
  name:'home',
  beforeRouteUpdate(to,from,next){
      request.get('/api/user/info').then(res=>{
        next();
      })
  },
  data(){
     return{
       list:[],
       tableOption:{
         status:0,
         type:'overtime',
         create_at:0,
         pageSize:10,
         page:1
       },
      //  Todolist:[]
      show:false
     }
  },
  components: {
    TableMenu,
    TableStyle,
    Todolist,
    PopUp,
    Header
  },
  created(){
    this.getTaskList();   //获取任务列表
    this.getUserInfo();
    window.home=this;
  },
  methods:{
    ...mapActions('user',['getUserInfo']),
    menuchange(index){
      console.log(index);
      this.tableOption.status=index;
      this.getTaskList();
    },
    getTaskList(){
      request.get('/api/task/list',{
        ...this.tableOption
      }).then(res=>{
        console.log(res.data);
        this.list=res.data
        // console.log(this.list)
      })
    },
    typeChange(type){
      console.log(type)
      this.tableOption.type=type;
      console.log(this.tableOption);
      this.getTaskList();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";

.wrap {
  width: 100%;
  height: 100%;
  @include box_flex;
  @include direction(column);
  background: #f9f9f9;
  // position: relative;
}

.list{
   @include box_flex;
  @include align;
  @include justify(space-between);
  padding: 0 pxTorem(5px);
  @include sizing;
}
section {
  // @include box_flex;
  @include flex;
  width: 100%;
  overflow-y: auto;
  @include direction(column);
  // background: lime;

  
  #adds {
    // width: 100%;
    // height:100%;
    position: fixed;
    bottom: pxTorem(30px);
    right: pxTorem(20px);
    background: rgb(9, 98, 65);
    // background: lime;
    color: red;
    font-size: pxTorem(18px);
    color: #fff;
    padding: pxTorem(10px) pxTorem(25px);
    border-radius: pxTorem(30px);
    > span {
      font-size: pxTorem(22px);
    }
  }
}
</style>