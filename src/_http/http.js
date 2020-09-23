/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { Message } from 'element-ui';
/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
    Message({
        message: msg,
        type: 'warning'
    });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//     router.push({
//         path: '/login',
//         query: {
//             redirect: router.currentRoute.fullPath
//         }
//     });
// }

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 400:
            tip('参数出错了~');
            break;
        // 401: 未登录状态，跳转登录页
        case 401:
            localStorage.removeItem('token');
            tip('您尚未登录或登录已过期！');
            // setTimeout(() => {
            //     toLogin();
            // }, 1000);
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('您尚未登录或登录已过期！');
            localStorage.removeItem('token');
            // setTimeout(() => {
            //     toLogin();
            // }, 1000);
            break;
        // 404请求不存在
        case 404:
            tip('404，请求的资源不存在');
            break;
        // 404请求不存在
        case 405:
            tip('请求方式错误');
            break;
        default:
            console.log(other);
    }
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
    config => {
        let arrApi = ["materials", "budget", "design"]
        let api = config.url.split('/api/')[1]
        if (arrApi.indexOf(api) > -1) {
            config.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        }
        if (api === 'uploadAvatar') {
            config.headers.post['Content-Type'] = 'multipart/form-data';
        }
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        // const token = store.state.token;   
        const token = localStorage.token;
        token && (config.headers.Authorization = token);
        token && (config.headers.token = token);
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            //tip('请求超时！');
            console.log('请求超时，请检查网络！！！')
        }
    });

export default instance;