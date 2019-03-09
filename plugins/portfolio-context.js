export default (ctx, inject) => {
  ctx.portfolio = process.env.portfolio
  inject('portfolio', process.env.portfolio)
}
