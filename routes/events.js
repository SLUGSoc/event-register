'use strict'

const { Event } = require('../db/models')

const init = router => {
  router.get('/events', index)
}

const index = async ctx => {
  ctx.body = await Event.findAll()

  // await ctx.render("index")
}

module.exports = {
  init
}
