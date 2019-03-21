import metaInfo from '~/misc/meta-info'

export default (ctx, inject) => {
  ctx.$metaInfo = metaInfo
  inject('metaInfo', metaInfo)
}
