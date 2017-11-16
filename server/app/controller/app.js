let request = require('request-promise-native')
let cheerio = require('cheerio')
const ZHIHU = 'https://www.zhihu.com'
const getQuestions = async (ques) => {
  const promises = ques.map( item => {
    return request(`${ZHIHU}${item.url}`).then(res => {
      const $ = cheerio.load(res)
      const NumberBoad = $('.NumberBoard-item .NumberBoard-value')
      item.followers = $(NumberBoad[0]).text()
      item.readers = $(NumberBoad[1]).text()
      item.answers = $('h4.List-headerText span').text().replace(' 个回答','')
    })
  })
  await Promise.all(promises)
}

module.exports = {
  index(ctx){
    ctx.body = '首页'
  },
  async spider(ctx) {
    const res = await request(`${ZHIHU}/explore`).catch(err => {
      return err
    })
    if (res.error){
      ctx.body = res.message
      return
    }
    const $ = cheerio.load(res)
    let questions = [];
    $('.explore-tab .tab-panel h2 a').each((index,item) => {
      questions.push({
        title: $(item).text(),
        url: $(item).attr('href').split('/answer')[0]
      })
    })
    await getQuestions(questions)
    ctx.body = questions
  }
}