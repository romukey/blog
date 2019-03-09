<template>
  <div class="portfolio-slide-menu-opener" @click="open">
    <font-awesome-icon
      :icon="menuIconClass"
      class="menu-icon fa-2x"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      menuIconClass: ['fas', 'bars'],
    }
  },
  methods: {
    ...mapMutations({
      open: 'slide-menu/open',
    }),
  },
}
</script>

<style lang="scss" scoped>
.portfolio-slide-menu-opener {
  cursor: pointer;

  .menu-icon {
    color: $blue;
  }
}
</style>
