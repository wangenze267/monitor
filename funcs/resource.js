// 处理计算页面静态资源加载时间的函数

const processData = (_) => {
  const data = {
    name: _.name, // 文件名
    initiatorType: _.initiatorType, // 类型
    duration: _.duration, // 加载时间
  }
  return data;
}
export default {
  init(cb){
    // 获取资源相关信息 可以收到一个发送一个
    //  window.PerformanceObserver 不兼容 IE9 以下
    if(window.PerformanceObserver) {
      const observer = new PerformanceObserver((list) => {
        const data = list.getEntries() // data is Array
        cb(processData(data[0]))
      })
      observer.observe({entryTypes: ['resource']})
    } else {
      window.onload = function() {
        const resourceData = performance.getEntriesByType('resource')
        const data = resourceData.map(_=> processData(_))
        cb(data)
      }
    }
  }
}