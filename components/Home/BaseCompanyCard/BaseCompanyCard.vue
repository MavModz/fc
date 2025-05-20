<template>
    <div class="country-cards-data">
        <div class="country-card-container">
            <div class="image-area">
                <NuxtImg @click="viewCompany" :src="imageUrl" class="card-img" :alt="companyName" loading="lazy" />
                <div class="badges-area">
                    <div :class="['badge-wrapper', badgeType]" v-if="popularCount >= 1">
                        <NuxtImg src="/svg-new-img/gravity-ui_star-fill.svg" width="12" height="12" alt="star" loading="lazy" />
                        {{ badgeType.charAt(0).toUpperCase() + badgeType.slice(1) }}
                    </div>
                    <button class="bookmark-area mr-4" @click="handleAddToWishlist">
                        <NuxtImg :src="isBookmarked ? '/svg-new-img/wishlist - filled.svg' : '/svg-new-img/Wish.svg'" 
                            width="16" height="16" alt="bookmark" loading="lazy" />
                    </button>
                </div>
            </div>
            <div class="company-info-area flex flex-col gap-2">
                <div class="title-info flex items-center justify-between">
                    <h5 @click="viewCompany">{{ companyName }}</h5>
                </div>
                <div class="bottom-info flex gap-3 items-center">
                    <div class="rating-area flex items-center gap-1">
                        <NuxtImg src="/svg-new-img/Star.svg" width="16" height="16" alt="star-rating" loading="lazy" />
                        <h6>{{ rating }}</h6>
                        <span>({{ reviewsCount }})</span>
                    </div>
                    <div class="address-info flex gap-2 items-center">
                        <NuxtImg src="/img/svg/pin-2.svg" width="16" height="16" alt="location" loading="lazy" />
                        <span>{{ state }}, {{ city }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseCompanyCard",
    props: {
        imageUrl: {
            type: String,
            required: true,
            default: ''
        },
        companyName: {
            type: String,
            required: true,
            default: 'Company Name'
        },
        rating: {
            type: Number,
            required: true,
            default: 0
        },
        reviewsCount: {
            type: Number,
            required: true,
            default: 0
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
        badgeType: {
            type: String,
            default: 'popular',
        },
        popularCount: {
            type: Number,
            default: 0
        },
        isBookmarked: {
            type: Boolean,
            required: true,
        },
        isLogged: Boolean,
        addToWishlist: {
            type: Function,
            required: true,
        },
        viewCompany: {
            type: Function,
            required: true,
        }
    },
    methods: {
        handleAddToWishlist() {
            if (!this?.isLogged) {
                this.$router.push('/auth/login');
            } else {
                this.addToWishlist();
            }
        }
    }
};
</script>

<style>
@import url('./style.css');
</style> 