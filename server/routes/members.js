'use strict'

const { maxBy } = require('lodash')

const { Member, Event } = require('../db/models')

const { match } = require('./helpers')

const init = router => {
  router.get('/members', list)
  router.get('/member/:id', member)
}

const list = async ctx => {
  const options = {}

  if (match(ctx, 'include', 'events')) {
    options.include = [
      {
        model: Event,
        as: 'events'
      }
    ]
  }

  ctx.body = await Member.all(options)
}

const member = async ctx => {
  const options = {}

  if (match(ctx, 'include', 'events')) {
    options.include = [
      {
        model: Event,
        as: 'events'
      }
    ]
  }

  ctx.body = await Member.findById(ctx.params.id, options)
}

module.exports = {
  init
}
