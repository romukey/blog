<template>
  <div class="portfolio-default-layout">
    <portfolio-header />
    <portfolio-slide-menu />

    <nuxt />
  </div>
</template>

<script>
import PortfolioHeader from '~/components/organisms/portfolio-header.vue'
import PortfolioSlideMenu from '~/components/organisms/portfolio-slide-menu.vue'

export default {
  components: {
    PortfolioHeader,
    PortfolioSlideMenu,
  },
}
</script>

<style lang="scss" scoped>
.portfolio-default-layout {
  height: 100vh;
}
</style>
