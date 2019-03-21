<template>
  <div class="portfolio-career-item">
    <div class="career-start-date text-h3">
      {{ startDate }}
    </div>
    <div class="career-icon">
      <font-awesome-icon class="fa-2x" :icon="phoneIcon" />
    </div>
    <div class="portfolio-company-wrapper">
      <div class="company-name">
        {{ companyName }}
      </div>
      <div class="job-description">
        {{ jobDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companyName: {
      type: String,
      default: '',
    },
    jobDescription: {
      type: String,
      default: '',
    },
    startDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      phoneIcon: ['fas', 'mobile-alt'],
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio-career-item {
  color: $blue;
  display: flex;

  .career-start-date {
    width: 25%;
    text-align: right;
    padding-right: 100px;
  }

  .career-icon {
    background: $white;
    border-radius: 50%;
    box-shadow: 0 0 0 8px $blue;
    width: 40px;
    height: 40px;
    position: relative;

    svg {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
  }

  .portfolio-company-wrapper {
    background: $blue;
    border-radius: 5px;
    color: $white;
    margin: 0 40px;
    padding: 20px;
    width: 65%;
    position: relative;

    .company-name {
      padding: 0 0 10px 0;
      border-bottom: 1px solid $white;
    }

    .job-description {
      width: 100%;
      margin: 10px;
    }
  }

  .portfolio-company-wrapper::after {
    right: 100%;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border: 10px solid transparent;
    border-right-color: $blue;
    top: 10px;
  }
}
</style>
