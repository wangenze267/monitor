export default {
  init(cb) {
    // 监听不到404
    // 404 需要去监听 window.addEventListener('error')
    // promise 失败了也不能通过 onerror 捕获
    window.onerror = function (message, source, lineno, colno, error) {
      console.dir(error)
      const info = {
        message: error.message,
        name: error.name,
      }
      const stack = error.stack
      const matchUrl = stack.match(/http:\/\/[^\n]/)[0]
      info.fileName = matchUrl.match(/http:\/\/(?:\S*)\.js/)[0]
      const [row, column] = matchUrl.match(/((?<=:)(\d+))/g)
      info.row = row
      info.column = column
      // 上线的时候代码会压缩 source-map
      // 需要通过映射代码反解，找到真实报错
      cb(info)
    }
  }
}