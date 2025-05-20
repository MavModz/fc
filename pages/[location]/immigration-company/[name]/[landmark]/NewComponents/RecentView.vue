<!-- @format -->

<template>
  <div v-if="recentStore.length > 0" class="offers-container">
    <div class="d-flex flex-wrap justify-content-between gap-2  px-lg-4 px-md-3 px-sm-2 px-xs-1 py-2 custom-paddmedia">
      <div class="d-flex flex-wrap gap-x-8 gap-y-4 items-center">
        <h2 style="margin-bottom: 0px"
          class="study-newabr-head text-[24px] sm:text-[24px] md:text-[26px] lg:text-[30px]">
          Similar companies as {{ $route.params.name }}
        </h2>
        <div v-for="(i, index) in countries_Service" :key="index">
          <span class="countries_newservice" tabindex="0" @click="filterCountry(i)">{{ i }}</span>
        </div>
      </div>

      <div @click="goToSearch('business-listing', 'Study Visa')" class="d-flex align-items-center gap-3">
        <NuxtLink class="ms-4">View all <i class="bi bi-arrow-right w-4"></i></NuxtLink>
      </div>
    </div>
    <div v-if="loading" class="loading-indicator">Loading...</div>
    <div id="container" ref="container" v-else>
      <div id="slider-container">
        <span type="button" v-if="prevKeyActive || nextKeyActive" @click="slideRight"
          :class="['', { inactive: !prevKeyActive }]" class="p-carousel-prev p-link top-[33%] left-[0px!important]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="p-icon p-carousel-next-icon" aria-hidden="true" data-pc-section="previousbuttonicon">
            <path
              d="M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z"
              fill="currentColor"></path>
          </svg>
        </span>
        <div id="slider" :style="{ marginLeft: currentMargin + '%' }" ref="slider">
          <!-- First Slide -->
          <div v-if="recentStore && recentStore.length"
            v-for="(i, index) in recentStore.filter(store => store._id !== storePermMount)" :key="index"
            class="slide rounded-2xl w-[-webkit-fill-available] p-[5px]">
            <div class="accomodation">

              <NuxtLink
                :to="`/${i?.state}/immigration-company/${i?.company_name?.replaceAll(' ', '-')}/${i?.landmark.replaceAll(' ', '-')}/f&c-${i?._id}/about-us`"
                class="w-[-webkit-fill-available]">
                <div class="recently-card">
                  <div id="recent-backgryy" class="relative">
                    <div class="card-img-top-cmpany">
                      <img :src="i.cover_image" alt="blog-img" />
                    </div>
                    <span class="bkmrkd-absf" style="cursor: pointer;">
                      <img src="/img/svg/wish.svg" alt="Wishlist" />
                    </span>
                    <div class="card-body crdbd-padre">
                      <h5 class="card-title">{{ i.company_name }}</h5>
                      <div class="d-flex gap-x-[10px]">
                        <div class="flex items-center gap-2 w-[78px]">
                          <img src="/img/svg/Star.svg" alt="Rating" />
                          <span class="rating-text">{{
                            i.average_review
                            }}</span>
                          <span class="rating-percent">({{ i.total_reviews }})</span>
                        </div>
                        <p class="re_p2">
                          <i class="bi bi-geo-alt"></i>
                          {{ i.state }}, {{ i.country }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <span type="button" v-if="prevKeyActive || nextKeyActive" @click="slideLeft"
          :class="['', { inactive: !nextKeyActive }]" class="p-carousel-next p-link top-[33%] right-[0px!important]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="p-icon p-carousel-prev-icon" aria-hidden="true" data-pc-section="nextbuttonicon">
            <path
              d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
              fill="currentColor"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// import types from '@pinia/nuxt';

export default {
  name: 'RecentView',
  data() {
    return {
      currentPosition: 0,
      currentMargin: 0,
      slidesPerPage: 0,
      slidesCount: 0,
      prevKeyActive: false,
      nextKeyActive: false,
      data: [],
      loading: true,
      loading: false,
      isActive: 0,
      countries: null,
      recentStore: [],
      storeIdMount: null,
      storePermMount: null,
    };
  },

  async mounted() {
    this.storeIdMount = this.$route.params.id;
    const [companyName, CompanyIdMount] = this.storeIdMount.split('-');
    this.storePermMount = CompanyIdMount;
    await this.recentView();
    this.checkWidth();
    window.addEventListener('resize', this.checkWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkWidth);
  },
  methods: {
    goToSearch(activeButtonValue, categoryValue) {
      this.$router.push({
        path: '/search',
        query: {
          activeButton: activeButtonValue,
          category: categoryValue
        },
      });
    },
    async recentView() {
      let res = await homeGet(`/company-recent-view`);
      this.recentStore = res.data.data;
    },
    checkWidth() {
      const containerWidth = this.$refs?.container?.offsetWidth;
      this.setParams(containerWidth);
    },
    setParams(width) {
      if (width < 650) {
        this.slidesPerPage = 1;
      } else if (width < 901) {
        this.slidesPerPage = 2;
      } else if (width < 1101) {
        this.slidesPerPage = 2;
      } else if (width < 1651) {
        this.slidesPerPage = 3;
      } else {
        this.slidesPerPage = 4;
      }

      this.slidesCount = this.recentStore.length - this.slidesPerPage;
      if (
        this.currentPosition > this.slidesCount ||
        this.recentStore.length <= this.slidesPerPage
      ) {
        this.currentPosition = 0;
      }
      this.updateMargin();
      this.updateButtonsState();
    },
    updateMargin() {
      // Align the slides left if there are fewer slides than the number of slides per page
      if (this.recentStore.length <= this.slidesPerPage) {
        this.currentMargin = 0;
      } else {
        this.currentMargin = -this.currentPosition * (100 / this.slidesPerPage);
      }
    },
    updateButtonsState() {
      this.prevKeyActive = this.currentPosition > 0;
      this.nextKeyActive = this.currentPosition < this.slidesCount;
      if (this.recentStore.length <= this.slidesPerPage) {
        this.prevKeyActive = false;
        this.nextKeyActive = false;
      }
    },
    slideRight() {
      if (this.prevKeyActive) {
        this.currentPosition--;
        this.updateMargin();
        this.updateButtonsState();
      }
    },
    slideLeft() {
      if (this.nextKeyActive) {
        this.currentPosition++;
        this.updateMargin();
        this.updateButtonsState();
      }
    },
    handleClick(index) {
      this.isActive = index;
    },
  },
};
</script>

<style scoped>
@import url('../style.css');

.customcs-padd {
  padding: 10px 0px;
}

/** @format */

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

::-webkit-scrollbar-track {
  border: 0px solid #e8e8e8;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg,
      var(--color-background),
      var(--color-background));
}

#study-carousel-widthcont {
  max-width: 400px;
  width: 100%;
}

.offers-container {
  width: 100%;
  margin: 0px !important;
  border-radius: 20px;
}

.btn-container {
  display: flex;
  /* justify-content: space-between; */
  width: 60%;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  align-items: center;
  border-bottom: 0.2px solid #bdbdbd;
}

.btn-container>span {
  cursor: pointer;
}

.btn-container>.active {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f5f5f5;
  padding: 6px 20px;
  border-radius: 6px;
  color: #3c3c3c;
}

.btn-container>.active::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
}

.scroll-btn {
  width: 30px;
  height: 30px;
  background: linear-gradient(81.8deg,
      rgba(242, 60, 60, 0.15) 9.52%,
      rgba(242, 60, 60, 0.1) 67.4%);
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0px 2.46px 11.08px 0px #0d5ef43d;
}

.cards>img {
  width: 1000px;
}

.cards {
  max-width: 400px;
  width: fit-content;
  box-shadow: 0px 0px 11px rgba(34, 35, 58, 0.2);
  padding: 10px;
  border-radius: 18px;
}

.accomodation {
  width: -webkit-fill-available;
  position: relative;
}

.accomodation>img {
  padding: 0px !important;
  border-radius: 12px;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
}

.accomodation>span {
  width: fit-content;
  display: block;
  position: absolute;
  top: 12px;
  right: 12px;
}

.heading {
  color: #3c3c3c;
  font-weight: 700;
  margin: 0;
  font-size: 19px;
}

.scroller {
  width: max-content;
  margin: 0 auto;
  display: flex;
  column-gap: 40px;
  padding-inline: 20px;
}

.image-content {
  position: relative;
}

.image-content>img {
  height: 135px;
  border-radius: 18px;
  max-height: 208px;
  width: -webkit-fill-available;
}

.image-content>.text {
  display: flex;
  align-items: center;
  -moz-column-gap: 20px;
  column-gap: 20px;
  position: absolute;
  bottom: -20px;
  left: 20px;
  z-index: 1;
}

.text>img {
  width: 70px;
  border-radius: 50%;
  height: 70px;
}

.text>h5 {
  font-size: 16px;
  color: #fff;
}

.text-item {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(355.84deg,
      #2c2c2c -0.18%,
      rgba(17, 28, 68, 0) 93.6%);
}

.cards>h3 {
  line-height: 40px;
  font-weight: 600;
}

.rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
}

.rating>button {
  color: #ff5757;
  border: 0.84px solid #ff5757;
  padding: 10px 20px;
  border-radius: 10px;
}

.rating>div {
  border: 1px solid var(--inactive, #a3aed0);
  padding: 10px 20px;
  border-radius: 25px;
}

.rating-text {
  font-weight: 700;
}

.rating-percent {
  color: #9691a4;
  font-weight: 400;
}

.study-newabr-head {
  font-weight: 700;
  color: #1f1b2d;
}

.countries_newservice {
  background-color: #f8f4f8;
  padding: 8px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  height: fit-content;
  line-height: 35px;
}

.countries_newservice:active {
  background-color: #fff;
  color: red;
  padding: 8px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.countries_newservice:focus {
  background-color: #fff;
  color: red;
  padding: 8px 20px;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 480px) {
  .cards {
    max-width: 350px;
  }
}

@media (max-width: 375px) {
  .cards {
    max-width: 314px;
  }
}

#container {
  width: -webkit-fill-available;
  margin: auto;
}

#slider-container {
  position: relative;
  overflow: hidden;
  padding: 20px;
}

#slider-container .btn {
  position: absolute;
  top: calc(50% - 30px);
  height: 30px;
  width: 30px;
  border-left: 8px solid pink;
  border-top: 8px solid pink;
  cursor: pointer;
}

#slider-container .btn:hover {
  transform: scale(1.2);
}

#slider-container .btn.inactive {
  border-color: rgb(153, 121, 126);
  cursor: not-allowed;
}

#slider-container .btn:first-of-type {
  transform: rotate(-45deg);
  left: 10px;
}

#slider-container .btn:last-of-type {
  transform: rotate(135deg);
  right: 10px;
}

#slider-container #slider {
  display: flex;
  width: 1000%;
  height: 100%;
  transition: all 0.5s;
  margin: 0px 0px 25px 0px;
}

#slider-container #slider .slide {
  margin: auto 10px;
  display: grid;
  place-items: center;
}

.inactive {
  cursor: not-allowed;
  opacity: 0.5;
  /* Reduce opacity to indicate disabled state */
  pointer-events: none;
  /* Prevent clicking on the button */
}

.offers-container {
  margin-top: 20px;
}

@media only screen and (min-width: 1850px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1850px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 18px);
  }
}

@media only screen and (max-width: 1829px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1800px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1750px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1700px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 82%;
  }
}

@media only screen and (max-width: 1650px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1600px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1550px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1500px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1450px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1400px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }

  .offers-container {
    width: 100%;
  }
}

@media only screen and (max-width: 1350px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1300px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1250px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1220px) {
  #slider-container #slider .slide {
    width: calc(3.33% - 20px);
  }
}

@media only screen and (max-width: 1150px) {
  #slider-container #slider .slide {
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 1100px) {
  #slider-container #slider .slide {
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 1050px) {
  #slider-container #slider .slide {
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 1000px) {
  #slider-container #slider .slide {
    width: calc(3% - -151px);
  }
}

@media only screen and (max-width: 991px) {
  #slider-container #slider .slide {
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 900px) {
  #slider-container #slider .slide {
    width: calc(5% - 20px);
  }
}

@media only screen and (max-width: 700px) {
  #slider-container #slider .slide {
    width: calc(10% - 20px);
  }

  #slider-container {
    padding: 0;
  }
}

@media only screen and (max-width: 576px) {
  #container {
    width: 100%;
  }
}

@media only screen and (max-width: 550px) {
  #slider-container #slider .slide {
    width: calc(10% - 20px);
  }
}

@media only screen and (max-width: 450px) {
  .offers-container {
    margin-top: 5px;
  }

}

@media only screen and (max-width: 950px) {
  .custom-paddmedia {
    padding: 0px 25px 10px 25px !important;
  }
}

@media only screen and (max-width: 650px) {
  .custom-paddmedia {
    padding: 0px 20px 10px 20px !important;
  }
}
</style>
