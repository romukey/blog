<template>
  <a
    :href="githubUrl"
    class="portfolio-twitter-btn"
  >
    <font-awesome-icon class="twitter-icon fa-2x" :icon="githubIconClass" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      githubIconClass: ['fab', 'twitter'],
      githubUrl: 'https://twitter.com/romukey',
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-twitter-btn {
  .twitter-icon {
    color: $blue;
  }
}
</style>
