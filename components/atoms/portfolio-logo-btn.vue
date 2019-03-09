<template>
  <nuxt-link
    to="/"
    class="portfolio-logo-btn"
  >
    <img :src="$img.addPortfolioPrefix('/s/images/logo.jpg')">
  </nuxt-link>
</template>

<style lang="scss" scoped>
.portfolio-logo-btn {
  display: block;

  img {
    border-radius: 50%;
    border: solid 2px $white;
    height: 26px;
  }
}
</style>
