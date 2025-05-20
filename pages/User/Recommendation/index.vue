<template>
  <section class="user-details">
    <div class="languages pb-[25px]">
      <div class="gallery-media-action">
        <div class="gallery-action">
          <div class="search-container">
            <img src="/img/svg/search-icon.svg" />&nbsp;&nbsp;
            <input type="text" placeholder="Search Recommendation" v-model="searchQuery" />
          </div>
        </div>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Rating</th>
              <th>Date</th>
              <th>Service</th>
              <th>Listing</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in filteredData" :key="i.customer_id">
              <td>
                <span class="recommend-user-tavle-side">
                  {{ getSlicedContent(i.company_name,25) }}
                </span>
              </td>
              <td>
                <div class="details d-flex align-items-center flex-wrap gap-2">
                  <span><img style="margin-bottom: 5px" src="/img/svg/Star.svg" alt="" /></span>
                  <span>{{ i.average_review }}</span>
                  <span>({{ i.total_review }})</span>
                </div>
              </td>
              <td>
                {{ DateFormat(i.date).month }}
                {{ DateFormat(i.date).day }},
                {{ DateFormat(i.date).year }}
              </td>
              <td>
                <span>{{ i.service_name }}</span>
              </td>
              <td>
                <span>{{ i.count }} Listings</span>
              </td>
              <td>
                <span>{{ i.status }} </span>
              </td>
              <td>
                <div class="btn-group">
                  <span class="td-btn">
                    <NuxtLink
                      :to="`/user/recommendation/view/${i?.customer_id}?service_name=${encodeURIComponent(i.service_name)}`">
                      <img src="/img/svg/eye.svg" alt="" style="width: -webkit-fill-available" />
                    </NuxtLink>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </section>
</template>

<script>
definePageMeta({
  layout: 'user',
  middleware: ['user'],
});

export default {
  data() {
    return {
      loading: false,
      suggestion: null,
      searchQuery: "",
    };
  },
  async setup() {
    const data = (await useFetch('/api/users/admin')).data.value;
    return { data }
  },
  async mounted() {
    activateMenu('recommendation', 'Recommendations');
    this.init();
  },
  computed: {
    formattedData() {
      // Ensure that suggestion is properly set before accessing it
      if (!this.suggestion || !Array.isArray(this.suggestion)) {
        return []; // Return an empty array if suggestion is undefined or not an array
      }

      return this.suggestion.flatMap((entry) =>
        entry.services.map((service) => ({
          customer_id: entry.customer_id,
          lead_service_name: entry.serviceName_lead,
          status: service.finalized ? "Finalized" : "Under Process",
          company_name: entry.company_name,
          company_profile_image: entry.company_profile_image,
          average_review: entry.average_review,
          total_review: entry.total_review,
          date: entry.date,
          service_name: service.service_name,
          count: service.count,
        }))
      );
    },

    filteredData() {
      // If formattedData is not available, return empty array
      const formattedData = this.formattedData;
      const query = this.searchQuery.toLowerCase();

      if (formattedData.length === 0) {
        return []; // Return empty array if no formatted data is available
      }

      return formattedData.filter(item =>
        item.company_name.toLowerCase().includes(query) ||
        item.service_name.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    async init() {
      this.loading = true;
      await userGet(`/recommendation-company/${this.data.user.user.email}`).then(
        (response) => {
          if (response.status) {
            this.suggestion = response.data.data;
          }
        },
      );
      this.loading = false;
    },
  },
};
</script>

<style scoped>
@import url('style.css');
</style>
