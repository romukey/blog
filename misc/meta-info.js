export default {
  getDescription(description) {
    return { hid: 'description', name: 'description', content: description }
  },

  getKeywords(keyword) {
    return { hid: 'keywords', name: 'keywords', content: keyword }
  },
}
