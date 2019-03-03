<template>
  <section class="skills-section-wrapper" data-aos="fade">
    <div class="skills-title-wrapper">
      <div class="skills-text">
        <h2>スキル</h2>
      </div>
    </div>
    <div class="skills-chart-wrapper">
      <portolio-doughnut-chart :data="programmingLanguageChartData" :options="programmingLanguageChartOption" />
      <portolio-doughnut-chart :data="awsServiceChartData" :options="awsServiceChartOption" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    const language = this.$constant.LANGUAGE
    const awsService = this.$constant.AWS_SERVICE

    return {
      programmingLanguageChartData: {
        labels: language.map(lang => lang.NAME),
        datasets: [
          {
            backgroundColor: language.map(lang => lang.COLOR),
            data: language.map(lang => lang.RATIO),
          },
        ],
      },
      programmingLanguageChartOption: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'プログラミング言語',
          fontSize: 14,
        },
      },
      awsServiceChartData: {
        labels: awsService.map(aws => aws.NAME),
        datasets: [
          {
            backgroundColor: awsService.map(aws => aws.COLOR),
            data: new Array(awsService.length).fill(awsService.length / 100),
          },
        ],
      },
      awsServiceChartOption: {
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '使用したことあるAWSサービス',
          fontSize: 14,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.skills-section-wrapper {
  padding: 5em 0;

  .skills-title-wrapper {
    max-width: $breakpoint-pc-large;
    margin: 0 auto;

    .skills-text {
      color: $dark_navy;
      text-align: center;
      margin-bottom: 3rem;
    }

    .skills-text::after {
      content: '';
      display: block;
      width: 10%;
      margin: 6px auto 0;
      border-bottom: 1px solid $dark_navy;
      transition: width 0.3s ease-in-out;
    }
  }

  .skills-chart-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
