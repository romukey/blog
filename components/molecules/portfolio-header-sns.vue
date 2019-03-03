<template>
  <ul class="portfolio-header-sns">
    <li>
      <portfolio-github-btn />
    </li>
    <li>
      <portfolio-twitter-btn />
    </li>
  </ul>
</template>

<script>
import PortfolioGithubBtn from '~/components/atoms/portfolio-github-btn.vue'
import PortfolioTwitterBtn from '~/components/atoms/portfolio-twitter-btn.vue'

export default {
  components: {
    PortfolioGithubBtn,
    PortfolioTwitterBtn,
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
.portfolio-header-sns {
  display: flex;
  justify-content: space-evenly;

  li {
    margin: 0 10px;
  }
}
</style>
