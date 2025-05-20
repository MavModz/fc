<template>
    <BaseTouristCard
        :imageUrl="imageUrl"
        :PackageName="PackageName"
        :companyName="companyName"
        :rating="rating"
        :reviewsCount="reviewsCount"
        :state="state"
        :city="city"
        :priceValue="priceValue"
        :night="night"
        :day="day"
        :companyImg="companyImg"
        :popularCount="popularCount"
        :trendingCount="trendingCount"
        :newCount="newCount"
        :badgeType="badgeType"
        :viewPackage="viewPackage"
    />
</template>

<script>
import BaseTouristCard from '~/components/Home/BaseTouristCard/BaseTouristCard.vue'

export default {
    name: "TouristCard",
    components: {
        BaseTouristCard
    },
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
        priceValue: {
            type: Number,
            required: true,
            default: 0
        },
        night: {
            type: Number,
            required: true,
            default: 0
        },
        day: {
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
    }
};
</script>
