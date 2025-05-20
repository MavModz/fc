<template class="template">
     <BootstrapIcon name="x" style="color: white;"/>
  <div class="overflow-hidden">
    <div class="row">
      <div class="col-lg-6 mb-sm-0 bimg" style="">
        <div class="image-background">
          <img src="/img/png/iPhone.png" alt="" />
        </div>
      </div>
      <div class="cst-right-content-stp5">
        <div id="cmplt-stepfive-right" class="col-lg-6 pt-5 mb-sm-0 ">
          <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <span class="mb-3 cursor-pointer">
                <a class="text-decoration-none" style="color: #8692a6; font-weight: 600" @click="back()">
                  <i class="bi bi-chevron-left"></i> Back
                </a>
              </span>
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0 d-flex flex-column justify-content-end">
              <span class="text-sm-end" style="color: #bdbdbd; font-weight: 500">STEP 05/7</span>
              <span class="text-sm-end" style="color: #8692a6; font-weight: 600">Business Info.</span>
            </div>
          </div>

          <FormKit type="form" @submit="submitForm" ref="myForm">
            <center>
              <div class="col-sm-8 mb-3 mt-5">
                <div class="text-center text-lg-start">
                  <p class="h4 fw-bold lh-1 text-body-emphasis mb-3">
                    Your Company Documents
                  </p>
                  <p class="para"> To complete your profile and verify your business, please upload the necessary
                    company documents. </p>
                </div>

                <div id="backgrnd-color-cmplt-prflsdz" class="rounded-3 pt-5 bg-body-tertiary">

                  <div class="form-group pt-4 pt-md-0 pb-3 relative">
                    <label for="" class="mb-1">Company Pan Card</label>

                    <!-- <FormKit v-model="company.pan" validattion="required"  type="text" name="pan" class="form-control py-3" :placeholder="pan_verify?'PAN Verified':'Enter your PAN no.'" validationlabel="PAN number"
                    @keypress="restrictToNumbersAndUppercase" 
                    :disabled="pan_verify"
                    /> -->
                    <FormKit v-model="company.pan" :maxlength="10" type="text" name="pan" class="form-control py-3"
                      placeholder="Enter your PAN no." validationlabel="PAN number" @keypress="restrictToValidPan"
                      @input="validatePan" />

                    <p v-if="error" style="color: red">{{ error }}</p>


                    <!-- <FormKit v-if="!pan_verify" validation="required" v-model="company.pan" type="text" name="pan"
                      class="form-control py-3" :maxlength="10" placeholder="Enter your PAN number" validationlabel="PAN number"
                      @keypress="restrictToNumbersAndUppercase" /> -->
                    <!-- <FormKit v-if="pan_verify" validation="required" v-model="company.pan" type="text" name="pan"
                      class="form-control py-3" :maxlength="10" placeholder="Enter your PAN number" validationlabel="PAN number"
                      @keypress="restrictToNumbersAndUppercase" disabled  /> -->

                    <!-- verifypan -->
                    <!-- <span v-if="!pan_verify" @click="sendPanOtp" class="pan-verify-profile">
                      Verify Now
                    </span>
                    <span v-else class="absolute upload-icon-position">
                      <NuxtImg src="/img/svg/green-check.svg" alt="" class="w-[20px] h-[20px]" />
                    </span> -->
                  </div>

                  <div class="form-group pt-4 pt-md-0 pb-3 relative">
                    <label for="" class="mb-1">Business License Number</label>
                    <FormKit v-model="company.business_license_number" type="text" name="business_license_number"
                      class="form-control py-3" :maxlength="21" placeholder="Enter your Business License Number"
                      @keypress="restrictToNumbersAndUppercase" />
                  </div>
                  <div class="form-group pt-4 pt-md-0 pb-3 relative">
                    <label for="" class="mb-1">Company GST</label>
                    <FormKit v-model="company.company_gst" type="text" :maxlength="15" name="company_gst"
                      class="form-control py-3" placeholder="Enter your Company GST"
                      @keypress="restrictToNumbersAndUppercase" />
                  </div>


                  <div class="form-group pt-4 pt-md-0 pb-3 relative">
                    <label for="" class="mb-1">Additional Document</label>

                    <div class="check-check-check">
                      <div class="form-control text-left" v-if="fileName.length > 0">
                        <div :style="{ border: 'none' }" v-if="fileName.length > 0">
                          <ul :style="{}">
                            <li v-for="(file, index) in selectedFiles" :key="index"
                              style="padding:0px 10px !important;background-color: #f5f5f5; margin-bottom: 5px;">
                              <button type="button" class="" @click="openInNewTab(file.url)">
                                {{ file.filename.length > 34 ? file.filename.slice(0, 34) + '...' : file.filename }}
                                <span class="badge badge-light">
                                  <i class="bi bi-x-lg icon2" @click.stop="deleteFile(index)"></i>
                                </span>
                              </button>
                            </li>

                          </ul>

                        </div>
                        <div class=" py-2 text-left ">
                          <input type="file" ref="fileInput" @change="handleFileChange" multiple
                            class="form-control py-3" id="file-input" style="display: none;" />
                          <span v-if="selectedFiles.length > 0" @click="triggerFileInput"
                            class="step5-upladabs cursor-pointer">
                            Add More+
                          </span>
                          <span v-else @click="triggerFileInput" class="step5-upladabs cursor-pointer">
                            Upload File
                          </span>
                        </div>

                      </div>
                      <!-- <div class="form-control py-3 text-left uploadfile" v-else> -->
                      <!-- <span :style="{ color: '#8692a6', fontSize: '14px' }">filename01, filename 02,</span> -->
                      <div class="form-control py-3 text-left " v-else>
                        <input type="file" ref="fileInput" @change="handleFileChange" multiple class="form-control py-3"
                          id="file-input" style="display: none;" />
                        <span @click="triggerFileInput" class="step5-upladabs cursor-pointer">
                          Upload File
                        </span>
                      </div>
                      <!-- </div> -->
                    </div>



                    <span class="note-youcan-select">note: you can select multiple files</span>
                  </div>


                  <Button v-if="update" class="w-100 btn btn-lg btn-primary mt-3" type="submit" icon="pi pi-save"
                    :loading="loading" label="Update" :disabled="loading" @click="handleUpdate" />


                  <!-- <Button v-if="update" class="w-100 btn btn-lg btn-primary mt-3" type="submit" icon="pi pi-save"
                    :loading="loading" label="Update" /> -->
                  <Button v-if="!update" class="w-100 btn btn-lg btn-primary mt-3" type="submit" icon="pi pi-save"
                    :loading="loading" label="PROCEED" />
                  <div class="text-body-secondary">
                    <span class="text-align">Your Info is safely secured </span>
                  </div>
                </div>
              </div>
            </center>
          </FormKit>

        </div>
      </div>
    </div>
  </div>

  <!-- PAN OTP modal -->
  <Dialog v-model:visible="panOtpModal" modal header="Verify PAN" :style="{'min-width': '350px'}"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
    <div class="card flex justify-content-center">
      <div class="flex flex-column align-items-center">
        <div class="font-bold text-xl mb-2">PAN OTP Sent to Your Email</div>
        <p class="text-color-secondary block mb-5">{{ maskPanNumber(company.pan) }}</p>
        <InputOtp v-model="panOtp" :length="6" style="gap: 0">
          <template #default="{ attrs, events, index }">
            <input type="text" v-bind="attrs" v-on="events" class="custom-otp-input" />
            <div v-if="index === 3" class="px-3">
              <i class="pi pi-minus" />
            </div>
          </template>
        </InputOtp>
        <div class="flex justify-content-between mt-5 align-self-stretch">
          <Button label="Resend Code" link class="p-0 btn-resend"></Button>
          <Button label="Submit Code" @click="submitPanOtp" class="btn-submit"></Button>
        </div>
      </div>
    </div>
  </Dialog>

</template>

<script>
// import { BootstrapIcon } from '#build/components';




export default {
  name: 'PhoneNumberVerification',
  props: {
    company: {},
    user: {}
  },

  data() {
    return {
      update: false,
      panOtpModal: false,
      panOtp: '',
      loading: false,
      myForm: null,
      Additional_document: [],
      selectedCountry: null,
      phoneNumber: '',
      user: null,
      company: {
        pan: '',

        Additional_document: []
      },
      pan_verify: false,
      additionalDocumentsString: '',
      selectedFiles: [],
      fileName: [],
      panRegex: /^[A-Z]{0,5}[0-9]{0,4}[A-Z]?$/,
      error: "",
    };
  },



  methods: {
    restrictToValidPan(event) {
      const char = event.key;
      const isValidChar = /^[A-Z0-9]$/.test(char);

      if (!isValidChar) {
        event.preventDefault();
        this.error = "Enter Valid pan!";
      } else {
        this.error = "";
      }
    },


   
    maskPanNumber(number) {

      const numStr = number.toString();

      if (numStr.length > 4) {
        const visibleStart = numStr.slice(0, 2); // First 2 digits
        const visibleEnd = numStr.slice(-2);    // Last 2 digits
        const maskedMiddle = '*'.repeat(numStr.length - 4); // Mask the middle digits

        return `${visibleStart}${maskedMiddle}${visibleEnd}`;
      }

      // If the number has 4 or fewer digits, mask the middle part
      return `${numStr[0]}*`.padEnd(numStr.length, '*');
    },
    async sendPanOtp() {
      if (this.company.pan && this.company.pan.length === 10) {
        await userGet(`/company-send-verification-pan/${this.company.pan}`).then((data) => {
          successAlert("Otp Sent Successfuly!")
          this.panOtpModal = true;
        }).catch((e) => { })
      } else {
        errorAlert("Please enter a valid PAN number.");
      }
    },
    openInNewTab(url) {
      window.open(url, '_blank');
    },
    deleteFile(index) {
      this.selectedFiles.splice(index, 1);
      this.company.Additional_document = [...this.selectedFiles]
    },

    async submitPanOtp() {
      await userGet(`/company-verify-pan-otp/${this.company.pan}/${this.panOtp}`).then((data) => {
        successAlert("Your PAN number is verified successfully!")
        this.pan_verify = true;
        this.panOtpModal = false;
      }).catch((e) => { })
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },


    // async handleFileChange(event) {
    //   const icon_selectedFile = event.target.files[0];
    //   if (icon_selectedFile) {
    //     this.fileName.push(icon_selectedFile.name);

    //     var url = URL.createObjectURL(icon_selectedFile);
    //     var file_url = await uploadFile(this.id, url);
    //     this.selectedFiles.push(file_url)

    //   }
    // },


    async handleFileChange(event) {
      const selectedFiles = event.target.files;

      // Temporary array to store newly added files
      const newFiles = [];

      for (const file of selectedFiles) {
        const url = URL.createObjectURL(file);
        newFiles.push({ url, filename: file.name });
      }

      // Add newly selected files to the selectedFiles array
      this.selectedFiles = [...this.selectedFiles, ...newFiles];

      // Update the company's Additional_document array with the updated list
      this.company.Additional_document = [...this.selectedFiles];


      this.fileName = this.selectedFiles.map(file => file.filename);
    },


    // async handleFileChange(event) {
    //   const selectedFiles = event.target.files;
    //   for (let i = 0; i < selectedFiles.length; i++) {
    //     const file = selectedFiles[i];
    //     this.fileName.push(file.name);
    //     const url = URL.createObjectURL(file);
    //     const file_url = await uploadFile(this.id, url);
    //     this.selectedFiles.push({ url: file_url, filename: file.name });
    //   }
    //   // this.company.Additional_document = [...this.selectedFiles];
    //   this.company.Additional_document = [
    //     ...this.company.Additional_document,
    //     ...this.selectedFiles
    //   ]
    // },


    async handleUpdate() {
      this.loading = true; // Disable the button and show loading spinner

      try {
        // Simulate an API call or update process
        await this.handleFileChange();
        this.$router.push('/admin/business-profile');

        // Success logic here
      } catch (error) {
      } finally {
        this.loading = false; // Re-enable the button after the process completes
      }
    },
    // async updateFiles() {
    //   // Simulate a delay for the update process (e.g., API call)
    //   return new Promise((resolve) => setTimeout(resolve, 2000));
    // },
    async submitForm(v) {


      this.loading = true;
      if (!this.update) {
        this.company.step === 4 ? v.step = 5 : '';
        v.update = false;
      }

      v.Additional_document = this.company.Additional_document;
      v.pan_verify = this.pan_verify;

      await userPost(`/company-reapply/${this.user.company_id}`, v)
        .then((response) => {
          if (this.update) {
            this.$router.push({
              path: '/admin/business-profile'
            });
          } else {
            this.$emit('nextPage');
          }
        })
        .catch(async (error) => {
          this.loading = false;
          await serverErrorMessage(() => this.submitForm(v))

        });

      this.loading = false;

    },


    back() {

      if (this.update) {
        this.$router.push({
          path: '/admin/business-profile'
        })
      } else {
        this.$emit("prevPage")
      }
    },
  },

  async setup() {
    const user = ref(null);
    const company = ref(null);
    const data = ref(null);

    const userDetailsResponse = await userGet('/user-profile');
    user.value = userDetailsResponse.data.user;
    if (user.value.company_apply) {
      const companyDetailsResponse = await userGet(`/user-company-details/${user.value.company_id}`);
      company.value = companyDetailsResponse.data.data;
      if (company.value.step > 4) {
        data.value = companyDetailsResponse.data.data;
      }
    }
    return { user, company, data }
  },
  mounted() {
    this.pan_verify = this.company.pan_verify

    if (this.company.update_step > 0) {
      this.update = true
    }

    if (this.company.Additional_document && this.company.Additional_document.length > 0) {
      this.company.Additional_document.forEach((file) => {
        this.fileName.push(file.filename);
        this.selectedFiles.push({
          url: file.url,
          filename: file.filename,
        });
      });
    }
  }
}

</script>

<style scoped>
@import url('./style.css');
</style>
