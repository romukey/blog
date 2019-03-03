<template>
  <div class="portfolio-default-layout">
    <portfolio-header />

    <nuxt />
  </div>
</template>

<script>
import PortfolioHeader from '~/components/organisms/portfolio-header.vue'

export default {
  components: {
    PortfolioHeader,
  },
}
</script>

<style lang="scss" scoped>
.portfolio-default-layout {
  height: 100vh;
}
</style>
