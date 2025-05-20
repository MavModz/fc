<template>
  <div class="tab-navigation">
    <span class="isbuttonTrue">
      <NuxtLink to="/admin/settings/LeadManagement" class="isbuttonTrue">Lead Management Settings</NuxtLink>
    </span>
    <span >
      <NuxtLink class="text-[#A1A5B7]" to="/admin/settings/UserRoleManagement">User and Role Management</NuxtLink>
    </span>
    <span >
      <NuxtLink class="text-[#A1A5B7]" to="/admin/settings/CustomerManagement">Customer Management Settings
      </NuxtLink>
    </span>

    <div class="horizontal-bar-lead"></div>
  </div>

  <Languages />
  <CustomFields />
  <!-- <LeadAutomation :settings="settings" /> -->
  <!-- <Notifications :settings="settings"/> -->
  <LeadStatus />
  <LeadSource/>
  <!-- <WebHooks /> -->
</template>

<script>
import Languages from './Languages/IndexApp.vue';
import CustomFields from './CustomFields/IndexApp.vue';
import LeadAutomation from './LeadAutomation/IndexApp.vue';
import LeadStatus from './LeadStatus/IndexApp.vue';
import LeadSource from './LeadSource/IndexApp.vue';
import Notifications from './Notifications/IndexApp.vue';
// import WebHooks from './WebHooks/IndexApp.vue';

definePageMeta({ layout: 'admin', middleware: ['admincrm'] });

export default {
  components: {
    Languages,
    CustomFields,
    LeadAutomation,
    LeadStatus,
    LeadSource,
    Notifications,
    // WebHooks,
  },
  data() {
    return {
      settings: { loading: false },
    };
  },
  data() {
    return {
      settings: { loading: false },
    };
  },
  async mounted() {
    activateMenu('settings', 'Settings');
    setTimeout(async () => {
      await this.init();
    }, 200);
  },
  methods: {
    async init() {
      this.settings.loading = true;
      await adminGet(`/company-settings`).then(async (response) => {
        this.settings = response.data.data;
      });
      this.settings.loading = false;
    },
  },
};
</script>

<style scoped>
@import url('./style.css');
</style>
