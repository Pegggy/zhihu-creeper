const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()


app.use(bodyParser())
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('进入 localhost:3000 查看页面')