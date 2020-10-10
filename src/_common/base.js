/**
 * 防抖函数
 *
 * @method Debounce
 * @param {Function,Number} 接收方法，等待的时长
 * @return  {Function}  [返回方法 ]
 */
const Debounce = (func, delay) => {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
/**
 * 时间戳转年月日时分秒
 *
 * @method TimestampToTime
 * @param {Number} 接收时间戳
 * @return  {String}  [返回年月日 时分秒 ]
 */
const TimestampToTime = (params) => {
    var date = new Date(params);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y + M + D + h + m + s;
}
export {
    Debounce,
    TimestampToTime
}