import request from '@/utils/request';

export default {
    namespaced:true,
    state:{
        userinfo:{}
    },
    mutations:{
       setuserinfo(state,data){
          state.userinfo=data;
       }
    },
    actions:{
        getUserInfo(context){
            // console.log(520)
            console.log('actions',context);
            request.get('/api/user/info').then(res=>{
               context.commit('setuserinfo',res.data);
            })
        }
    }
}