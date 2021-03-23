module.exports = options => {
  return async function (ctx, next) {
    const {
      params = {},
      query = {},
      request: { body },
    } = ctx
    params.query = query
    params.body = body
    ctx.params = params
    await next()
  }
}
