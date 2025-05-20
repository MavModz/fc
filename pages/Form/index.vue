<template>
  <div>
    <div v-if="form && form.company_id" class="flex justify-center items-center mt-5">
      <img :src="form.company_id.symbol" alt="" width="150px">
    </div>
    <CompanyDetail :company="form.company_id" v-if="form" />

    <div class="form-url-wrapper m-4">
      <div>
        <p class="formName">Need Title Here</p>
      </div>
      <FormKit type="form" @submit="submitForm">
        <div class="flex flex-wrap gap-3">
          <div class="flex-1 min-w-[220px]">
            <FormKit type="text" validation="required" label="Full Name" name="name" placeholder="Full Name"
              validation-label="Full Name" />
          </div>
          <div class="flex-1 min-w-[220px]">
            <FormKit type="text" validation="required" label="Phone Number" name="phone" placeholder="Phone Number"
              validation-label="Phone Number" @keypress="restrictToNumbers"/>
          </div>
          <div class="flex-1 min-w-[220px]">
            <FormKit type="email" validation="required|email" label="Email" name="email" placeholder="Email ID"
              validation-label="Email Id" />
          </div>
        </div>
        <button type="submit"
          class="mt-6 bg-red-500 text-white py-2 px-4 rounded-full text-lg flex items-center justify-center">
          Submit & Proceed
          <i class="bi bi-chevron-right"></i>
        </button>
      </FormKit>
    </div>


  </div>

</template>

<script>
import CompanyDetail from '../[location]/immigration-company/[name]/[landmark]/NewComponents/CompanyDetail.vue';

// definePageMeta({ layout: 'home' })

export default {

  data() {
    return {
      form: null,
    }
  },
  components: { CompanyDetail },
  async mounted() {
    this.form = (await homeGet(`/home-forms/${this.$route.query.id}`)).data.data;
  },
  methods: {
    submitForm(v) {
      this.$router.push(`/form/${this.$route.query.id}?email=${v.email}&name=${v.name}&phone=${v.phone}`)
    }
  }
}

</script>

<style scoped>
@import url('style.css');

.card-section {
  width: auto;
  padding: 25px !important;
  border: 1px solid #d7dce4;
  border-radius: 10px;
  margin: 20px;
}
</style>