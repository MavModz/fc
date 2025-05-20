<template>


  <div v-if="lead.loading" class="card">
    <div class="border-round border-1 surface-border p-4 surface-card">
      <div class="flex mb-3">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
          <Skeleton height=".5rem" class="mt-2"></Skeleton>
          <Skeleton width="10rem" class="mb-2 mt-2"></Skeleton>
          <Skeleton width="5rem" class="mb-2 mt-1"></Skeleton>
        </div>
      </div>
      <div class="row mt-3">
        <Skeleton width="4rem" height="2rem" class="ms-3"></Skeleton>
        <Skeleton width="4rem" height="2rem" class="ms-3"></Skeleton>
        <Skeleton width="4rem" height="2rem" class="ms-3"></Skeleton>
      </div>
    </div>
  </div>

  <div v-else class="single-lead-profile">
    <div class="single-leads-created">
      <p>Lead Created Date</p>
    </div>
    <div class="single-lead-backg-clr">
      <div class="single-lead-abs-image">
        <img :src="lead.image" alt="">
      </div>
      <div class="single-lead-mail">
        <div class="single-lead-mail-icn">
          <img src="/img/png/red.png" alt="">
        </div>
        <div class="single-lead-june">
          <p>{{ convertDate(lead.date) }}</p>
        </div>
      </div>
    </div>
    <div class="single-lead-name">
      <div class="single-lead-inside-name">
        <span class="single-lead-actmae">
          <p>{{ lead.name }}</p>
        </span>
        <span>
          <div class="mb-3">
            <select v-model="lead.lead_status" id="update-events-drpsemi-leads" class="form-select"
              @change="changeStatus">
              <option :value="i" v-for="i in lead_statuss">{{ i }}</option>
            </select>
          </div>
        </span>
      </div>
      <div class="single-lead-recmd-flx">
        <span>
          <p class="single-leads-two">{{ count.total_appointment }}</p>
          <p class="single-leads-apptmnts">Appointments</p>
        </span>
        <span>
          <p class="single-leads-two">{{ count.total_recommendation }}</p>
          <p class="single-leads-apptmnts">Recommendations</p>
        </span>
        <span>
          <p class="single-leads-two">{{ count.total_documents }}</p>
          <p class="single-leads-apptmnts">Documents</p>
        </span>
      </div>
    </div>
  </div>

  <Dialog v-model:visible="counsellorModal" modal header="Convert To Customer">
    <FormKit type="form"  class="leads-form-style">
      <div>
        <label class="single-lead-cmttitls">Assign Counsellor</label><br />
        <FormKit validation="required" type="select" name="assigned_to" class="single-lead-cmt-mdlo" placeholder="Task title"  @change="getSubCouncellor" :options="items" v-model="selectedOption"/>
      </div>
      <span>
        <label class="leads-label-assign-add">Assign Description</label>
        <FormKit type="textarea" validation="required" name="comment" id="leads-textarea-dgn" />
      </span>
      <div class="modal-footer-section">
        <button type="button" class="btn-btn-cancel" data-bs-dismiss="modal" id="close" @click="counsellorModal = false">Go back</button>
        <button type="submit" class="btn-btn-dle-appt">Submit</button>
      </div>
    </FormKit>

  </Dialog>

</template>
<script>


export default {
  name: 'ProfileCard',
  props: {
    lead: {},
    count: {},
  },
  data() {
    return {
      lead_statuss: []
    }
  },
  mounted() {
    this.initLeadStatus()
    
  },
  methods: {
    async initLeadStatus() {
      this.loading = true
      await adminGet(`/leadstatus`).then(async (response) => {
        this.lead_statuss = []
        response.data.leadstatus.forEach((i) => { this.lead_statuss.push(i.statusname) })
      })
      this.loading = false
    },
    convertDate(isoDate) {
      const date = new Date(isoDate);
      const options = { year: 'numeric', month: 'short', day: '2-digit' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      return formattedDate;
    },
    async changeStatus() {
      if (await askConfirm('Do You Want to Update The Status', 'Update Status', 'Update', 'No')) {
        this.loading = true
        await adminPut(`/update-leads-status/${this.lead._id}`, { lead_status: this.lead.lead_status })
        successAlert('Lead Status Updated Successfully');
        this.$parent.init()
      }
    },
  }
}
</script>


<style scoped>
@import url('style.css');
</style>