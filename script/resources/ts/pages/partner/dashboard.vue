<script setup lang="ts">
import EcommerceActivityTimeline from '@/views/dashboards/ecommerce/EcommerceActivityTimeline.vue'
import EcommerceLiveVisitors from '@/views/dashboards/ecommerce/EcommerceLiveVisitors.vue'
import EcommerceMarketingSales from '@/views/dashboards/ecommerce/EcommerceMarketingSales.vue'
import EcommerceOrdersImpressions from '@/views/dashboards/ecommerce/EcommerceOrdersImpressions.vue'
import EcommerceSalesMonthCharts from '@/views/dashboards/ecommerce/EcommerceSalesMonthCharts.vue'
import EcommerceSalesOverview from '@/views/dashboards/ecommerce/EcommerceSalesOverview.vue'
import EcommerceTopReferralSources from '@/views/dashboards/ecommerce/EcommerceTopReferralSources.vue'
import EcommerceTotalVisits from '@/views/dashboards/ecommerce/EcommerceTotalVisits.vue'
import EcommerceUserList from '@/views/dashboards/ecommerce/EcommerceUserList.vue'
import EcommerceVisitsByDay from '@/views/dashboards/ecommerce/EcommerceVisitsByDay.vue'
import EcommerceWeeklySalesBg from '@/views/dashboards/ecommerce/EcommerceWeeklySalesBg.vue'
import illustration1 from '@images/cards/illustration-1.png'
import illustration2 from '@images/cards/illustration-2.png'
import CardAward from '@/views/pages/cards/gamification/CardAward.vue'
import CardCongratulationsDaisy from '@/views/pages/cards/gamification/CardCongratulationsDaisy.vue'
import CardCongratulationsJohn from '@/views/pages/cards/gamification/CardCongratulationsJohn.vue'
import CardUpgrade from '@/views/pages/cards/gamification/CardUpgrade.vue'

const statisticsWithImages = [
  {
    title: 'Ratings',
    subtitle: 'Year of 2021',
    stats: '8.14k',
    change: 15.6,
    image: illustration1,
    imgWidth: 99,
    color: 'primary',
  },
  {
    title: 'Sessions',
    subtitle: 'Last Month',
    stats: '12.2k',
    change: -25.5,
    image: illustration2,
    imgWidth: 85,
    color: 'success',
  },
]


</script>

<template>
  <VRow>
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="4"-->
<!--    >-->
<!--      <CardAward />-->
<!--    </VCol>-->

<!--    <VCol-->
<!--      cols="12"-->
<!--      md="8"-->
<!--      class="align-self-end"-->
<!--    >-->
<!--      <CardCongratulationsJohn />-->
<!--    </VCol>-->

    <VCol
      cols="12"
      md="8"
      class="align-self-end"
    >
      <CardCongratulationsDaisy />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <CardUpgrade />
    </VCol>
  </VRow>
<!--  <VRow class="match-height">-->
<!--    &lt;!&ndash; 👉 Sales Overview &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="6"-->
<!--    >-->
<!--      <EcommerceSalesOverview />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Images Cards &ndash;&gt;-->
<!--    <VCol-->
<!--      v-for="statistics in statisticsWithImages"-->
<!--      :key="statistics.title"-->
<!--      cols="12"-->
<!--      sm="6"-->
<!--      md="3"-->
<!--    >-->
<!--      <CardStatisticsWithImages v-bind="statistics" />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Weekly Sales &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="6"-->
<!--    >-->
<!--      <EcommerceWeeklySalesBg />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Total Visits &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="3"-->
<!--      sm="6"-->
<!--    >-->
<!--      <EcommerceTotalVisits />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Sales this months &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="3"-->
<!--      sm="6"-->
<!--    >-->
<!--      <EcommerceSalesMonthCharts />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Activity Timeline &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="6"-->
<!--    >-->
<!--      <EcommerceActivityTimeline />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Top Referral Sources &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="6"-->
<!--    >-->
<!--      <EcommerceTopReferralSources />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Total Impressions &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="3"-->
<!--      sm="4"-->
<!--      order-md="1"-->
<!--    >-->
<!--      <EcommerceOrdersImpressions />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Marketing and Sales &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="5"-->
<!--      sm="12"-->
<!--      order-md="2"-->
<!--      order="3"-->
<!--    >-->
<!--      <EcommerceMarketingSales />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Live Visitors &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="4"-->
<!--      sm="8"-->
<!--      order-md="3"-->
<!--    >-->
<!--      <EcommerceLiveVisitors />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 User list &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="8"-->
<!--      order="4"-->
<!--    >-->
<!--      <EcommerceUserList />-->
<!--    </VCol>-->

<!--    &lt;!&ndash; 👉 Visits by day &ndash;&gt;-->
<!--    <VCol-->
<!--      cols="12"-->
<!--      md="4"-->
<!--      order="5"-->
<!--    >-->
<!--      <EcommerceVisitsByDay />-->
<!--    </VCol>-->
<!--  </VRow>-->
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
