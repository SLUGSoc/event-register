'use strict'

const { Event, Member } = require('../db/models')

const init = router => {
  router.get('/events', index)
  router.get('/members', members)
}

const index = async ctx => {
  await ctx.render('events', { events: await Event.findAll() })
}

const members = async ctx => {
  await ctx.render('members', { members: await Member.findAll() })
}

module.exports = {
  init
}
