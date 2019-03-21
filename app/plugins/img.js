import img from '~/misc/img'

export default (ctx, inject) => {
  ctx.$img = img
  inject('img', img)
}
