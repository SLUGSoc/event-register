'use strict'

const { Event, Member, Register } = require('../db/models')

const init = router => {
  router.get('/events', index)
  router.get('/members', members)
  router.get('/register', register)
}

const index = async ctx => {
  await ctx.render('events', {
    events: await Event.findAll({
      include: [
        {
          model: Member,
          as: 'attendees'
        }
      ]
    })
  })
}

const members = async ctx => {
  await ctx.render('members', {
    members: await Member.findAll({
      include: [
        {
          model: Event,
          as: 'events'
        }
      ]
    })
  })
}

const register = async ctx => {
  await ctx.render('register', {
    register: await Register.findAll({
      include: [
        {
          model: Member,
          as: 'member'
        },
        {
          model: Event,
          as: 'event'
        }
      ]
    })
  })
}

module.exports = {
  init
}
