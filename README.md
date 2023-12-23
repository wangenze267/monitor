# monitor
🔦 A front-end monitoring tool for a website

---
## 待完成的饼 🍕

🪄 监控页面性能 （已完成）

🪄 监控页面静态资源加载情况 （已完成）

🪄 监控请求情况（Ajax发送情况）

🪄 页面的错误捕获

🪄 监控用户行为

## 使用
```js
// 监控页面性能
import { Perf } from 'monitor'
Perf.init((data) => {
  console.log(data)
})

// 监控页面静态资源加载情况
import { Resource } from 'monitor'
Resource.init((data) => {
  console.log(data)
})
```
