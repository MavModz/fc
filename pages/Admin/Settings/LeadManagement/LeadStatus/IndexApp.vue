<template>


  <div class="languages">
    <div class="btn-container">
      <span id="languages-heading">Lead Status</span>
      <span class="cursor-pointer" id="add-btn" @click="addModal = true"><i class="bi bi-plus" style="font-size: 1.25rem;"></i> Add</span>
    </div>
    <div class="break-line"></div>
    <div class="flex-container">
      <section>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Status Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-if="loading">
            <tr v-for="i in 2" :key="i">
              <td v-for="j in 3" :key="j">
                <Skeleton></Skeleton>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr v-for="(i, index) in fields" :key="i">
              <td>{{ index + 1 }}</td>
              <td>{{ i.statusname }}</td>
              <td>
                <div  class="btn-group">
                  <span class="td-btn" @click="setData(i)">
                    <img src="/img/svg/edit.svg" alt="" />
                  </span>
                  <span class="td-btn" @click="deleteStatus(i._id)">
                    <img src="/img/svg/trash.svg" alt="" />
                  </span>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </section>
      <div class="img-section">
        <img src="/img/png/plan.png" alt="" />
      </div>
    </div>
  </div>


  <Dialog v-model:visible="addModal" modal header="Add New Status" :style="{'min-width':'350px'}" :draggable="false">
    <FormKit type="form" @submit="submitForm" >
      <div class="input-field">
        <FormKit validation="required" name="statusname" type="text" placeholder="Tesla Awards" />
      </div>
      <div class="button-container py-3 justify-content-center">
        <button type="submit" id="upload-btn">Submit</button>
      </div>
    </FormKit>
  </Dialog>

  <Dialog v-model:visible="updateModal" header="Update Status" modal>
    <FormKit type="form" @submit="updateForm"  ref="MyForm">
      <div class="input-field">
        <FormKit validation="required" name="statusname" v-model="statusname" type="text" placeholder="Status Name" disabled/>
      </div>
      <div class="button-container py-3 justify-content-center">
        <button type="submit" id="upload-btn">Submit</button>
      </div>
    </FormKit>
  </Dialog>


</template>

<script>



export default {
  data() {
    return {
      addModal: false,
      updateModal: false,
      fields: null,
      loading: true,
      id: null,
      statusname: null,
    }
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      this.loading = true
      await adminGet(`/leadstatus`).then(async (response) => {
        this.fields = response.data.leadstatus;
      })
      this.loading = false
    },
    setData(i) {
      this.updateModal = true
      this.id = i._id
      this.statusname = i.statusname
    },
    async submitForm(v) {
      this.loading = true
      this.addModal = false
      
      await adminPost(`/leadstatus-add`, v).then((response) => {
      })
      await this.init()
    },
    async updateForm(v) {
      this.updateModal = false; 
      this.loading = true; 
      try {
        const res = await adminPut(`/leadstatus-update/${this.id}`, v);
        if (res.status) {
          await this.init(); 
          successAlert('Leadstatus Updated Successfully'); 
        } else {
          this.loading = false; 
        }
      } catch (error) {
        console.error('Error updating lead status:', error);
        errorAlert('Failed to update Leadstatus'); 
      } finally {
        this.loading = false;
      }
    },

   


    async deleteStatus(v) {
    if (await deleteConfirm('Do You Want to delete this Leadsource')) {
        this.loading = true;

        const res = await adminDelete(`/leadstatus-delete/${v}`)

        if (res.status) {
           
            await this.init();
            successAlert('Leadstatus Deleted Successfully');
        } else {
           
            this.loading = false; 
        }
    }
}


  },
}
</script>

<style scoped>
@import url('style.css');
</style>
