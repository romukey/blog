<template>
  <div class="portfolio-error-btn">
    <font-awesome-icon class="error-icon fa-7x" :icon="errorIconClass" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorIconClass: ['fas', 'exclamation-circle'],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-error-btn {
  display: block;

  .error-icon {
    color: $blue;
  }
}
</style>
