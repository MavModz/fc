<template>
  <div class="cnt">
    <div class="achievers-publs">
      <div class="pbl-clr">
        <p>Achievers</p>
      </div>
      <div class="achiever-add">
          <button class="your-events-btn" @click="addAchieverPage">
            <i class="bi bi-plus" style="font-size: 1.25rem;"></i> Add Achiever
          </button>
      </div>
    </div>

    <DataView :value="allAchievers" paginator :rows="rows" :alwaysShowPaginator="false" class="mt-3">
      <template #empty>
        <div class="row" v-if="loading">
          <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="i in 8">
            <Skeleton class="m-2" width="16rem" height="400px"></Skeleton>
          </div>
        </div>
        <EmptyContent :title="'Add First Achievement'" :desc="'No Achievements Found'" />
      </template>
      <template #list="s">
        <div class="row m-3">
          <div class="col-sm-3 mb-sm-0 " v-for="(item, index) in s.items" :key="index">
            <div class="card mb-4 shadow shadow-xs ">
              <img :src="item.image+`?t=${new Date().getDay()}`" alt="image" />
              <div class="card-img-overlay">
                <div class="tooltip-gallery-cont-ach">
                  <SplitButton
                  icon="none"
                  dropdownIcon="pi pi-check"
                  :model="generateMenuItems(item)"
                />
                </div>
                <div class="achiever_details">
                  <h4>{{ item.title }}</h4>
                  <span class="mb-4">{{ item.service }} -
                    {{ item.country }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>




  </div>

  <!-- details modal -->

  <Dialog v-model:visible="detailModal" modal header="Achiever" :style="{ width: 'max-content' }">
    <div v-if="data" class="modal-body achvr-detls-flxnxt">
      <div class="achvr-leftimg-vw">
        <img class="card-img-top" :src="data?.image" alt="..." />
        <div class="achvr-namabs">
          <p class="achv-jagdep">{{ data?.title }}</p>
          <p class="achvr-vsa">
            {{ data?.service_name }} -
            {{ data?.country}}
          </p>
        </div>
      </div>
      <div class="achvr-leftimg-newdivrght">
        <h5 class="card-title">{{ data?.listing_id?.title }}</h5>
        <div class="achvr-hr"></div>
        <span class="achvr-descpt">
          <p>Description</p>
        </span>
       
        <p class="card-text" v-html="data?.description"></p>
        <div class="achvr-last">
          <div class="achvr-cmp">
            <div class="achvr-aside-serv">
              <img src="/img/png/icon.png" alt="" />
            </div>
            <div class="achvr-cntr">
              <!-- <p>Service Name</p> -->
              <p>{{ data?.country }}</p>
            </div>
          </div>
          <!-- <div class="achvr-share">
            <img src="/img/png/share.png" alt="" />
          </div> -->
        </div>
      </div>

    </div>
  </Dialog>


</template>

<script>
import EmptyContent from '~/components/ExtraComponents/EmptyContent.vue';
definePageMeta({
  layout: 'admin',
  middleware: ['admin'],
});

export default {
  components: { EmptyContent },
  name: 'BusinessAchievers',
  data() {
    return {
      loading: false,
      allAchievers: null,
      current_id: null,
      data: null,
      detailModal: false,
      totalListing:0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    };
  },
  async mounted() {
    this.totalListing=(await userGet('/total-listings')).data.data
    activateSubmenu('b4', 'Achievers');
    this.init();
    this.updateRows();
    window.addEventListener("resize", this.updateRows); // Listen to window resize
  },
  beforeDestroy() {
    // Clean up event listener on component destroy
    window.removeEventListener("resize", this.updateRows);
  },
  methods: {
    generateMenuItems(i) {
      return [
        
        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => this.deleteEvent(i),
        },
        {
          label: "Edit",
          icon: "pi pi-pen-to-square",
          command: () => this.editBlog(i),
        },
        {
          label:"View",
          icon:"pi pi-eye",
          command:()=>this.setDet(i)
        }
       
      ];
    },
    async deleteEvent(i) {
      if (await deleteConfirm('Do You Want to delete this Achievement')) {
        await adminDelete(`/company-achievers/${i._id}`);
        this.init();
        successAlert('Achievement Deleted');
      }
    },
    async init() {
      this.loading = true
      await adminGet(`/company-achievers`).then((response) => {
        this.allAchievers = response.data.data;
      });
      this.loading = false
    },
    async addAchieverPage(){
      if(this.totalListing>0){
        this.$router.push("/admin/achievers/add")
      }else{
        errorAlert("Please Add Atleast One Listing To Add Achievers")
      }
    },

    async editBlog(i){
      this.$router.push({
      path: `/admin/Achievers/Update/${i._id}`,
      state: { fromForm: true },
    });
    },
    async setDet(detailsId) {
      this.data = detailsId;
      this.detailModal = true
    },
    updateRows() {
      // Adjust rows based on the screen size
      const width = window.innerWidth;

      if (width >= 1500) {
        this.rows = 12; // Large screens
      } else if (width >= 1024) {
        this.rows = 9; // Medium screens
      } else if (width >= 768) {
        this.rows = 6; // Small screens
      } else {
        this.rows = 4; // Extra small screens
      }
    },
  },
};
</script>

<style scoped>
@import url('./style.css');
</style>
