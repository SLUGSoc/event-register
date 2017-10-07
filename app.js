'use strict'

const { resolve } = require('path')

const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const Router = require('koa-router')
const views = require('koa-views')

const Debug = require('debug')
const debug = Debug('app:app')

const Sequelize = require('sequelize')
const db = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: resolve('db', 'slugscan.db')
})

const app = new Koa()
const router = new Router()

app.use(bodyparser())
app.use(json())
app.use(
  views(resolve('views'), {
    extension: 'pug'
  })
)

require('./routes/events').init(router)

app.use(router.routes(), router.allowedMethods())

module.exports = {
  app
}
