<template>
  <div class="portfolio-tech-blogs">
    <div class="portfolio-tech-blogs-content">
      <h1 class="text-h2">{{ pageTitle }}</h1>

      <p>Comming soon...</p>

      <portfolio-tech-blog-item-cards :items="items" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'nuxt-property-decorator'

const PortfolioTechBlogItemCards = () => import('../../components/organisms/portfolio-tech-blog-item-cards.vue')

@Component({
  components: {
    PortfolioTechBlogItemCards,
  },
  computed: {
    ...mapGetters({
      items: 'qiita-items/items',
    }),
  },
})
export default class TechBlogsIndex extends Vue {
  pageTitle: String = 'TECH BLOGS'

  head() {
    return {
      title: this.pageTitle,
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-tech-blogs {
  background: $dark_navy;
  color: $blue;
  height: calc(100vh - 100px);

  .portfolio-tech-blogs-content {
    max-width: 960px;
    margin: 0 auto;
    padding: 1em 0;

    @media only screen and (max-width: $breakpoint-mobile) {
      padding: 1em 3.2%;
    }
  }
}
</style>
