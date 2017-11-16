const Koa = require('koa')

const app = new Koa()
const router = require('./app/router')

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('进入 localhost:3000 查看页面')