'use strict'

const { resolve } = require('path')

const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const Router = require('koa-router')
const views = require('koa-views')
const serve = require('koa-static')
const send = require('koa-send')

const { format } = require('date-fns')

const helpers = require('./helpers')

const Debug = require('debug')
const debug = Debug('app:app')

const app = new Koa()

app.use(bodyparser())
app.use(json())
app.use(serve('server/src'))
app.use(serve('client/dist'))
// app.use(
//   views(resolve('server/views'), {
//     extension: 'pug',
//     options: {
//       ...helpers
//     }
//   })
// )

const router = new Router({
  prefix: '/api'
})

// api routes initialisation
require('./routes/events').init(router)
require('./routes/members').init(router)
require('./routes/register').init(router)

app.use(router.routes(), router.allowedMethods())

const sendOpts =
  app.env === 'production'
    ? { root: 'client/dist', maxage: config.app.cacheTime }
    : { root: 'client/dist' }

app.use(async function(ctx, next) {
  // do not handle /api paths
  if (ctx.path.substr(0, 5).toLowerCase() === '/api/') {
    await next()
    return
  } else if (await send(ctx, ctx.path, sendOpts)) {
    // file exists and request successfully served so do nothing
    return
  } else if (ctx.path.includes('.')) {
    // file does not exist so do nothing and koa will return 404 by default
    // we treat any path with a dot '.' in it as a request for a file
    return
  } else {
    // request is for a subdirectory so treat it as an angular route and
    // serve index.html, letting angular handle the routing properly
    await send(ctx, '/index.html', sendOpts)
    return
  }
})

// always serve client
// app.use(async (ctx, next) => {
//   await next();
// })

module.exports = {
  app
}
