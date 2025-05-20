<!-- @format -->

<template>
  <div class="languages">
    <div class="btn-container">
      <span id="languages-heading">Languages</span>
      <span class="cursor-pointer" id="add-btn" @click="addModal = true"><i class="bi bi-plus"
          style="font-size: 1.25rem;"></i> Add</span>
    </div>
    <div class="break-line"></div>
    <section>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Language Name</th>
            <th>Language Options</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading" v-for="i in 2">
            <td>
              <Skeleton></Skeleton>
            </td>
            <td>
              <Skeleton></Skeleton>
            </td>
            <td>
              <Skeleton></Skeleton>
            </td>
            <td>
              <Skeleton></Skeleton>
            </td>
          </tr>

          <tr v-else v-for="(i, index) in languages">
            <td>{{ index + 1 }}</td>
            <td>{{ i.name }}</td>
            <td class="td">
              <span v-for="j in i.label" class="td-text">{{ j }}</span>
            </td>
            <td>
              <div class="btn-group">
                <span class="td-btn" @click="editItem(i)">
                  <img src="/img/svg/edit.svg" alt="Edit" />
                </span>
                <span class="td-btn" @click="deleteLanguage(i._id)">
                  <img src="/img/svg/trash.svg" alt="" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>

  <!--Add Language-->
  <Dialog v-model:visible="addModal" modal header="Add New Language" :style="{ 'min-width': '350px' }"
    :draggable="false">
    <div class="upload-image-box" style="max-height: 572px">
      <div class="button-container" style="row-gap: 20px; display: flex; flex-direction: column">
        <input type="text" v-model="language.name" placeholder="Language Name - IELTS" />
      </div>

      <div class="button-container mt-4" v-for="(i, index) in language.label"
        style="row-gap: 20px; display: flex; flex-direction: column ;margin-top: 35px;">
        <input type="text" v-model="language.label[index]" placeholder="fields" />
      </div>
      <div class="button-container" style="row-gap: 20px; display: flex; flex-direction: column">
        <div @click="addField">
          <span class="span-red">
            + add options
            <hr class="hr" />
          </span>
        </div>
        <button class="submit-btn" @click="addLanguage">Submit</button>
      </div>
    </div>
  </Dialog>
  <Dialog v-model:visible="updateModal" modal header="Update Language" :style="{ width: '350px' }" :draggable="false">
    <div class="upload-image-box" style="max-height: 572px">
      <div class="button-container" style="row-gap: 20px; display: flex; flex-direction: column">
        <input type="text" v-model="updateData.name" placeholder="Language Name - IELTS" />
      </div>

      <div class="button-container mt-4" v-for="(i, index) in updateData.label"
        style="row-gap: 20px; display: flex; flex-direction: column ;margin-top: 35px;">
        <input type="text" v-model="updateData.label[index]" placeholder="fields" />
      </div>
      <div class="button-container" style="row-gap: 20px; display: flex; flex-direction: column">
        <div @click="addupdateField">
          <span class="span-red">
            + add options
            <hr class="hr" />
          </span>
        </div>
        <button @click="updateLanguage" class="submit-btn">Update</button>
      </div>
    </div>
  </Dialog>


</template>

<script>
import Skeleton from 'primevue/skeleton';

export default {
  components: {
    Skeleton,
  },
  data() {
    return {
      loading: true,
      addModal: false,
      updateModal: false,
      languages: null,
      language: {
        name: null,
        label: [],
      },
      updateData: null,
    };
  },
  async mounted() {
    await this.init();
  },
  methods: {
    async init() {
      this.loading = true;
      await adminGet(`/languages`).then(async (response) => {
        this.languages = response.data.languages;
      });
      this.loading = false;
    },
    async addLanguage() {
      this.addModal = false;
      this.loading = true;
      await adminPost(`/languages-add`, this.language).then(
        async (response) => { },
      );
      this.init();
    },
    // async deleteLanguage(i) {
    //   if (await deleteConfirm('Do You Want to delete this Labguage')) {
    //     this.loading = true;
    //    const res= await adminDelete(`/languages-delete/${i}`);


    //   }
    // },

    async deleteLanguage(i) {
      if (await deleteConfirm('Do You Want to delete this Language')) {
        this.loading = true;

        const res = await adminDelete(`/languages-delete/${i}`);

        if (res.status) {

          await this.init();
          successAlert('Language Deleted Successfully');
        } else {

          this.loading = false;
        }
      }
    },
    addField() {
      this.language.label.push('');
    },
    addupdateField() {
      this.updateData.label.push('');
    },




    editItem(i) {
      this.updateModal = true;
      this.updateData = i;
    },


    async updateLanguage(v) {
      this.updateModal = false;
      this.loading = true;
      try {
        const res = await adminPut(`/languages-update/${this.updateData._id}`, this.updateData);
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


  },
};
</script>

<style scoped>
@import url('./style.css');
</style>
