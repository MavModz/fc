<!-- @format -->

<template>
    <main class="bg-[#f8fcff] p-[5%]">
    
      
        <OverviewSection :company="company" :active="'events'" />
        <!-- <CompanyDetailtab :company="company" /> -->

        <div class="tab-content">
            <div id="info" class="tab-pane fade in active show">
                <section class="over_view_section">
                    <div class="container">
                        <!-- <div class="flex items-center gap-[12px] pb-[40px] pt-[40px]">
                            <span class="text-[#9691A4] font-normal">Dynamic Tag</span>
                            <img class="w-[5px]" src="/public/img/svg/right_arrow.svg" alt="" />
                            <span class="text-[#FF5757] font-normal underline">Current Page</span>
                        </div> -->
                        <div class="flex gap-5 max-[1024px]:flex-col">
                            <div class="seminarcontainter w-[55%] max-[1024px]:w-full">
                                <div v-if="listingData?.event_type == 'Webinar'">
                                    <Webinar :singleId="$route.params.event" />
                                </div>
                                <div v-if="listingData?.event_type == 'Seminar'">
                                    <Seminar :singleId="$route.params.event" />
                                </div>
                            </div>

                            <!-- RIGHT SIDE DESIGN -->
                            <div class="w-[45%] max-[1024px]:w-full">
                                <div class="overview-right">
                                    <SocialMedia :company="company"/>
                                    <ContactCard :company="company" />
                            
                                    <AwardsCompany />
                                    <PromotionImage />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- <AppBanner /> -->
            </div>
        </div>
        <RecentView :recentStore="recentStore" />
    </main>
</template>


<script setup>


definePageMeta({
  layout: 'home',
});

const route = useRoute();
const storeId = route.params.id;
const [companyName, CompanyId] = storeId.split('-');


defineExpose({
  CompanyId,
});
let company = ref({
  symbol: '/img/png/150-13 5.png',
  cover_image: '/img/png/150-13 5.png',
  sign: '/img/png/150-13 5.png',
});
let c = ref([]);
await homeGet(`/company/${CompanyId}`).then((response) => {
  company.value = response.data.data;
  for (let i in company?.value?.services) {
    for (let j in company.value.services[i].countries) {
      c.value.push(company.value.services[i].countries[j]);
    }
  }
});
// useHead({
//   title: company?.value?.ssr?.title,
//   meta: [
//     { name: 'description', content: company?.value?.ssr?.description },
//     { name: 'keywords', content: company?.value?.ssr?.keywords.join(',') },
//   ],
// });
</script>


<script>


import ContactCard from '../../../NewComponents/ContactCard.vue';
import CompanyWishlists from '../../../NewComponents/CompanyWishlists.vue';
import RecentView from '../../../NewComponents/RecentView.vue';
import OverviewSection from '../../../NewComponents/OverviewSection.vue';
import Webinar from './Components/Webinar/index.vue';
import Seminar from './Components/Seminar/index.vue';
import AwardsCompany from '../../../NewComponents/AwardsCompany.vue';
import PromotionImage from '../../../NewComponents/PromotionImage.vue';
import CompanyDetailtab from '../../../NewComponents/CompanyDetailtab.vue';
import BreadCrumb from '../../../NewComponents/BreadCrumb.vue';
import SocialMedia from '../../../NewComponents/SocialMedia.vue';



export default {
    components: {
        BreadCrumb,
        OverviewSection,
        ContactCard,
        CompanyWishlists,
        RecentView,
        CompanyDetailtab,
        OverviewSection,
        Webinar,
        Seminar,
        AwardsCompany,
        PromotionImage
    },
    data() {
        return {
            recentStore: null,
            dataAward: null,
            detailAward: false,
            awards: null,
            achievers: null,
            AddReviewModal: false,
            route: useRoute(),
            listingData: null,
            storeIdMount: null,
            storePermMount: null,
        };
    },
    async mounted() {
        this.storeIdMount = this.$route.params.id;
        const [companyName, CompanyIdMount] = this.storeIdMount.split('-');
        this.storePermMount = CompanyIdMount;
        await this.recentView();
        await this.listingEvents();
        this.awards = (
            await homeGet(`/home-company-awards/${this.storePermMount}`)
        ).data.data;
    },
    methods: {
        async listingEvents() {
            try {
                const response = await homeGet(
                    `/home-event/${this.$route.params.event}`,
                );
                this.listingData = response?.data.data;
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        },
        async setDetaward(detailsId) {
            this.dataAward = detailsId;
            this.detailAward = true;
        },
        async addChat() {
            await userGet(`/user-personal-chat/${this.company?.admin_id._id}/user`);
            this.$router.push('/user/chats');
        },
        async recentView() {
            let res = await homeGet(`/company-recent-view`);
            this.recentStore = res.data.data;
        },
    },
};
</script>

<style scoped>
@import url('./style.css');

.dropdown-toggle::after {
    display: none;
}

.border-line {
    border: 1px solid #efecf3;
    margin: 15px 0px;
}
</style>