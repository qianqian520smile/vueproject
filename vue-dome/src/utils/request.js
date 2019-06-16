import axios from 'axios';

import router from '../router';
const request = axios.create({
    baseURL:'http://172.23.45.28:3000'
});


//添加请求拦截器
request.interceptors.request.use((config) => {
    // console.log(...config)
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem('token')
        }
    };
}, (error) => {
    return Promise.reject(error)
})




//响应之前拦截

request.interceptors.response.use((respose) => {
    // console.log(respose)
    return respose.data;
}, (error) => {
    const response = error.response;
    const status = response.status;
    if (status > 400) {
        switch (status) {
            case 401:
                router.push('/login');
                break;
            case 404:
               alert('页面丢失')
                break;
            case 405:
               alert('没有权限')
                break;
            default:
              console.log('网路出现错误')
        }
    }
  return Promise.reject(error);
});

export default {
    get(url,data) {
        //    console.log(url);
        // console.log(request.get(url))  //返回出promise对象
      return  request.get(url,{
            params:data
        })
    },
    post(url,data) {
          return request.post(url,data)
    }
}