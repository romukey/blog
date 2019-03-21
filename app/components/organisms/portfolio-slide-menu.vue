<template>
  <div class="delish-slide-menu">
    <transition name="background-fade">
      <div v-if="isOpened" class="background" @click.prevent="close">
        <div class="close-button">&times;</div>
      </div>
    </transition>
    <transition name="menu-fade">
      <div v-if="isOpened" class="menu">
        <div class="menu-item-wrapper">
          <nuxt-link to="/">
            <div class="menu-item" @click="close">
              <portfolio-logo-btn />
              <p class="menu-text">トップページ</p>
            </div>
          </nuxt-link>
          <div
            class="menu-item"
            @click="
              openInNewTab($portfolio.github.url)
              close()
            "
          >
            <portfolio-github-btn />
            <p class="menu-text">Github</p>
          </div>
          <div
            class="menu-item"
            @click="
              openInNewTab($portfolio.twitter.url)
              close()
            "
          >
            <portfolio-twitter-btn />
            <p class="menu-text">Twitter</p>
          </div>
          <nuxt-link to="/tech-blogs">
            <div class="menu-item" @click="close">
              <portfolio-tech-btn />
              <p class="menu-text">Tech blog</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import PortfolioLogoBtn from '~/components/atoms/portfolio-logo-btn.vue'
import PortfolioGithubBtn from '~/components/atoms/portfolio-github-btn.vue'
import PortfolioTwitterBtn from '~/components/atoms/portfolio-twitter-btn.vue'
import PortfolioTechBtn from '~/components/atoms/portfolio-tech-btn.vue'

export default {
  components: {
    PortfolioLogoBtn,
    PortfolioGithubBtn,
    PortfolioTwitterBtn,
    PortfolioTechBtn,
  },
  computed: {
    ...mapGetters({
      isOpened: 'slide-menu/isOpened',
    }),
  },
  methods: {
    ...mapMutations({
      close: 'slide-menu/close',
    }),
    openInNewTab(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="scss" scoped>
.delish-slide-menu {
  // 背景のアニメーション
  .background-fade-enter-active,
  .background-fade-leave-active {
    transition: opacity 0.8s;
  }

  .background-fade-enter,
  .background-fade-leave-to {
    opacity: 0;
  }

  // スライドメニューのアニメーション
  .menu-fade-enter-active {
    transition: all 0.8s ease;
  }

  .menu-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .menu-fade-enter,
  .menu-fade-leave-to {
    transform: translateX(10%);
    opacity: 0;
  }

  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    overflow-x: hidden;
    background-color: rgba(0, 0, 0, 0.6);

    .close-button {
      position: absolute;
      top: 0;
      left: 25px;
      font-size: 36px;
      color: $white;
    }
  }

  .menu {
    height: 100%;
    width: 64%;
    max-width: 320px;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: $dark_navy;
    overflow-x: hidden;

    .menu-item-wrapper {
      background-color: $dark_navy;
      padding-top: 40px;
      padding-bottom: 52px;
    }

    .menu-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin: 0 20px;
      padding: 17px 0;
      border-bottom: thin solid $blue;
      text-decoration: none;

      .menu-text {
        font-size: 16px;
        font-weight: bold;
        color: $white;
        margin-left: 10px;
      }
    }
  }
}
</style>
