export default {
  addPortfolioPrefix(path) {
    return process.env.DEPLOY_ENV ? `/portfolio/${path}` : path
  },
}
