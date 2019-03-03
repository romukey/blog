<template>
  <section class="career-section-wrapper" data-aos="fade" data-aos-delay="200">
    <div class="career-title-wrapper">
      <div class="career-title">
        <h2>職務経歴</h2>
      </div>
    </div>
    <div class="career-item-wrapper">
      <ul class="career-items">
        <li
          v-for="(career, index) in careers"
          :key="index"
        >
          <portfolio-career-item
            :company-name="career.companyName"
            :job-description="career.jobDescription"
            :start-date="career.startDate"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import PortfolioCareerItem from '~/components/molecules/portfolio-career-item.vue'

export default {
  components: {
    PortfolioCareerItem,
  },
  data() {
    return {
      careers: [
        {
          companyName: 'timers-inc(インターン生)',
          jobDescription: '1. 社員全員が分析できるようなプラットホームの開発/運用。2. 社内SlackBot開発 3. PHPでのAPIサーバー開発',
          startDate: '2016/08',
        },
        {
          companyName: 'VISITS Technologies株式会社',
          jobDescription: '1. 新規事業になるアプリのAPIサーバーをRuby on Railsで開発。2. 既存サービスのVISITS OBの運用',
          startDate: '2017/08',
        },
        {
          companyName: '株式会社エブリー',
          jobDescription: '1. DELISH KITCHENのAPIサーバーの開発/運用 2. DELISH KITCHENのWEBフロント開発',
          startDate: '2018/03',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.career-section-wrapper {
  background: $dark_navy;
  padding: 20px;

  .career-title-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .career-title {
      color: $blue;
      text-align: center;
    }

    .career-title::after {
      content: '';
      display: block;
      width: 10%;
      margin: 6px auto 0;
      border-bottom: 1px solid $blue;
      transition: width 0.3s ease-in-out;
    }
  }

  .career-item-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;
    position: relative;

    .career-items {
      li {
        margin: 30px;
      }
    }
  }

  .career-item-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10px;
    background: #afdcf8;
    left: 27.5%;
  }
}
</style>
