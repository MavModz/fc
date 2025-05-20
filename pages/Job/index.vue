<!-- @format -->

<template>
  <main>
    <HeroSection />
    <TopBanner />
    <VisaOffers />
    <Tourist />
    <LatestJob />
    <CategoryApp />
    <!--     <AllCategories /> -->
    <!--    <AllCountries />-->
    <AllCompanies />
    <AllEvents />
    <ListingAdvertisement />
    <BannerAdvertisement />
    <!--    <PrVisa />-->
    <!--    <JobVisa />-->
    <AllReviews />
    <AllBlogs />

    <section class="download-app-section pb-5">
      <div class="container">
        <div class="download-app-section-inner">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="download-app-mobile">
                <img src="/img/svg/wireframe.svg" alt="mobile-app" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="download-app-content">
                <h2>Download Our App</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="download-app-content-list">
                  <ul class="list-unstyled">
                    <li>More Personalized Options</li>
                    <li>Learn More Information</li>
                    <li>Find Best Consultants</li>
                    <li>Keeps Things More Secure</li>
                    <li>Compare Prices</li>
                  </ul>
                  <div class="app-store-btn">
                    <a href="#"><img src="/img/png/app-store.png" alt="" /></a>
                    <a href="#"><img src="/img/png/play-store.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HomeMeta from '~/content/HomeMeta.json';
useHead({
  title: HomeMeta['home'].title,
  meta: HomeMeta['home'].meta,
  link: HomeMeta['home'].link,
});
</script>

<script>
import AllBlogs from '~/pages/Home/components/AllBlogs.vue';
import AllReviews from '~/pages/Home/components/AllReviews.vue';
import AllCompanies from '~/pages/Home/components/AllCompanies.vue';
import CategoryApp from '~/pages/Home/components/TopApp.vue';
import ListingAdvertisement from '~/pages/Home/components/ListingAdvertisement.vue';
import AllEvents from '~/pages/Home/components/AllEvents.vue';
import JobVisa from '~/pages/Home/components/JobVisa.vue';
import BannerAdvertisement from '~/pages/Home/components/BannerAdvertisement.vue';
import AllCountries from '~/pages/Home/components/AllCountries.vue';
import PrVisa from '~/pages/Home/components/PrVisa.vue';
import HeroSection from '~/pages/Home/components/HeroSection/index.vue';
import TopBanner from '~/pages/Home/components/TopBanner/index.vue';
import VisaOffers from '~/pages/Home/components/VisaOffers/index.vue';
import Tourist from '~/pages/Home/components/Tourist/index.vue';
import LatestJob from './LatestJob/index.vue';

definePageMeta({
  layout: 'home',
});

export default defineComponent({
  components: {
    HeroSection,
    TopBanner,
    VisaOffers,
    Tourist,
    LatestJob,
    PrVisa,
    AllCountries,
    BannerAdvertisement,
    JobVisa,
    AllEvents,
    ListingAdvertisement,
    CategoryApp,
    AllCompanies,
    AllReviews,
    AllBlogs,
  },
  mounted() {},
});
</script>

<style scoped>
@import url('./home.css');
</style>
