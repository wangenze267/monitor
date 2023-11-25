import Perf from './funcs/performance.js'
// 监控页面性能 
// 即 算时间差 （各种）
// Performance Api
Perf.init((data) => {
  console.log(data)
})
// 监控页面静态资源加载情况

// 监控请求情况（Ajax发送情况）

// 页面的错误捕获

// 监控用户行为

// 监控数据上报服务端
// 1. 通过 Ajax
// 2. 通过 image （推荐，无感传输）
/**
 *  图片可能没大小 空的图片
 *  new Image().src = 'p.gif?参数'
 *  参数使用 formatObj 函数转换
 */