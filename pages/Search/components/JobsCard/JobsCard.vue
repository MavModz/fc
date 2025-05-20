<template>
    <BaseJobsCard
        :imageUrl="imageUrl"
        :PackageName="PackageName"
        :companyName="companyName"
        :state="state"
        :city="city"
        :priceValue="priceValue"
        :companyImg="companyImg"
        :popularCount="popularCount"
        :trendingCount="trendingCount"
        :newCount="newCount"
        :badgeType="badgeType"
        :viewPackage="viewPackage"
    />
</template>

<script>
import BaseJobsCard from '~/components/Home/BaseJobsCard/BaseJobsCard.vue'

export default {
    name: "TouristCard",
    components: {
        BaseJobsCard
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
    }
};
</script>