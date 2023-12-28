# website-monitoring

<p align="left">
  <a href="https://www.npmjs.com/package/website-monitoring">
    <img src="https://img.shields.io/npm/v/website-monitoring?color=f03e3e" alt="npm" />
  </a>
  <a href="https://github.com/wangenze267/monitor">
    <img src="https://img.shields.io/github/stars/wangenze267/monitor?color=1c7ed6" alt="star" />
  </a>
  <a href="https://github.com/wangenze267/monitor">
    <img src="https://img.shields.io/npm/l/website-monitoring?color=37b24d" alt="license" />
  </a>
  <a href="https://npm-stat.com/charts.html?package=website-monitoring">
    <img src="https://img.shields.io/badge/dynamic/json?label=downloads&color=f76707&query=$.downloads&url=https://api.npmjs.org/downloads/point/last-week/website-monitoring" alt="npm-stats">
  </a>
</p>

🔦 A front-end monitoring tool for a website

一个用来监控网站数据的前端工具包

> npm install website-monitoring

---
## 待完成的饼 🍕

🪄 监控页面性能 - 已完成

🪄 监控页面静态资源加载情况 - 已完成

🪄 监控请求情况（Ajax发送情况）- 已完成

🪄 页面的错误捕获 - 已完成

🪄 监控用户行为

## 使用
```js
import Monitor from 'website-monitoring'

// 监控页面性能
Monitor.perf.init((data) => {
  console.log(data)
})

// 监控页面静态资源加载情况
Monitor.resource.init((data) => {
  console.log(data)
})

// 监控Ajax请求情况
Monitor.xhr.init((data) => {
  console.log(data)
})

// 监控页面报错情况
Monitor.errorCatch.init((data) => {
  console.log(data)
})
```
