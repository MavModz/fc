<!-- @format -->
 
<template lang="">
  <div class="">
    <div class="tab-content">
      <section class="user-details">
        <div class="languages">
          <div class="gallery-media-action">
            <div class="gallery-action">
              <div
                class="d-flex flex-wrap gap-3"
                style="width: -webkit-fill-available"
              >
                <div class="search-container">
                  <img src="/img/svg/search-icon.svg" />&nbsp;&nbsp;
                  <input type="text" placeholder="Search"  v-model="searchQuery" />
                </div>
              </div>
            </div>
          </div>
          <section>
            <div class="col-sm-12">
              <div class="row">
            <DataView :value="filteredAgreements" paginator :rows="9" :alwaysShowPaginator="false">
              <template #list=s>
                <div class="flex flex-wrap">
                  <agreementCard v-for="agreement in s.items" :key="agreement._id" :agreementData="agreement" :agreementName="agreement?.agreement_id?.document_title" :companyName="agreement?.company_id?.company_name" :Date="formatDate(agreement?.requested_date)" :requestedBy="agreement?.requested_by?.name" :serviceName="agreement?.agreement_id?.service_name" :accepted="agreement?.accepted" @viewAgreement="openAgreementModal" :companyLogo="agreement.company_id?.symbol"/>
                </div>
              </template>
                
              
            </DataView>
          </div>
        </div>
            
            <!-- Loading state -->
            <p v-if="loading" class="text-center">Loading Agreements...</p>
            <!-- Empty state -->
            <p v-if="!loading && filteredAgreements.length === 0" class="text-center">
              No Agreements found.
            </p>
          </section>
        </div>
      </section>
    </div>
        <!-- First Modal -->
    <Dialog v-model:visible="Modal" modal header="Agreement" :style="{ 'width': '50% !important' }" :draggable="false">
      <FormKit type="form" @submit="AcceptAgreement" class="leads-form-style">
        <div v-html="ctContent"></div>
        <div class="digital-sign">
          <FormKit type="text" name="name" placeholder="Your Name" v-model="form.name" validation="required" />
          <FormKit type="text" name="location" placeholder="Your Location" v-model="form.location" validation="required" />
        </div>
        <div class="modal-footer-section">
          <button type="submit" class="btn btn-success btn-btn-cancel">Accept</button>
        </div>
      </FormKit>
    </Dialog>

    <!-- Second Modal -->
    <Dialog v-model:visible="Modal2" modal header="Agreement" :style="{ 'width': '50% !important' }" :draggable="false">
      <div v-html="selectedAgreement?.agreement_id?.html_content"></div>
      <div class="modal-footer-section">
        <button type="submit" class="btn btn-danger btn-btn-dle-appt" @click="Modal2 = false">
          Close
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script>
definePageMeta({
  layout: 'user',
  middleware: ['user'],


});

import { viewAgreement, acceptAgreement } from '~/utils/libs/services/api';
import agreementCard from './components/agreementCard.vue';

export default {
  async mounted() {
    // activateSubmenu('b4', 'Agreements');
    activateMenu('agreem', 'Agreements');
    await userGet("/user-agreements-list")
      .then((response) => {
      })
      .catch((error) => {
        console.error("Error fetching user agreements:", error);
      });

    this.fetchAgreements();

    await userGet(`/view-user-details`).then((response) => {
      if (response.status) {
        this.user = response.data.user
      }
    })
  },

  data() {
    return {
      loading: false,
      user: null,
      company: null,
      date: new Date(),
      agreements: [],
      searchQuery: "",
      Modal: false,
      Modal2: false,
      selectedAgreement: null,
      processedContent: "",
      form: { // New object to store form values
        name: "",
        location: ""
      },
    }
  },

  components: {
    agreementCard,
  },

  computed: {
    filteredAgreements() {
      const query = this.searchQuery.toLowerCase();
      return this.agreements.filter((agreement) => {
        const matchesSearch = agreement?.agreement_id?.document_title.toLowerCase().includes(query);
        return matchesSearch;
      });
    },

    ctContent() {
      if (!this.company) return "";
      return this.processedContent
        .replace("[Customer Name]", this.user.name)
        .replace("[Customer Address]", this.user.address)
        .replace("[Customer Number]", this.user.phone)
        .replace("[Customer Email]", this.user.email)
        .replace("[city name]", this.company.city)
        .replace('[Address]', this.company.address)
        .replace('[Phone Number]', this.company.phone)
        .replace('[Email ID]', this.company.company_email)
        .replace('[Date & Time]', this.date.getDate())
        .replace('[Company Name]', this.company.company_name)
    },
  },

  methods: {
    async fetchAgreements() {
      try {
        this.loading = true;
        const response = await viewAgreement();
        if (response?.status) {
          this.agreements = response.data;
        }
      } catch (error) {
        console.error("Error Fetching Agreements", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchCompanyDetails(companyId) {
      try {
        const response = await userGet(`/my-service-company/${companyId}`);
        if (response?.status) {
          this.company = response.data; // Store company data
        }
      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
    },
    openAgreementModal(agreement) {
      this.selectedAgreement = agreement; // Store the selected agreement
      const companyId = agreement?.company_id?._id;
      if (companyId) {
        this.fetchCompanyDetails(companyId);
      }
      if (agreement.accepted) {
        this.Modal2 = true; // Show the second modal
      } else {
        this.processedContent = agreement.agreement_id?.html_content || "No content available"; // Load content
        this.Modal = true; // Show the first modal
      }
    },
    async AcceptAgreement() {
      try {
        const agreementId = this.selectedAgreement?._id; // Get the selected agreement ID
        const response = await acceptAgreement(agreementId, this.form); // Call the API with the agreement ID
        if (response?.status) {
          successAlert("Agreement accepted successfully!");
          this.Modal = false; // Close the modal
          this.fetchAgreements(); // Refresh the list
        } else {
          console.error("Failed to accept agreement:", response?.msg || "Unknown error");
          errorAlert(response?.msg || "Failed to accept agreement.");
        }
      } catch (error) {
        console.error("Error accepting agreement:", error);
        errorAlert("An error occurred while accepting the agreement. Please try again.");
      }
    },
  }

};
</script>

<style scoped>
@import url('style.css');
</style>
