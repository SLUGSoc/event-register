'use strict'

const { Event, Member } = require('../db/models')

const init = router => {
  router.get('/events', list)
  router.get('/event/:id', event)
}

const list = async ctx => {
  ctx.body = await Event.all({
    include: [
      {
        model: Member,
        as: 'attendees'
      }
    ]
  })
}

const event = async ctx => {
  ctx.body = await Event.findById(ctx.params.id, {
    include: [
      {
        model: Member,
        as: 'attendees'
      }
    ]
  })

  await ctx.render('event', {
    event
  })
}

module.exports = {
  init
}
