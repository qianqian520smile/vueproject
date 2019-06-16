<template>
  <div class="wrap">
    <el-header :title="title" class="top_color"></el-header>
    <div class="top_t">
      <div class="left">
        <img class="img" :src="obj.avatar" alt>
      </div>
      <div class="right">
        <ul>
          <li class="user">
            <div>
              <span>申请人姓名：</span>
              <span>{{obj.nickname}}</span>
            </div>
            <span @click="personal(obj)" class="iconfont you">&#xe630;</span>
          </li>
          <li>
            <span>直接主管：</span>
            <span>秦毅超</span>
          </li>
          <li>
            <span>申请单号：</span>
            <span>{{obj.applicationNumber}}</span>
          </li>
          <li>
            <span>发起时间：</span>
            <span>{{obj.updated_at}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="back">
      <div class="detail">
        <h2>申请信息</h2>
        <ul>
          <li>
            <span>{{titetxt}}日期</span>
            <span>{{new Date(this.obj.startTime).toLocaleDateString()}}</span>
          </li>
          <li>
            <span>{{titetxt}}类型</span>
            <span>{{showType}}</span>
          </li>
          <li>
            <span>{{titetxt}}起始时间</span>
            <span>{{startTime}}</span>
          </li>
          <li>
            <span>{{titetxt}}截止时间</span>
            <span>{{endTime}}</span>
          </li>
          <li>
            <span>共计时数</span>
            <span>{{reduceTime}}</span>
          </li>
        </ul>
      </div>
      <div class="qustion">
        <h2>{{titetxt}}事由</h2>
        <textarea name placeholder="最多可以输入200个字"></textarea>
      </div>
      <div class="file">
        <span class="s"></span>
        <h2>上传附件</h2>
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img :src="'http://localhost:3000'+item" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utils/request";
import router from "@/router/index";
import {showType,showTime,reduceTime} from '@/utils/componentTime'
export default {
  // return: {
  //   obj: {},
  //   list: []
  // },
  props: {
    type: String,
    id: String
  },
  data(){return{
       obj:{},
        list: []
    }
  },
  computed: {
    title() {
      return this.type === "overtimr" ? "办公室加班申请" : "办公室调休申请";
    },
    showType(){  //showType 访问器属性的get函数
      return showType(this.obj.type,this.obj.list_type)
    },
    startTime(){
      return showTime(this.obj.startTime)
    },
    endTime(){
      return showTime(this.obj.endTime)
    },
    reduceTime(){
        return reduceTime(this.obj.startTime,this.obj.endTime);
    },
    titetxt(){
      return this.type === 'overtime' ? '加班' : '休假'
    }
  },

  created() {
    this.getData();
    request.get('/api/apply/'+this.type,{
      applicationNumber:this.id
    }).then(res=>{
      this.obj=res.data;
      console.log(res)
    })
  },
  methods: {
    
    getData() {
      request.get(`/api/apply/${this.type}`, {
          applicationNumber: this.id
        }).then(res => {
          this.obj = res.data;
          this.list = res.data.annex;
        });
    },
    personal(obj) {
      router.push({
        name: "personal",
        params: {
          objs: obj
        }
      });
      this.$router.push({
        path: "/personal",
        query: {
          objs: obj
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>

@import "@/static/scss/detail.scss";

</style>

