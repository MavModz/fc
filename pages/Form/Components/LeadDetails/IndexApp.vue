<!-- @format -->

<template>
  <div class="gallery-container">


    <div class="lead-setting">
      <span class="fs-4 fw-semibold">Basic Details</span>
    </div>
    <div class="lead-detail row p-[10px]">
      <div class="col-12 col-lg-8 d-lg-flex flex-lg-column">
        <div class="row">
          <div class="form-group col-12 col-lg-8 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Full Name</label>
            <input type="text" v-model="lead.name" class="form-control" />
          </div>
          <div v-if="form.dob" class="form-group col-12 col-lg-4 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="datepicker">DOB</label>
            <input v-model="lead.dob" type="date" id="datepicker" class="form-control" placeholder="DD/MM/YYYY" :max="new Date().toISOString().split('T')[0]"/>
          </div>
        </div>
        <div class="row pt-4">
          <div v-if="form.country" class="form-group col-12 col-lg-8 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Country</label>
            <select v-model="lead.country" class="form-select" @change="getState">
              <option v-for="option in allCountry" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div v-if="form.state" class="form-group col-12 col-lg-4 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">State</label>
            <select v-model="lead.state" class="form-select" name="event_type" @change="getCity">
              <option v-for="option in allState" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>

        </div>
        <div class="row pt-4">

          <div v-if="form.city" class="form-group col-12 col-lg-8 d-lg-flex flex-lg-column ">
            <label for="datepicker">City</label>
            <select v-model="lead.city" class="form-select" name="event_type">
              <option v-for="option in allCity" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>
          <div v-if="form.pincode" class="form-group col-12 col-lg-4 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="datepicker">PIN Code</label>
            <input type="text" v-model="lead.pincode" class="form-control" @keypress="restrictToNumbers"/>
          </div>
        </div>
        <div class="row pt-4">
          <div v-if="form.gender" class="form-group col-12 col-lg-7 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Gender</label>
            <select class="addleads-gender-select" v-model="lead.gender" placeholder="Select Gender">
              <option value="male" selected>Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div v-if="form.age" class="form-group col-12 col-lg-5 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="datepicker">Age</label>
            <input v-model="lead.age" class="form-control" type="text" @keypress="restrictToNumbers"/>
          </div>
        </div>
        <div class="row pt-4">
          <div class="form-group col-12 col-lg-7 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Phone Number</label>
            <input v-model="lead.phone" class="form-control" type="tel" @input="validatePhoneNumber"/>
          </div>
          <div class="form-group col-12 col-lg-5 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Email</label>
            <input v-model="lead.email" class="form-control" type="tel" disabled />
          </div>
        </div>
        
        <div class="row pt-4 pb-4">
          <div v-if="form.per_address" class="form-group col-12 pt-4 pt-lg-0">
            <label for="exampleInputPassword1">Present Address</label>
            <span class="form-select-inptrt">
              <input v-model="lead.per_address" id="lead-details-inpt-single" type="location"
                placeholder="enter your location" class="" />
            </span>
          </div>
        </div>

      </div>
      <div class="image-section col-12 col-lg-4 d-lg-flex flex-lg-column pt-4 pt-lg-0 padbtm-adlds">
        <div class="change-pic">
          <div class="Picture" style="border:1px solid grey">
            <div class="icon-box">
              <img class="profile-image" :src="lead.image" />
              <input type="file" @change="handleImageUpload" />
            </div>
          </div>
        </div>

        <div class="row pt-4">
          <div class="form-group col-12 col-lg-9 d-lg-flex flex-lg-column pt-4 pt-lg-0">
            <label for="datepicker">Service Opted</label>
            <select v-model="lead.service">
              <option v-for="option in services" :key="option" :value="option.service">
                {{ option.service }}
              </option>
            </select>
          </div>
        </div>
      </div>

    </div>
  </div>



  <Dialog v-model:visible="addCoverModal" modal header="Crop Image" :style="{ width: '35rem' }">
    <div data-kt-element="options">
      <div data-kt-element="sms">
        <div class="icon_cropper-container">
          <div v-if="icon_showCropper" class="icon_cropper-modal">
            <cropper :src="icon_selectedImage" @change="icon_updateCroppedData"
              :stencil-props="{ aspectRatio: 1 / 1 }" />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <Button label="Cancel" text severity="secondary" @click="addCoverModal = false" class="cropper-cancel" />
      <Button label="Upload" outlined severity="secondary" @click="icon_uploadImage" class="cropper-upload" />
    </template>
  </Dialog>

</template>

<script>

import 'vue-advanced-cropper/dist/style.css';
import { Cropper } from "vue-advanced-cropper";

export default {
  props: {
    lead: {},
    form: {},
    allCountry: [],
  },
  components: {
    Cropper,
  },
  data() {
    return {

      allState: null,
      allCity: null,
      services: null,
      isButtonClick: 'lead',
      imageUrl: null,
      icon_selectedImage: null,
      icon_showCropper: true,
      addCoverModal: false
    };
  },
  mounted() {
    this.initServices()
    if (this.lead.country) { this.getState() }
    if (this.lead.state) { this.getCity() }
  },
  methods: {
    validatePhoneNumber() { this.lead.phone = this.lead.phone.replace(/\D/g, ''); },
    handleImageUpload(event) {
      if (event.target.files[0].type.split("/")[0] != 'image') {
        errorAlert("Please Upload Valid Image FIle")
        return
      }
      const icon_selectedFile = event.target.files[0];
      if (icon_selectedFile) {
        this.icon_selectedImage = URL.createObjectURL(icon_selectedFile);
        this.icon_showCropper = true;
        this.addCoverModal = true;
      }
    },
    icon_uploadImage() {
      this.lead.image = this.icon_selectedImage
      this.addCoverModal = false
    },

    async getState() {
      this.loading = true
      await homeGet(`/states/${this.lead.country}`).then(response => {
        this.allState = response.data
      })
      this.loading = false
    },
    async getCity() {
      this.loading = true
      await homeGet(`/city/${this.lead.state}`).then(response => {
        this.allCity = response.data
      })
      this.loading = false
    },
    async initServices() {
      this.loading = true
      await homeGet(`/form-company-services/${this.lead.company_id._id}`).then(async (response) => {
        this.services = response.data.data
      })
      this.loading = false
    },
  },
};
</script>

<style scoped>
@import url('style.css');
</style>
