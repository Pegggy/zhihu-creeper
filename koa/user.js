const sleep = async(ms) => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(true)
    },ms)
  })
}
module.exports = {
  login(ctx){
    ctx.body = {
      username: ctx.request.body.username
    }
  },
  async profile(ctx){
    ctx.body = {
      username: 'pegggy',
      sex: 'female',
      age: '24'
    }
  }
}