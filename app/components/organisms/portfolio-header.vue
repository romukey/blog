<template>
  <header class="portfolio-header">
    <div class="header-menu">
      <div class="title text-h2">
        <nuxt-link to="/">
          ROMUKEY
        </nuxt-link>
      </div>
      <portfolio-slide-menu-opener />
    </div>
  </header>
</template>

<script>
import PortfolioSlideMenuOpener from '~/components/molecules/portfolio-slide-menu-opener.vue'

export default {
  components: {
    PortfolioSlideMenuOpener,
  },
  data() {
    return {
      menus: [],
      spMenuBarIconClass: ['fas', 'bars'],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-header {
  padding: 1em 2em;
  background: $dark_navy;
  height: 100px;

  .header-menu {
    max-width: 960px;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .title {
      color: $blue;
      width: 20%;

      a {
        text-decoration: none;
      }
    }
  }

  @media only screen and (max-width: $breakpoint-mobile) {
    .header-menu {
      .title {
        width: 50%;
      }
    }
  }
}
</style>
