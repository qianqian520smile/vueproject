<template>
    <div class="wrap">
        <el-header  :title="type === 'overtimr' ? '办公室加班申请' : '办公室调休申请'"  > </el-header>
        <div class="top_t">
      <div class="left">
        <img class="img" :src="userinfo.avatar" alt>
      </div>
      <div class="right">
        <ul>
          <li class="user">
            <div>
              <span>申请人姓名：</span>
              <span>{{userinfo.nickname}}</span>
            </div>
            <span @click="personal(userinfo)" class="iconfont you">&#xe630;</span>
          </li>
          <li>
            <span>直接主管：</span>
            <span>秦毅超</span>
          </li>
          <li>
            <span>申请单号：</span>
            <span>{{userinfo.applicationNumber}}</span>
          </li>
          <li>
            <span>发起时间：</span>
            <span>{{userinfo.updated_at}}</span>
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
            <span>
                <el-date-picker v-model="date"></el-date-picker>
            </span>
          </li>
          <li>
            <span>{{titetxt}}类型</span>
            <span>
               <select id="select" v-model="usertype">
                  <option value="-1">默认</option>
                  <option v-for="val in this[type+'Type']" 
                    :key="val.id"
                   :value="val.id">{{val.title}}</option>
               </select>
            </span>
          </li>
          <li>
            <span>{{titetxt}}起始时间</span>
            <span>
              <el-time-picker 
               v-model="startime"
               :selectableRange="[
               '21:00:00 - 24:00:00',
               '07:00:00 - 09:00:00'
               ]"
              ></el-time-picker>
            </span>
          </li>
          <li>
            <span>{{titetxt}}截止时间</span>
            <span>
              <el-time-picker 
               v-model="endtime"
               @change="endtimeSelected"
               :selectableRange="[
               '21:00:00 - 24:00:00',
               '07:00:00 - 09:00:00'
               ]"
              ></el-time-picker>
            </span>
          </li>
          <li>
            <span>共计时数</span>
            <span>
              {{num}}
            </span>
          </li>
        </ul>
      </div>
      <div class="qustion">
        <h2>{{titetxt}}事由</h2>
        <textarea v-model="describe" name placeholder="最多可以输入200个字"></textarea>
      </div>
      <div class="file">
        <!-- <span class="s"></span> -->
        <h2 id="fujian">
            <img src="../../static/images/yellow.png" alt="" id="img">
            <!-- 上传附件 -->
           <input type="file" @change="submitfile">
        </h2>
       <div>
         <ul>
           <li v-for="(val,i) in images" :key="i">
             <span @click="images.splice(i,1)">x</span>
             <img :src=" 'http://localhost:3000'+val " alt="">
           </li>
         </ul>
       </div>
      </div>
         <div class="bottom" id="bottom">
            <ul>
                <li @click="$router.back()" class="li li_r">取消</li>
                <li class="li li_r" @click="submitClick">提交</li>
            </ul>
       </div>
    </div>
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
import api from '@/api';

export default {
    props:{
        type:String
    },
    data(){
      return{
          date:'',
          startime:'',
          endtime:'',
          num:'',
          images:[],
          describe:'',
          usertype:'',
          guide:{
            type:['png','jpg','svg']
          },
          overtimeType:[
            {
              id:1,
              title:'双休日'
            },
              {
              id:2,
              title:'节假日'
            },  {
              id:3,
              title:'工作日'
            }
          ],
           vacationType:[
            {
              id:1,
              title:'年假'
            },
              {
              id:2,
              title:'调休'
            }
          ]
      }
    },

    computed:{
        ... mapState('user',['userinfo']),
        // userinfo(){
        //     return this.$store.state.user.userinfo
        // }
        titetxt(){
            return this.type === 'overtime' ? '加班':'休假'
        }
    },
    created(){
        // this.$store.dispatch('user/getUserInfo')
        this.getUserInfo();
    },
    methods:{
        ...mapActions('user',['getUserInfo']),
        endtimeSelected(){
          // console.log(this.endtime,this.startime)
          let startime=new Date(this.startime);
          let endtime=new Date(this.endtime);
          let num= endtime-startime;
          if(num<0){
            alert('时间选择错误');
            return;
          }
          this.num=num;
        },
        submitfile(e){
          console.log(e.target.files[0])     //图片对象
          let userfile=e.target.files[0];
          let {type,size} = userfile;  //kb 1024
          //只能上传3mb
          let filetype=type.match(/\/(\w+)$/i)[1];
          let error='';
          if(!this.guide.type.includes(filetype)){
            error=`请上传${this.guide.type.join()}类型的文件`
          }
          if(this.guide.size*1024*1024 < size){
              error= `请上传小于${this.guide.size}MB大小的文件`
          }
          if(error){
            alert(error);
            return;
          }
          // console.log(userfile)//向服务器提交文件
          const fromdata=new FormData();
          //是window提供的一个属性   功能是：想ajax对象提交键值对格式的参数的，可以提交二进制流
          fromdata.append('file',userfile);
          api.sumitFile(fromdata).then(res=>{
            // console.log(res)
            this.images.push(res.url);
          })
        },
        submitClick(){
          let option ={
            annex:this.images,
            describe:this.describe,
            endtime:this.endtime,
            startime:this.startime,
            type:this.usertype
          };
          // console.log(option)
          api['submit'+this.type](option).then(res=>{
            // console.log(res)
            let {msg} =res;
            if(msg==='提交成功'){
              this.$router.back();
            }else{
              alert(msg)
            }
          })
        }
       
    }
}
</script>
<style lang="scss" scoped>
 
@import "@/static/scss/detail.scss";
#bottom{
    height: pxTorem(20px);
    font-size: pxTorem(20px);
}
#select{
  color: red;
}
#img{
  // width:pxTorem(100px);
  // height:pxTorem(70px);
  font-size: pxTorem(16px);
  
     width:pxTorem(50px);
  height:pxTorem(30px);
  margin-right: pxTorem(5px);
  
}
#fujian{
  display: flex;
  // justify-content: space-around;
   width:pxTorem(50px);
  height:pxTorem(30px);
}
</style>
