<template>
  <div class="d-flex items-center gap-x-[15px]">
    <NuxtLink to="/subadmin/leads/view" class="lead-tab" :class="{ active: isActiveTab('/subadmin/leads/view') }">
      Leads
    </NuxtLink>
    <NuxtLink to="/subadmin/leads/followup" class="lead-tab"
      :class="{ active: isActiveTab('/subadmin/leads/followup'), 'followHigh': isActiveTab('/subadmin/leads/view') }">
      <span class="follow-up-count"
        :class="{ 'follow-active': isActiveTab('/subadmin/leads/followup'), 'follow-default': isActiveTab('/subadmin/leads/view') || isActiveTab('/subadmin/leads/incomplete') }">{{followup}}
      </span>Follow-up Leads
    </NuxtLink>
    <NuxtLink to="/subadmin/leads/incomplete" class="lead-tab"
      :class="{ active: isActiveTab('/subadmin/leads/incomplete'), 'highlighted': isActiveTab('/subadmin/leads/view') || isActiveTab('/subadmin/leads/followup') }">
      <span class="incomplete-lead-count" :class="{ 'incomplete-active': isActiveTab('/subadmin/leads/incomplete'),
        'incomplete-default': isActiveTab('/subadmin/leads/followup') || isActiveTab('/subadmin/leads/view')
       }">
        {{ customers }} </span>
      Incomplete Leads
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data(){
    return{
      followup :0,
      customers:0
    }
  },
 async mounted(){
    await this.countFollowup()
    await this.countIncompleteLead()
  },
  methods: {
    isActiveTab(route) {
      return this.$route.path === route;
    },
    async countFollowup() {
      try {
        this.loading = true; 
        const response = await adminPost(`/view-followup`);
      
        if (response && response.data && response.data.data) {
        
          const followupCount = response.data.data.length;
          this.followup = followupCount < 10 ? `0${followupCount}` : followupCount.toString();
        } else {
          console.error("Invalid response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching follow-up data:", error);
      } finally {
        this.loading = false; 
      }
    },
    async countIncompleteLead() {
      try {
        this.loading = true; 
        const response = await adminGet(`/subadmin-all-incomplete-leads`);
      
        if (response && response.data && response.data.data) {
        
          const followupCount = response.data.data.length;
          this.customers = followupCount < 10 ? `0${followupCount}` : followupCount.toString();
        } else {
          console.error("Invalid response structure:", response);
        }
      } catch (error) {
        console.error("Error fetching follow-up data:", error);
      } finally {
        this.loading = false; 
      }
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
.follow-up-count{
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

.incomplete-lead-count{
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
