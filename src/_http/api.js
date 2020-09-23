import axios from './http';
import { baseUrl } from './baseUrl'
const qs = require('qs')
let $url = u => {
    let url = baseUrl + u
    return url;
}
const request = {
    async get(url, data) {
        try {
            let res = await axios.get($url(url), { params: data })
            res = res.data
            return new Promise((resolve) => {
                if (res.code === 200) {
                    resolve(res.data)
                } else if (res.code === 401) {
                    console.log('没权限？')
                } else {
                    console.log(res.message)
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    async post(url, data) {
        try {
            let res = await axios.post($url(url), qs.stringify(data))
            res = res.data
            return new Promise((resolve) => {
                if (res.code === 200) {
                    resolve(res.data)
                } else if (res.code === 401) {
                    console.log('没权限？')
                } else {
                    console.log(res.message)
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
}
export { request }