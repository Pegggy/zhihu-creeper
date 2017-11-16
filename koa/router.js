const Router = require('koa-router')
const router = new Router()
const user = require('./user')

router.get('/',ctx => {
  ctx.body = 'Home Page'
})
router.post('/user/login',user.login)
router.get('/user/profile',user.profile)

module.exports = router