<template>
  <div id="app">
    <keep-alive include="home">
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
// import request from './utils/request';
// import axios from 'axios';
export default {
  name: 'App',
  // created(){
  //   request.get('/api/user/info').catch(error=>{
  //     console.log('catch',error)
  //   })
  //   window.app=this;
    // axios.get('/api/user/info').then(res=>{
    //   console.log(res);
    // }).catch(res=>{
    //   console.log(res.response.status)
    // })
  // }
}
</script>
<style lang="scss" scoped>
  @import './static/scss/_minix.scss';
  @import './static/scss/common.scss';
  *{
      margin: 0;
      padding: 0;
      list-style: none;
  }
  html,body,#app{
      width: 100%;
      height: 100%;
      background: #F9F9F9;
  }
</style>

