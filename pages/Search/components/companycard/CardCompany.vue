<template>
    <BaseCompanyCard
        :imageUrl="imageUrl"
        :companyName="companyName"
        :rating="rating"
        :reviewsCount="reviewsCount"
        :state="state"
        :city="city"
        :badgeType="badgeType"
        :popularCount="popularCount"
        :isBookmarked="isBookmarked"
        :isLogged="isLogged"
        :addToWishlist="addToWishlist"
        :viewCompany="viewCompany"
    />
</template>

<script>
import BaseCompanyCard from '~/components/Home/BaseCompanyCard/BaseCompanyCard.vue'

export default {
    name: "CardCompany",
    components: {
        BaseCompanyCard
    },
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
    }
};
</script>