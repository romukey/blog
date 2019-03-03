import constant from '~/misc/constant'

export default (ctx, inject) => {
  ctx.$constant = constant
  inject('constant', constant)
}
