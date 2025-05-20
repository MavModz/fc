<!-- @format -->

<template>
  <div class="rating_box " v-if="reviews">
    <div class="">
      <!-- <div class="flex items-center gap-[12px] pb-[40px]">
        <span class="text-[#9691A4] font-normal">Dynamic Tag</span>
        <img class="w-[5px]" src="/public/img/svg/right_arrow.svg" alt="" />
        <span class="text-[#FF5757] font-normal underline">Current Page</span>
      </div> -->
      <div class="company-review-heading h2 d-flex justify-content-center align-items-center  text-center ">
        <h2>Review & Ratings for {{ company?.company_name }}</h2>
      </div>

      <div class="row">
        <div class="company-review-list row d-flex gap-x-20 gap-y-6 ">
          <h3 class="tittle_25 text-[24px] fontt-bold text-[[#1f1b2d]]">
            Average rating
          </h3>
          <div class="col-md-5">

            <div class=" ">
              <div>
                <div class=" d-flex rating_inner_right">
                  <div>
                    <h4>{{ reviews.avg_rating }}</h4>
                  </div>
                  <div>
                    <!-- <p>
                    <img v-for="i in Math.floor(Number(reviews.avg_rating))" :key="i" src="/img/svg/Star.svg"
                      alt="rating" />
                  </p> -->

                    <p>
                      <img v-for="i in fullStars" :key="'full-' + i" src="/img/svg/Star.svg" alt="Full Star" />

                      <img v-if="hasHalfStar" src="/img/svg/star-f.svg" alt="Half Star" />

                      <img v-for="i in emptyStars" :key="'empty-' + i" src="/img/svg/star-b.svg" alt="Empty Star" />
                    </p>
                    <span>{{ reviews.total_review_count }} reviews</span>
                  </div>

                </div>
              </div>
              <div>
                <div class="rating_inner py-2">
                  <div class="rating_inner_f">
                    <p>
                      5
                      <img src="/img/svg/star-b.svg" alt="rating" />
                    </p>
                  </div>
                  <div class="rating_inner_se">
                    <div class="w3-border">
                      <ProgressBar :value="(reviews.rating_counts[4].rating_5 * 100) /
                        reviews.total_review_count
                        " :showValue="false">
                      </ProgressBar>
                    </div>
                  </div>
                  <div class="rating_inner_th">
                    <p>
                      {{
                        reviews.total_review_count > 0
                          ? Math.round(
                            (reviews.rating_counts[4].rating_5 * 100) /
                            reviews.total_review_count,
                          )
                          : 0
                      }}%
                    </p>
                  </div>
                </div>

                <div class="rating_inner py-2">
                  <div class="rating_inner_f">
                    <p>
                      4
                      <img src="/img/svg/star-b.svg" alt="rating" />
                    </p>
                  </div>
                  <div class="rating_inner_se">
                    <div class="w3-border">
                      <ProgressBar :value="(reviews.rating_counts[3].rating_4 * 100) /
                        reviews.total_review_count
                        " :showValue="false">
                      </ProgressBar>
                    </div>
                  </div>
                  <div class="rating_inner_th">
                    <p>
                      {{
                        reviews.total_review_count > 0
                          ? Math.round(
                            (reviews.rating_counts[3].rating_4 * 100) /
                            reviews.total_review_count,
                          )
                          : 0
                      }}%
                    </p>
                  </div>
                </div>

                <div class="rating_inner py-2">
                  <div class="rating_inner_f">
                    <p>
                      3
                      <img src="/img/svg/star-b.svg" alt="rating" />
                    </p>
                  </div>
                  <div class="rating_inner_se">
                    <div class="w3-border">
                      <ProgressBar :value="(reviews.rating_counts[2].rating_3 * 100) /
                        reviews.total_review_count
                        " :showValue="false">
                      </ProgressBar>
                    </div>
                  </div>
                  <div class="rating_inner_th">
                    <p>
                      {{
                        reviews.total_review_count > 0
                          ? Math.round(
                            (reviews.rating_counts[2].rating_3 * 100) /
                            reviews.total_review_count,
                          )
                          : 0
                      }}%
                    </p>
                  </div>
                </div>

                <div class="rating_inner py-2">
                  <div class="rating_inner_f">
                    <p>
                      2
                      <img src="/img/svg/star-b.svg" alt="rating" />
                    </p>
                  </div>
                  <div class="rating_inner_se">
                    <div class="w3-border">
                      <ProgressBar :value="(reviews.rating_counts[1].rating_2 * 100) /
                        reviews.total_review_count
                        " :showValue="false">
                      </ProgressBar>
                    </div>
                  </div>
                  <div class="rating_inner_th">
                    <p>
                      {{
                        reviews.total_review_count > 0
                          ? Math.round(
                            (reviews.rating_counts[1].rating_2 * 100) /
                            reviews.total_review_count,
                          )
                          : 0
                      }}%
                    </p>
                  </div>
                </div>

                <div class="rating_inner py-2">
                  <div class="rating_inner_f">
                    <p>
                      1
                      <img src="/img/svg/star-b.svg" alt="rating" />
                    </p>
                  </div>
                  <div class="rating_inner_se">
                    <div class="w3-border">
                      <ProgressBar :value="(reviews.rating_counts[0].rating_1 * 100) /
                        reviews.total_review_count
                        " :showValue="false">
                      </ProgressBar>
                    </div>
                  </div>
                  <div class="rating_inner_th">
                    <p>
                      {{
                        reviews.total_review_count > 0
                          ? Math.round(
                            (reviews.rating_counts[0].rating_1 * 100) /
                            reviews.total_review_count,
                          )
                          : 0
                      }}%
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="flex flex-wrap gap-3 pt-50 mb-4 items-center justify-between max-[375px]:justify-center">
              <div class="cursor-pointer ">
                <a v-if="me.isLogged" @click="AddReviewModal = true" class="add_review_btn site-btn-2 hover-effect">
                  <i class="bi bi-pencil-square"></i>
                  Add review
                </a>
                <a v-else href="/auth/login" class="add_review_btn site-btn-2 hover-effect">
                  <i class="bi bi-pencil-square"></i>
                  Add review
                </a>
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="text-[#666276] text-[17px] font-normal"><i class="bi bi-filter-right"></i> Sort By:</span>
                <div class="w-[140px]">
                  <FormKit type="select" v-model="selectedTab" class="form-select" placeholder="Select" name="reveiw"
                    validation="" :options="['Newest', 'Oldest']" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 review-list">
            <div v-if="reviews.all_reviews.length > 0" class="rating_cl_box">
              <DataView :value="reviews.all_reviews" paginator :rows="5" :alwaysShowPaginator="false">
                <template #list="slotProps">
                  <div class="grid grid-nogutter">
                    <div v-for="(i, index) in slotProps.items" :key="index"
                      class="col-12 mb-[30px] border-b border-b-[#efecf3]">
                      <div class="rating_cl_top">
                        <div class="row">
                          <div class="col-8">
                            <div class="rating_cl_p mb-0">
                              <div class="rating_cl_img">
                                <!-- {{ i }} -->
                                <img :src="i?.profile_image" alt="" />
                              </div>
                              <div class="rating_cl_con">
                                <h5>{{ i.name }}</h5>
                                <p class="star-display-annete">
                                  <img v-for="j in i.rating" src="/img/svg/Star.svg" alt="rating" />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="col-4">
                            <p class="rating_cl_date">
                              {{ DateFormat(i.created_at).month }}
                              {{ DateFormat(i.created_at).day }},
                              {{ DateFormat(i.created_at).year }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{{ i.review }}</p>
                    </div>
                  </div>
                </template>
              </DataView>
            </div>

            <div v-else class="rating_cl_box">
              <div class="rating_cl_top">No Reviews Yet</div>
              <p>Be The First One To Write The Review</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

  <Dialog v-model:visible="AddReviewModal" modal header="Add Review" :style="{'min-width': '350px'}">
    <FormKit type="form" @submit="submitForm">
      <div class="upload-image-box">
        <div class="input-field">
          <label for="field-name">Rating</label>
          <FormKit validation="required" name="rating" type="select" :options="[5, 4, 3, 2, 1]" />
        </div>
        <div class="input-field">
          <label for="field-name">Review</label>
          <FormKit validation="required" name="review" type="text" placeholder="Add your review" />
        </div>
        <div class="button-container py-3">
          <button class="site-btn-2 w-[-webkit-fill-available] rounded-md bg-[#ff5757] text-[#fff] pt-[8px] pb-[8px]"
            type="submit" id="upload-btn">
            Submit Review
          </button>
        </div>
      </div>
    </FormKit>
  </Dialog>
</template>

<script>
export default {
  name: 'CompanyReviews',
  props: {
    company: {},

  },
  data() {
    return {
      reviews: null,
      AddReviewModal: false,

      selectedTab: null,
      storeIdMount: null,
      storePermMount: null,

    };
  },

  async setup() {
    const me = ((await useFetch('/api/users/admin')).data).value
    return { me }
  },
  async mounted() {
    this.storeIdMount = this.$route.params.id;
    const [companyName, CompanyIdMount] = this.storeIdMount.split('-');
    this.storePermMount = CompanyIdMount;
    this.reviews = (
      await homeGet(`/home-company-review/${this.storePermMount}`)
    ).data.data;
  },
  computed: {
    fullStars() {
      return Math.floor(Number(this.reviews.avg_rating)); // Full stars count
    },
    hasHalfStar() {
      return this.reviews.avg_rating % 1 !== 0; // Check if there's a decimal part
    },
    emptyStars() {
      return 5 - this.fullStars - (this.hasHalfStar ? 1 : 0); // Remaining empty stars
    }
  },
  watch: {
    selectedTab(newValue) { // This will log the selected value whenever it changes
      if (newValue === "Oldest") {

        this.reviews.all_reviews.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

      }
      if (newValue === "Newest") {

        this.reviews.all_reviews.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      }
    },
  },
  methods: {
    async getreview() {
      try {
        this.reviews = (
          await homeGet(`/home-company-review/${this.storePermMount}`)
        ).data.data;
      } catch (error) {

      }
    },
    async submitForm(v) {
      this.AddReviewModal = false;
      await userPost(`/add-company-review/${this.storePermMount}`, v).then(
        (response) => {
          if (response.data.status) {
            this.getreview()
            successAlert("Successfully add the review! ")
          } else {
            errorAlert(response.data.msg);
          }
        },
      );
    },
  },
};
</script>

<style scoped>
@import url('../style.css');

a.hover-effect:hover {
    background: white !important; 
    color: #FF5757 !important; 
  }
.review-list {
  max-height: 400px;
  overflow-y: auto;
}

.review-list::-webkit-scrollbar {
  display: none;
}

.company-review-heading {
  display: flex !important;
  justify-content: left !important;
  align-items: left !important;
}
</style>