<template>
  <div class="d-flex items-center gap-x-[15px]">
    <NuxtLink to="/admin/leads/view" class="lead-tab" :class="{ active: isActiveTab('/admin/leads/view') }">
      Leads
    </NuxtLink>
    <NuxtLink to="/admin/leads/followup" class="lead-tab"
      :class="{ active: isActiveTab('/admin/leads/followup'), 'followHigh': isActiveTab('/admin/leads/view') }">
      <span class="follow-up-count"
        :class="{ 'follow-active': isActiveTab('/admin/leads/followup'), 'follow-default': isActiveTab('/admin/leads/view') || isActiveTab('/admin/leads/incomplete') }">{{ followup }}
      </span>Follow-up Leads
    </NuxtLink>
    <NuxtLink to="/admin/leads/incomplete" class="lead-tab"
      :class="{ active: isActiveTab('/admin/leads/incomplete'), 'highlighted': isActiveTab('/admin/leads/view') || isActiveTab('/admin/leads/followup') }">
      <span class="incomplete-lead-count" :class="{
        'incomplete-active': isActiveTab('/admin/leads/incomplete'),
        'incomplete-default': isActiveTab('/admin/leads/followup') || isActiveTab('/admin/leads/view')
      }">
        {{ customers }} </span>
      Incomplete Leads
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followup: 0,
      customers: 0,
      count:null
    }
  },
  async mounted() {
    let count =( await adminGet(`/admin-leadcounts`)).data;
    this.followup=count.followupCounts
    this.customers=count.leadCount
  },
  methods: {
    isActiveTab(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style>
.lead-tab {
  border: 1px solid #a5a5a5;
  padding: 10px 15px;
  color: #676b6c;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: #fff;
}

.lead-tab.active {
  background-color: #ff5757;
  color: #fff;
  border: none;
}

.lead-tab.highlighted {
  color: #ff5757;
  font-weight: 400;

}

.lead-tab.followHigh {
  color: #676b6c;
  font-weight: 400;

}

.incomplete-tab.highlighted {
  color: red;
}

.incomplete-lead-count.highlight-count {
  background-color: #ff5757;
  color: #fff;
  padding: 3px;
  border-radius: 15px;
  margin-inline-end: 5px;
}

.follow-up-count {
  padding: 3px;
  border-radius: 15px;
  margin-inline-end: 5px;
}

.follow-up-count.follow-active {
  background-color: #fff;
  color: #ff5757;
}

.follow-up-count.follow-default {
  background-color: #5d6b98;
  color: #fff;
}

.incomplete-lead-count {
  padding: 3px;
  border-radius: 15px;
  margin-inline-end: 5px;
}

.incomplete-lead-count.incomplete-active {
  background-color: #fff;
  color: #ff5757;
}

.incomplete-lead-count.incomplete-default {
  background-color: #ff5757;
  color: #fff;
}
</style>
