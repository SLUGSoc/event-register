'use strict'

const { app } = require('./app')

const Debug = require('debug')
const debug = Debug('app:server')

const { PORT = 3000 } = process.env

app.listen(PORT)
debug(`app listening on port ${PORT}`)
