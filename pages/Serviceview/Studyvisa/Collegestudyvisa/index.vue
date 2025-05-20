<template>

  <Sidebar :visible="sidebarVisible" position="right"
    class="overflow-scroll w-[95vw] sm:w-[60rem] md:w-[80rem] lg:w-[70rem] xl:w-[79rem] 2xl:w-[95rem] bg-[#f4f7fe]"
    title="CSV Upload Status">

    <button @click="$emit('update:visible', false)"
      class="absolute top-4 right-4 text-4xl text-gray-500 hover:text-black z-50" aria-label="Close">
      &times;
    </button>


    <div class="main-container">
      <div id="Overview">
        <ProfileBreadcrumb :data="breadcrumbata" :activeTab="activeTab" @tab-selected="handleTabChange" />

        <ProfileOverview :data="overviewdata" />
      </div>
      <div id="More Details">
        <ProfileAdditionalDetails :data="addditional_detail" />
      </div>
      <div id="Program">
        <ProfilePrograms :data="program_detail" />
      </div>
      <ProfileMedia :data="this.listingData.media_list"  />
      <ProfileTestimonials />
      <div id="Custom Tab">
        <ProfileCustomTab :data="this.listingData.tabs" />
      </div>

    </div>
  </Sidebar>

</template>


<script>
import ProfileBreadcrumb from '../Components/ProfileBreadcrumb.vue';
import ProfileOverview from '../Components/ProfileOverview.vue';
import ProfileAdditionalDetails from '../Components/ProfileAdditionalDetails.vue';
import ProfilePrograms from '../Components/ProfilePrograms.vue';
import ProfileMedia from '../Components/ProfileMedia.vue';
import ProfileCustomTab from '../Components/ProfileCustomTab.vue';
import ProfileTestimonials from '../Components/ProfileTestimonials.vue';
import ProfilePopup from '../Components/ProfilePopup.vue';
export default {
  components: {
    ProfileBreadcrumb,
    ProfileOverview,
    ProfileAdditionalDetails,
    ProfilePrograms,
    ProfileMedia,
    ProfileTestimonials,
    ProfileCustomTab,
    ProfilePopup
  },
  data() {
    return {
      addSidebar: false,
      breadcrumbata: null,
      overviewdata: null,
      addditional_detail: null,
      program_detail: null,
      activeTab: 'Overview'
    }
  },
  props: {
    sidebarVisible: Boolean,
    listingData: Object,
  },
  emits: ['update:sidebarVisible'],
  watch: {
    listingData: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.breadcrumbata = {
            cover_image: newVal.cover_image,
            logo: newVal.logo,
            title: newVal.title,
            location: newVal.collegeStudyVisa?.location.length,
            program: newVal.collegeStudyVisa?.programs.length,
            program_field: newVal.collegeStudyVisa?.program_category.length,
            website: newVal.collegeStudyVisa?.college_website_link,
          };
          this.overviewdata = {
            overview: this.listingData?.description,
            brochure: this.listingData?.collegeStudyVisa?.collegeBrouchure
          };
          this.addditional_detail = {
            finacial_sponsorship: this.listingData?.collegeStudyVisa?.finacial_sponsorship,
            health_insurance: this.listingData?.collegeStudyVisa?.health_insurance,
            language_proficiency_requirement: this.listingData?.collegeStudyVisa?.language_proficiency_requirement,
            living_expenss: this.listingData?.collegeStudyVisa?.living_expenss,
            language_score: this.listingData?.collegeStudyVisa?.language_score,
            accoummodation_available: this.listingData?.collegeStudyVisa?.accoummodation_available,
            visa_sponsor: this.listingData?.collegeStudyVisa?.visa_sponsor,
            // finacial_sponsorship: this.listingData.collegeStudyVisa?.finacial_sponsorship,

          };
          this.program_detail = {
            location: this.listingData.collegeStudyVisa?.location,
            program_category: this.listingData.collegeStudyVisa?.program_category,
            program: this.listingData.collegeStudyVisa?.programs,
            title: newVal.title
          }

        }
      }
    }
  },

  methods: {
    openAddSidebar() {
      this.addSidebar = true;
    },
    handleTabChange(tab) {
      this.activeTab = tab;
      this.scrollToTab(tab);
    },
    scrollToTab(tab) {
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
</script>
<style scoped>
.main-container {
  margin: 70px 42px;
}

@media (max-width: 425px) {
  .main-container {
    margin: 40px 2px;
  }
}

@media only screen and (min-width: 850px) and (max-width: 1050px) {
  .main-container {
    margin: 40px 12px;
  }
}

@media only screen and (min-width: 426px) and (max-width: 850px) {
  .main-container {
    margin: 40px 7px;
  }
}
</style>