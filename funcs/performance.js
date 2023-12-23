// 处理计算页面性能的函数

const processData = (p) => {
  const data = {
    prevPage: p.fetchStart - p.navigationStart, // 上个页面到这个页面的时长
    redirect: p.redirectEnd - p.redirectStart, // 重定向时长
    dns: p.domainLookupEnd - p.domainLookupStart, // dns 解析时长
    connect: p.connectEnd - p.connectStart, // tcp 连接时长
    // 从请求到响应的时长
    send: p.responseEnd - p.requestStart, // 响应结束到请求结束
    ttfb: p.responseStart - p.navigationStart, // 首字节接收到的时长
    domReady: p.domInteractive - p.domLoading, // dom 准备时长
    // 白屏时间
    whiteScreen: p.domLoading - p.navigationStart,
    // dom 解析时间
    dom: p.domComplete - p.domLoading,
    // onload 执行时间
    load: p.loadEventEnd - p.loadEventStart,
    // 总计
    total: p.loadEventEnd - p.navigationStart,
  }
  return data
}

const load = (cb) => {
  let timer
  const check = () => {
    if(performance.timing.loadEventEnd) {
      clearTimeout(timer)
      cb()
    }else {
      timer = setTimeout(check, 100)
    }
  }
  window.addEventListener('load', check, false)
}

const domready = (cb) => {
  let timer
  const check = () => {
    if(performance.timing.domInteractive) {
      clearTimeout(timer)
      cb()
    }else {
      timer = setTimeout(check, 100)
    }
  }
  window.addEventListener('DOMContentLoaded', check, false)
}

export default {
  init(cb) {
    // 有可能没触发onload dom解析后统计
    // 用户可能没加载完就关闭页面了
    domready(() => {
      const perfData = performance.timing
      const data = processData(perfData)
      data.type = 'domReady'
      cb(data)
    })
    load(() => {
      const perfData = performance.timing
      const data = processData(perfData)
      data.type = 'loaded'
      cb(data)
    })
  }
}
