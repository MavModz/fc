<template>
    <div class="country-cards-data">
        <div class="country-card-container">
            <div class="image-area relative">
                <NuxtImg :src="imageUrl" class="card-img" width="438" height="200" :alt="PackageName" loading="lazy" />
                <div class="badges-area">
                    <div :class="['badge-wrapper', badgeType]" v-if="popularCount >= 1">
                        <NuxtImg src="/svg-new-img/gravity-ui_star-fill.svg" width="12" height="12" alt="star" loading="lazy" />
                        {{ badgeType.charAt(0).toUpperCase() + badgeType.slice(1) }}
                    </div>
                    <button class="bookmark-area mr-4">
                        <NuxtImg src="/svg-new-img/Wish.svg" width="16" height="16" alt="bookmark" loading="lazy" />
                    </button>
                </div>
            </div>
            <div class="company-info-area flex flex-col gap-2">
                <div class="title-info flex items-center justify-between">
                    <h5 @click="viewPackage">{{ PackageName }}</h5>
                </div>
                <div class="bottom-info flex justify-between gap-3 items-center">
                    <div class="addres-info-wrapper flex gap-[12px]">
                        <div class="rating-area flex gap-2 items-center">
                            <NuxtImg :src="companyImg" width="20" height="20" class="company-profile-img" :alt="companyName" loading="lazy" />
                            <h6>{{ companyName }}</h6>
                        </div>
                        <div class="address-info flex items-center justify-center">
                            <NuxtImg src="/img/svg/pin-2.svg" width="16" height="16" alt="location" loading="lazy" />
                            <span class="flex">{{ city }}</span>
                        </div>
                    </div>

                    <div class="package-info-area">
                        <div class="price-info-wrapper">
                            <span class="flex items-center"><p>₹</p>{{ formattedPrice }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseJobsCard",
    props: {
        imageUrl: {
            type: String,
            required: true,
            default: ''
        },
        PackageName: {
            type: String,
            required: true,
            default: 'Package Name'
        },
        companyName: {
            type: String,
            required: true,
            default: 'Company Name'
        },
        state: {
            type: String,
            required: true,
            default: 'State'
        },
        city: {
            type: String,
            required: true,
            default: 'City'
        },
        priceValue: {
            type: Number,
            required: true,
            default: 0
        },
        companyImg: {
            type: String,
            required: true,
            default: ''
        },
        popularCount: {
            type: Number,
            default: 0,
        },
        trendingCount: {
            type: Number,
            default: 0,
        },
        newCount: {
            type: Number,
            default: 0,
        },
        badgeType: {
            type: String,
            default: 'popular',
        },
        viewPackage: {
            type: Function,
            required: true,
        }
    },
    computed: {
        formattedPrice() {
            return this.formatPrice(this.priceValue);
        }
    },
    methods: {
        formatPrice(value) {
            if (value >= 1000000) {
                return (value / 1000000).toFixed(1) + 'M';
            } else if (value >= 1000) {
                return (value / 1000).toFixed(1) + 'K';
            } else {
                return value;
            }
        }
    }
};
</script>

<style>
@import url('./style.css');
</style> 