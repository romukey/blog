<template>
  <ul class="portfolio-header-menu">
    <li
      v-for="(menu, index) in menus"
      :key="index"
    >
      <portfolio-header-menu-item :menu="menu" />
    </li>
  </ul>
</template>

<script>
import PortfolioHeaderMenuItem from '~/components/atoms/portfolio-header-menu-item.vue'

export default {
  components: {
    PortfolioHeaderMenuItem,
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-header-menu {
  display: flex;
  justify-content: center;

  li {
    margin: 0 10px;
    display: flex;
    min-height: 30px;
  }
}
</style>
