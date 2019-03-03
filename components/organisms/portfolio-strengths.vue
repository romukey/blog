<template>
  <section class="strengths-section-wrapper" data-aos="fade" data-aos-delay="200">
    <div class="strengths-title-wrapper">
      <div class="strengths-text">
        <h2>自分の強み</h2>
      </div>
    </div>
    <div class="strengths-items-wrapper">
      <ul class="strengths-items">
        <li
          v-for="(strength, index) in strengths"
          :key="index"
        >
          <portfolio-strength-item :summary="strength.summary" :description="strength.description" :icon-style="strength.iconStyle" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import PortfolioStrengthItem from '~/components/molecules/portfolio-strength-item.vue'

export default {
  components: {
    PortfolioStrengthItem,
  },
  data() {
    return {
      strengths: [
        {
          summary: 'キャッチアップし、改良を加えられる',
          description: '経験がないことに対しても自分のものにすべく努力し、その上で自ら改良を加えることができる。',
          iconStyle: ['fab', 'hubspot'],
        },
        {
          summary: '全体を把握した上で最適な解を導く',
          description: '複数のマイクロサービスが集まった大規模なサービスの中でも、素早く状況を整理し、効率が良い方法で解を導け出せる。',
          iconStyle: ['far', 'lightbulb'],
        },
        {
          summary: '一通りの開発工程を経験していること',
          description:
            '他職種の依頼に対して、自ら仕様/設計/テストを考案、実行し、フロント/サーバーエンド/インフラで必要な開発を適宜行い、リリースを行うことができること',
          iconStyle: ['far', 'clipboard'],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.strengths-section-wrapper {
  padding: 5em 0;

  .strengths-title-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .strengths-text {
      text-align: center;
    }

    .strengths-text::after {
      content: '';
      display: block;
      width: 20%;
      margin: 6px auto 0;
      border-bottom: 1px solid $dark_navy;
      transition: width 0.3s ease-in-out;
    }
  }

  .strengths-items-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .strengths-items {
      display: flex;
      justify-content: center;

      li {
        width: 33%;
        margin: 0 10px;
      }
    }
  }
}
</style>
