'use strict'

const { Event, Member } = require('../db/models')

const { match } = require('./helpers')

const init = router => {
  router.get('/events', list)
  router.get('/event/:id', event)
}

const list = async ctx => {
  const options = {}

  if (match(ctx, 'include', 'attendees')) {
    options.include = [
      {
        model: Member,
        as: 'attendees'
      }
    ]
  }

  ctx.body = await Event.all(options)
}

const event = async ctx => {
  const options = {}

  if (match(ctx, 'include', 'attendees')) {
    options.include = [
      {
        model: Member,
        as: 'attendees'
      }
    ]
  }

  ctx.body = await Event.findById(ctx.params.id, options)
}

module.exports = {
  init
}
