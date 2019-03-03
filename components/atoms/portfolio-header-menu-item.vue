<template>
  <nuxt-link
    class="portfolio-header-menu-item"
    :to="`/${menu.url}`"
  >
    {{ menu.title }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-header-menu-item {
  color: $blue;
  font-size: 16px;
  letter-spacing: 0.2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
