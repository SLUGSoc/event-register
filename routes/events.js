'use strict'

const { groupBy } = require('lodash')

const { Event, Member } = require('../db/models')

const init = router => {
  router.get('/events', list)
  router.get('/event/:id', event)
  // router.get('/members', members)
  // router.get('/register', register)
}

const list = async ctx => {
  await ctx.render('events', {
    events: await Event.all({
      include: [
        {
          model: Member,
          as: 'attendees'
        }
      ]
    })
  })
}

const event = async ctx => {
  await ctx.render('event', {
    event: await Event.findById(ctx.params.id, {
      include: [
        {
          model: Member,
          as: 'attendees'
        }
      ]
    })
  })
}

module.exports = {
  init
}
