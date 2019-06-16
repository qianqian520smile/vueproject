//统一管理接口


import request from '@/utils/request'

const  api={
   //  /api/user/info 获取用户是否登入
   islogin:()=>request.get('/api/user/info'),

//    /api/login  用户登入
   userlogin:(data)=>request.post('/api/login',data),

// /api/task/list  首页数据
   tasklist:(data)=>request.get('/api/task/list',data),

// /api/apply/overtime  获取加班详情数据
   overtimeDetail:(data)=>request.get('/api/apply/overtime',data),

 //  /api/apply/vacation  获取休假详情数据
  vacationDetail:(data)=>request.get('/api/apply/vacation',data),
 
 //发送附件
  sumitFile:(filedata)=>request.post('/api/upload',filedata),

 //发送加班
  submitovertime:(data)=>request.post('/api/apply/overtime',data),
  
   //  发送休假
   submitvacation:(data)=>request.post('/api/apply/vacation',data)
}

export default api;