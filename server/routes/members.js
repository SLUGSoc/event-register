'use strict'

const { maxBy } = require('lodash')

const { Member, Event } = require('../db/models')

const init = router => {
  router.get('/members', list)
  router.get('/member/:id', member)
}

const list = async ctx => {
  await ctx.render('members', {
    members: await Member.all({
      include: [
        {
          model: Event,
          as: 'events'
        }
      ]
    })
  })
}

const member = async ctx => {
  const member = await Member.findById(ctx.params.id, {
    include: [
      {
        model: Event,
        as: 'events'
      }
    ]
  })

  await ctx.render('member', {
    member,
    lastEvent: maxBy(member.events, 'updatedAt')
  })
}

module.exports = {
  init
}
