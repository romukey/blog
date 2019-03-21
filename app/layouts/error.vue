<template>
  <div class="portfolio-error-layout">
    <div class="portfolio-error-wrapper">
      <portfolio-error-btn class="error-icon" />

      <div class="error-text">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioErrorBtn from '~/components/atoms/portfolio-error-btn.vue'

export default {
  components: {
    PortfolioErrorBtn,
  },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head() {
    return {
      title: this.notFoundMessage,
      meta: [this.$metaInfo.getNoIndexNoFollow()],
    }
  },
  data() {
    return {
      notFoundMessage: 'ページが見つかりません',
    }
  },
  computed: {
    errorMessage() {
      return this.error.statusCode === 404 ? this.notFoundMessage : this.error.message
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-error-layout {
  background: $dark_navy;
  height: calc(100vh - 100px);

  .portfolio-error-wrapper {
    padding: 100px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error-text {
      color: $blue;
      margin-top: 50px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
