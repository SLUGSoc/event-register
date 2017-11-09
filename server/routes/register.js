'use strict'

const { sortBy } = require('lodash')

const { Member, Register, Event } = require('../db/models')

const init = router => {
  router.get('/register/:id', register)
  router.post('/register/:id/end', end)
  router.post('/register/:id/mark/:member/in', markIn)
  router.post('/register/:id/mark/:member/out', markOut)
}

const register = async ctx => {
  const options = {
    where: {
      eventId: ctx.params.id
    }
  }

  if (match(ctx, 'include', 'member')) {
    options.include = [
      {
        model: Member,
        as: 'member'
      }
    ]
  }

  ctx.body = sortBy(await Register.all(options), 'member.fullName')
}

const end = async ctx => {
  await Register.update(
    {
      present: false
    },
    {
      where: {
        eventId: ctx.params.id
      }
    }
  )

  ctx.redirect(`/register/${ctx.params.id}`)
}

const mark = async (eventId, memberId, present) => {
  await Register.update(
    {
      present: present
    },
    {
      where: {
        eventId: eventId,
        memberId: memberId
      }
    }
  )
}

const markIn = async ctx => {
  await mark(ctx.params.id, ctx.params.member, true)

  ctx.redirect(`/register/${ctx.params.id}`)
}

const markOut = async ctx => {
  await mark(ctx.params.id, ctx.params.member, false)

  ctx.redirect(`/register/${ctx.params.id}`)
}

module.exports = {
  init
}
