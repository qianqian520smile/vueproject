import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const router= new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      meta:{
        title:'加班'
      },
      name:'home',
      component:()=>import('@/views/home/index')
    },{
      path:'/cover',
      meta:{
        title:'筛选'
      },
      name:'cover',
      component:()=>import('@/views/cover/index')
    },{
      path:'/login',
      meta:{
        title:'登入'
      },
      name:'login',
      component:()=>import('@/views/login/index')
    },
    {
      path:'/detail/:type/:id',
      name:'detail',
      meta:{
        title:"申请表"
      },
      props:true,
      component:()=>import('@/views/detail/index')
    },
    {
      path:'/commit/:type',
      name:'commit',
      meta:{
        title:"提交申请表"
      },
      props:true,
      component:()=>import('@/views/commit/index')
    }
  ]
})



router.beforeEach((to,from,next)=>{
  console.log(to.meta.title)
  document.title=to.meta.title;
  next();
  
})

export default router;