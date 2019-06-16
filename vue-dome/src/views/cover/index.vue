<template>
  <div class="wrap">
    发现84561啊但是毕竟都是北方交大V觉得女减肥你打开V的看都会崩溃的空间达芙妮封口费到付款V愤怒的
    {{userinfo}}
  </div>
</template>
<script>
import request from "@/utils/request";
import { mapState,mapActions } from "vuex";
export default {
    // beforeRouteEnter(to,from,next){
    //    request.get('/api/user/info').then(res=>{
    //     next();
    //   })
    // },
    // beforeCreate(){
    //     console.log('beforeCreate')
    // },
  computed:{
    ...mapState('user',['userinfo'])
  },
  created() {
      this.getUserInfo();
    // this.$store.dispatch("user/getUserInfo")
  },
  methods:{
      ...mapActions('user',['getUserInfo'])
  }
};
</script>
