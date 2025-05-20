<template>

    <div>
        <div class="flex justify-between ml-[30px] mr-[30px] bg-[#fff] rounded-md mb-[20px] p-[20px]">
            <p class="text-[#5a5b80] text-[24px] ">{{ servicename }}</p>
            <button @click="servicessubcategorylist" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop"
                aria-controls="staticBackdrop" class="bg-[#ff2626] text-white px-[12px] py-[8px] rounded-full">+Add
                Listing</button>
        </div>
    </div>

    <DataTable v-model:selection="selectedServiceListing" class="gallery-container leadabc" ref="dt"
        :value="service_list" paginator :rows="20" dataKey="_id">

        <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
        <Column field="name" header="College Name" class="test" :filterMenuStyle="{ width: '14rem' }"
            style="max-width: 8rem">
            <template #body="{ data }">
                <div class="all-leads-tabl-eye">
                    <span class="leads-table-namee-wgt " style="cursor: pointer;">{{
                        data.title }}</span>
                </div>
            </template>
        </Column>

        <Column field="name" header="Service Name" class="test" :filterMenuStyle="{ width: '14rem' }"
            style="max-width: 8rem">
            <template #body="{ data }">
                <div class="all-leads-tabl-eye">
                    <span @click="this.$refs.canvas.openCanvas(data)" class="leads-table-namee-wgt "
                        style="cursor: pointer;">{{
                            data.service_name }}</span>
                </div>
            </template>
        </Column>



        <Column field="phone" header="Service Category" :filterMenuStyle="{ width: '14rem' }" style="max-width: 8rem">
            <template #body="{ data }">
                <span class="leads-table-namee-wgt-dtee">{{ data.sub_service_name }}</span>
            </template>
        </Column>



        <Column field="source" header="created Date" filterField="service" :showFilterMatchModes="false"
            :filterMenuStyle="{ width: '14rem' }" style="min-width: 4rem">
            <template #body="{ data }">
                <div class="all-atble-leds-srvc">
                    <span class="lead-date text-[#64748b]" style="display: block; margin-top: 4px">
                        {{ formatDate(data.createdAt) }}
                    </span>
                </div>
            </template>
        </Column>

        <Column field="phone" header="Action" :filterMenuStyle="{ width: '14rem' }" style="max-width: 8rem">
            <template #body="{ data }">
                <div class="action-icons flex gap-2 ">
                    <span  @click="updateListing(data)" class=" pi pi-user-edit opacity-75" ></span>
                    <span @click="deleteListing(data._id)"  class="pi pi-trash opacity-75" ></span>

                    <span @click="toggleSidebar(data)" class="pi pi-eye opacity-75"></span>
                </div>
            </template>
        </Column>


    </DataTable>

    <collegeView :visible="sidebarVisible" :listingData="selectedListing" @update:visible="sidebarVisible = $event" />
    <permanentView :visible="permanentresidency" :listing-data="selectedListing" @update:visible="permanentresidency = $event"/>
    <div class="offcanvas offcanvas-end offcanv-strst-filter max-w-[360px!important] w-[30%!important] " tabindex="-1"
        id="staticBackdrop" aria-labelledby="staticBackdropLabel" data-bs-backdrop="false">
        <div class="modal-body-offcan-trst">
            <div class="flex p-[20px] items-center">
                <img @click="back" src="/img/png/bak.png" alt="" data-bs-dismiss="offcanvas"
                    class="cursor-pointer h-[25px]" />
                <span class="mx-auto font-[500] text-[25px]">Category List</span>

            </div>

            <div>
                <div v-if="subcategorylist.length && subcategorylist[0].subcategories?.length"
                    v-for="ele in subcategorylist[0].subcategories"
                    class="pl-[20px] pr-[20px] flex justify-between text-[#ff5757] bg-[#ffefef] mb-[14px] p-[5px] text-[15px]">
                    <span class="cursor-pointer" @click="$router.push(getSubcategoryRoute())">{{ ele }} </span><span
                        class="pi pi-external-link text-[#ff5757] text-center !leading-normal cursor-pointer"
                        @click="$router.push(getSubcategoryRoute())"></span>
                </div>
            </div>





        </div>
    </div>
</template>


<script>

import permanentView  from "@/pages/Serviceview/Settle/Permanent_Residency/index.vue"
import collegeView from "@/pages/Serviceview/Studyvisa/Collegestudyvisa/index.vue"
definePageMeta({
    layout: 'admin',
    middleware: ['admin'],
});

export default {
    data() {
        return {
            service_list: [],
            subcategorylist: [],
            servicename: null,
            sidebarVisible: false,
            selectedListing: null,
            selectedServiceListing: [],
            permanentresidency:false,
           
        };
    },
    components: {
        collegeView,
        permanentView,
    },


    async mounted() {
        activateSubmenu('b3', 'Services');
        console.log("router.check", useRoute().fullPath.split("/")[3].split("%20").join(" "))
        this.servicename = useRoute().fullPath.split("/")[3].split("%20").join(" ")
        console.log("servicename", this.servicename)
        await this.init();
    },
    methods: {
        async init() {
            this.loading = true;
            await adminGet(`/admin-study-get/${this.servicename}`).then(async (response) => {
                this.service_list = response.data.data;
                this.loading = false;
            });
            this.loading = false;
        },

        async servicessubcategorylist() {
            await adminGet(`/admin/category/subcategory/${this.servicename}`).then(async (response) => {
                this.subcategorylist = response.data.data
            })
        },
        toggleSidebar(data) {
            this.selectedListing = data
            const name = this.servicename.trim().toLowerCase();
           console.log("visiblename",name)
            if (name === "study visa") {
                this.sidebarVisible = !this.sidebarVisible;
            } else if (name === "settle abroad") {
                this.permanentresidency = !this.permanentresidency;
            } else {
                
            }
         
            const currentQuery = { ...this.$route.query };
            currentQuery.id = data._id; // always set or replace the id

            this.$router.replace({ query: currentQuery });
        },


        async deleteListing(i) {
            if (await deleteConfirm('Do You Want to delete this Listing')) {
                await adminDelete(`/company-listing/${i}`);
                this.init();
                successAlert('Listing Deleted');
            }
        },


        getSubcategoryRoute() {
            const name = this.servicename.trim().toLowerCase();
            console.log("name",name)
            if (name === "study visa") {
                return "/admin/study-form";
            } else if (name === "settle abroad") {
                return "/admin/addservice/settle/Pr";
            } else {
                return "/admin/default-route";
            }
        },

        updateListing(){
            const name = this.servicename.trim().toLowerCase();
            console.log("name",name)
            if (name === "study visa") {
                return "/admin/study-form";
            } else if (name === "settle abroad") {
                return "/admin/addservice/settle/Pr";
            } else {
                return "/admin/default-route";
            }
        }
    },


}

</script>

<style scoped>

</style>