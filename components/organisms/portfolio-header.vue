<template>
  <header class="portfolio-header">
    <div class="header-menu">
      <div class="title text-h2">
        <nuxt-link to="/">
          ROMUKEY
        </nuxt-link>
      </div>
      <div class="nav-bar">
        <portfolio-header-menu :menus="menus" />
      </div>
      <div class="sns">
        <portfolio-header-sns />
      </div>
    </div>
  </header>
</template>

<script>
import PortfolioHeaderMenu from '~/components/molecules/portfolio-header-menu.vue'
import PortfolioHeaderSns from '../molecules/portfolio-header-sns.vue'

export default {
  components: {
    PortfolioHeaderSns,
    PortfolioHeaderMenu,
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
  padding: 1em 1.5em;
  background: $dark_navy;
  height: 100px;

  .header-menu {
    max-width: 960px;
    margin: 0 auto;
    padding: 15px 0;
    display: flex;
    flex-direction: row;

    .title {
      color: $blue;
      width: 20%;

      a {
        text-decoration: none;
      }
    }

    .nav-bar {
      width: 60%;
    }

    .sns {
      width: 20%;
    }
  }
}

@media only screen and (max-width: $breakpoint-mobile) {
  .portfolio-header {
    .header-menu {
      .title {
        width: 50%;
      }
    }
  }
}
</style>
