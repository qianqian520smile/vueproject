# vueproject
vue项目

## 星巴克的内部管理项目  员工内部管理状况 调班和休假的一个移动端项目
## 技术栈
    vue + vuex + vue-router + es6语法 + axios + sass/scss + flex + element-ui (DatePicker/TimePicker) + transition + icon + 正则 + express后台搭建


## 项目运行

npm start / yarn start （没有yarn自己也可以npm i yarn -g 全局下载一个）
npm i
npm run build



## 目录结构

vue-dome  

     src
       api
           index.js          //全部的接口(获取到后台数据)

        components
            alertMessage  
                index.vue     //封装弹框信息
            header
                index.vue     //设置的全局的头部
            popUp.vue         //封装的遮罩动画效果
        plugins
            elui.js           //获取到封装的头部设置成el-header(标签)且优化弹框代码
        router
            index.js          //封装成的路由表
        static                //静态资源
            images            // 图片
            scss              // css样式
        store                
            modules
            user.js           //用户信息
        utils
            computedTime.js   //封装加班休假
            request.js        //axios的二次封装(登录时触发的事件)
        views
            commit
                index.vue     //加班/休假页面
            detail
                index.vue     //详情页面
            home
                components
                    tableMenu.vue  //(待处理,已发起,已处理)的切换
                    tableType.vue  //(加班/休假)的切换
                    todolist.vue   //调用todotime
                    todotime.vue   //(@click="$router.push)点击的时候跳转到详情（时间表（element-ui））
                                   //封装好的详情列表
                index.vue    //首页
            login
                index.vue    //登录页面
            cover 
                index.vue    //排序页面              
