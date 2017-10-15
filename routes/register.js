'use strict'

const { groupBy } = require('lodash')

const { Member, Register, Event } = require('../db/models')

const init = router => {
  router.get('/register/:id', register)
}

const register = async ctx => {
  await ctx.render('register', {
    register: groupBy(
      await Register.findAll({
        where: {
          eventId: ctx.params.id
        },
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
      }),
      'event.name'
    )
  })
}

module.exports = {
  init
}
