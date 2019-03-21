import path from 'path'

export default {
  addPortfolioPrefix(imagePath) {
    return process.env.DEPLOY_ENV === 'GH_PAGES' ? path.join('/portfolio', imagePath) : imagePath
  },
}
