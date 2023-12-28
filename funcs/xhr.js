// 发送请求有两种：fetch/xhr
// fetch的话，重写 window.fetch 在内部加自定义监控方法
export default {
  init(cb) {
    // xhr
    const xhr = window.XMLHttpRequest
    const preOpen = xhr.prototype.open
    xhr.prototype.open = function (method,url,async,username,password) {
      this.info = {
        method,url,async,username,password
      }
      return preOpen.apply(this, arguments)
    }
    const preSend = xhr.prototype.send
    xhr.prototype.send = function(value) {
      const startTime = Date.now()
      const fn = (type) => () => {
        this.info.time = Date.now() - startTime
        this.info.requestSize = value ? value.length : 0
        this.info.responseSize = this.responseText.length
        this.info.type = type
        // 把收集的ajax数据传递出去
        cb(this.info)
      }
      this.addEventListener('load', fn('load'), false)
      this.addEventListener('error', fn('error'), false)
      // abort 中断
      this.addEventListener('abort', fn('abort'), false)
      return preSend.apply(this, arguments)
    }
  }
}