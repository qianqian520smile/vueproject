<template>
  <div class="wrap">
    <h1>欢迎来到星享俱乐部</h1>
    <section class="login">
      <p>
        <input type="text" placeholder="手机号码" v-model="phone_value">
      </p>
      <p>
        <input type="text" placeholder="密码" v-model="pwd_value">
      </p>
      <button class="loginbtn" @click="handlLogin">登入</button>
    </section>
  </div>
</template>
<script>
import request from '@/utils/request';
const phonereg = /^1[3579]\d{9}$/;
export default {
  data() {
    return {
      phone_value: "",
      pwd_value: ""
    };
  },
  methods: {
    handlLogin() {
      if (phonereg.test(this.phone_value) && this.pwd_value.trim !== "") {
          request.post('/api/login',{
              phone:this.phone_value,
              password:this.pwd_value
          }).then(res=>{
            //   console.log(res)
            window.localStorage.setItem('token',res.token);
            this.$router.back();
          }).catch(error=>{
              alert(error.response.data.message);
          })
      } else {
          alert("请输入正确信息")
      }
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
  background: #f9f9f9;
}
h1 {
  width: 100%;
  height: pxTorem(100px);
  line-height: pxTorem(100px);
  font-size: pxTorem(22px);
  font-weight: bold;
  margin-left: pxTorem(20px);
}
.login {
  @include sizing;
  padding: pxTorem(20px);
  width: 100%;
  p {
    width: 100%;
    height: pxTorem(60px);
    border-bottom: 1px solid #ccc;
    font-size: pxTorem(16px);
    line-height: pxTorem(60px);
  }
  .loginbtn {
    width: 100%;
    height: pxTorem(50px);
    margin-top: pxTorem(10px);
    line-height: pxTorem(50px);
    text-align: center;
    border: none;
    outline: none;
    background: #ccc;
    color: #fff;
    font-size: pxTorem(22px);
    border-radius: pxTorem(30px);
  }
}
</style>