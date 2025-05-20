<template>


  <div class="languages">
    <div class="btn-container">
      <span id="languages-heading">Lead Source</span>
      <span class="cursor-pointer" id="add-btn" @click="addModal = true"><i class="bi bi-plus" style="font-size: 1.25rem;"></i> Add</span>
    </div>
    <div class="break-line"></div>
    <div class="flex-container">
      <section>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Source Name</th>
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
              <td>{{ i.sourcename }}</td>
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
    </div>
  </div>


  <Dialog v-model:visible="addModal" modal header="Add New Source" :style="{'min-width':'350px'}" :draggable="false">
    <FormKit type="form" @submit="submitForm" >
      <div class="input-field">
        <FormKit validation="required" name="sourcename" type="text" placeholder="Add Source" />
      </div>
      <div class="button-container py-3 justify-content-center">
        <button type="submit" id="upload-btn">Submit</button>
      </div>
    </FormKit>
  </Dialog>

  <Dialog v-model:visible="updateModal" header="Update Source" modal>
    <FormKit type="form" @submit="updateForm"  ref="MyForm">
      <div class="input-field">
        <FormKit validation="required" name="sourcename" v-model="sourcename" type="text" placeholder="Update Source" disabled/>
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
      sourcename: null,
    }
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      this.loading = true
      await adminGet(`/leadsource`).then(async (response) => {
        this.fields = response.data.leadsource;
      })
      this.loading = false
    },
    setData(i) {
      this.updateModal = true
      this.id = i._id
      this.sourcename = i.sourcename
    },
    async submitForm(v) {
      this.loading = true
      this.addModal = false
      
      await adminPost(`/leadsource-add`, v).then((response) => {
      })
      await this.init()
    },
    async updateForm(v) {
      
      this.updateModal = false
      this.loading = true
      await adminPut(`/leadsource-update/${this.id}`, v).then((response) => {
      })
      await this.init()
    },
  

    async deleteStatus(v) {
    if (await deleteConfirm('Do You Want to delete this Leadsource')) {
        this.loading = true;

        const res = await adminDelete(`/leadsource-delete/${v}`)

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
