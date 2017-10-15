'use strict'

const { resolve } = require('path')

const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const Router = require('koa-router')
const views = require('koa-views')
const serve = require('koa-static')

const helpers = require('./helpers')

const Debug = require('debug')
const debug = Debug('app:app')

const app = new Koa()
const router = new Router()

const { format } = require('date-fns')

app.use(bodyparser())
app.use(json())
app.use(serve('src'))
app.use(
  views(resolve('views'), {
    extension: 'pug',
    options: {
      ...helpers
    }
  })
)

// routes initialisation
require('./routes/events').init(router)
require('./routes/members').init(router)
require('./routes/register').init(router)

app.use(router.routes(), router.allowedMethods())

module.exports = {
  app
}
