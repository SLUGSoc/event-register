const match = (ctx, param, query) => {
  return (
    ctx.query[param] === query ||
    (ctx.query[param] instanceof Array && ctx.query[param].includes(query))
  )
}

module.exports = {
  match
}
