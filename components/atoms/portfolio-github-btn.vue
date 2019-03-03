<template>
  <a
    :href="githubUrl"
    class="portfolio-github-btn"
  >
    <font-awesome-icon class="github-icon fa-2x" :icon="githubIconClass" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      githubIconClass: ['fab', 'github'],
      githubUrl: 'https://github.com/romukey',
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-github-btn {
  .github-icon {
    color: $blue;
  }
}
</style>
