<template>
    <HomeHeader :selectedCity="selectedCity" @trigger-location-popup="openLocationPopup" />
    <div style="background-color:#f8fcff  ;">
        <Herosection />
    </div>
    <div>
        <Category />
    </div>

    <div style="width:100%;margin-top: 0px; background-color: #f8f7fc;">
        <!-- <div style="width:100%;margin-top: 2px; background-color: #f8fcff;"> -->
        <div class="main-container-homepage">


            <LocationPopup v-if="showLocationPopup" @close="closeLocationPopup" @city-selected="handleCitySelected" />

            <study :studydata="data?.studyVisa" :pending="pending" :error="error" />
            <visitor :visitordata="data?.permanentResidency" :pending="pending" :error="error" />
            <secondadd />
            <nearme :nearmedata="data?.nearMe" :pending="pending" :error="error" />
            <travelpackage :traveldata="data?.travelpackage" :pending="pending" :error="error" />
            <job :listing="data?.workVisa" :pending="pending" :error="error" />
            <event :eventdata="data?.event" :pending="pending" :error="error" />
            <testimonials :testimonialdata="data?.testimonials" :pending="pending" :error="error" />
            <blog :blogdata="data?.blogs" :pending="pending" :error="error" />
            <firstadd />
            <content />
            <AppFooter />
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import LocationPopup from '~/components/LocationPopup/LocationPopup.vue';
import Herosection from "./Component/herosection"
import Category from "./Component/category"
import study from "./Component/study";
import firstadd from "./Component/firstadd";
import visitor from "./Component/visitor";
import secondadd from "./Component/secondadd";
import nearme from "./Component/nearme";
import travelpackage from "./Component/travelpackage";
import job from "./Component/job";
import event from "./Component/event";
import testimonials from "./Component/testimonials";
import blog from "./Component/blog";
import content from "./Component/content";


import { useAsyncData, useCookie } from "#imports";

const route = useRoute();
const noHeaderFooterRoutes = ['/auth/register', '/auth/login'];
const showHeaderFooter = ref(true);

const lo = useCookie("lo");
const la = useCookie("la");
const city = useCookie("city");

// Define cached data and loader state
const cachedHomepageData = ref(null);
const isLoading = ref(false); // Initialize as false

const { data, pending, error } = useAsyncData(
    "homepage-data",
    async () => {
        isLoading.value = true; // Start loader when fetching begins


        if (!lo.value || !la.value || !city.value) {
            isLoading.value = false; // Stop loader if cookies are missing
            return { blogs: [], studyVisa: [], permanentResidency: [], nearMe: [], workVisa: [] };
        }

        const url = `/homepage-data/?lo=${lo.value}&la=${la.value}`;

        const response = await homeGetSSR(url);

        isLoading.value = false; // Stop loader when data is received

        return response.status ? response : {
            blogs: [],
            studyVisa: [],
            permanentResidency: [],
            nearMe: [],
            workVisa: [],
            event: [],
            travelpackage: [],
            testimonials: []
        };
    },
    {
        lazy: true,
        default: () => cachedHomepageData.value,
        keepPreviousData: true,
        staleWhileRevalidate: true
    }
);

// Watch for data updates and ensure `isLoading` stays false
watch(data, (newData) => {
    cachedHomepageData.value = newData;
    isLoading.value = false; // Ensure it stays false
});










const updateHeaderFooterVisibility = () => {
    showHeaderFooter.value = !noHeaderFooterRoutes.includes(route.path);
};

onMounted(() => {
    updateHeaderFooterVisibility();
});

watch(route, () => {
    updateHeaderFooterVisibility();
});

// Handle selected city
const selectedCity = ref('Location');
const showLocationPopup = ref(false);

const openLocationPopup = () => {
    showLocationPopup.value = true;
};

const closeLocationPopup = () => {
    showLocationPopup.value = false;
};

const handleCitySelected = (city) => {
    if (process.client) {
        selectedCity.value = city.name;
        localStorage.setItem('city', city.name);
        localStorage.setItem('la', String(city.latitude));
        localStorage.setItem('lo', String(city.longitude));
        closeLocationPopup();
        location.reload();
    }
};

// Check if lat/long is missing and trigger popup
const triggerPopupIfLocationMissing = () => {
    if (process.client) {
        const latitude = localStorage.getItem('la');
        const longitude = localStorage.getItem('lo');

        if (!latitude || !longitude) {
            openLocationPopup();
        } else {
            selectedCity.value = localStorage.getItem('city') || 'Location';
        }
    }
};

onMounted(() => {
    triggerPopupIfLocationMissing();
});

</script>

<script>
import CustomDropdown from '@/components/LandingPage/CustomDropdown/index.vue';
import HomeHeader from '~/components/Home/Header/HomeHeader.vue';
import AppFooter from '~/components/Home/Footer/AppFooter.vue';


export default {
    components: {
        CustomDropdown,
    },
    data() {
        return {
            activeVisa: null,
            categories_type: [],
            showElasticSearch: false,
            filters: {
                searchQuery: "",
                category_type: "",
            },
            desiredOrder: [
                "Study Visa",
                "Tourist Visa",
                "Work Visa",
                "Permanent Residency",
                "Business Visa",
                "Visitor Visa",
            ],
            loading: false,
            page_loading: {
                blog: true,
                studydata: true,
                jobdetails: true,
                visitordetails: true,
                nearmedetails: true
            },
            redirectPath: '/',
            searchQuery: "",
        }
    },
    methods: {
        Search() {
            if (this.searchQuery.trim()) {
                this.$router.push({
                    path: "/search",
                    query: { q: this.searchQuery },
                });
            }
        },
        async selectCategory(category) {
            this.filters.searchQuery = "";
            this.filters.category_type = category;
            this.showElasticSearch = false;
            this.$router.push({
                path: "/search",
                query: {
                    category,
                },
            });
            this.$refs.searchInput.blur();
        },
        async toggleElasticSearch() {
            this.showElasticSearch = !this.showElasticSearch;
        },
        async hideElasticSearch() {
            this.showElasticSearch = false;
        },
    }
}
</script>

<style scoped>
@import url('./style.css');

.carousel-container {
    width: 70%;
    margin: auto;
}

/* Product card styling */
.product-card {
    border: 1px solid var(--surface-200);
    border-radius: 8px;
    margin: 8px;
    padding: 16px;
}

/* Image container for relative positioning */
.product-image-container {
    position: relative;
    text-align: center;
}

/* Product image styling */
.product-image {
    width: 100%;
    border-radius: 8px;
}

/* Tag position */
.inventory-tag {
    position: absolute;
    left: 5px;
    top: 5px;
}

/* Product name styling */
.product-name {
    font-weight: 500;
    margin-bottom: 8px;
}

/* Footer styling */
.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Price text styling */
.product-price {
    font-size: 1.2rem;
    font-weight: bold;
}

.homepage-icon-wrapper Carousel {
    padding: 20%;
    width: 100%;
}
</style>