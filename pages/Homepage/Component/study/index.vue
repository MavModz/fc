<template>
    <section v-if="studydata && studydata?.length > 0" class="visa-expert-section mb-[50px]">
        <div class="mx-auto w-md-10/12 w-[90%] study-visa-section-homepage">
            <div class="row compa-style-grid">
                <div class="col-md-12 col-12 cstm-widdth-cmpp">
                    <div class="title d-flex justify-content-between mb-[30px] near-by-clss">
                        <div class="card-content-description w-[65%]">
                            <h2 class="study-visa-heading font-semibold text-[#000000] text-[24px]">Find Immigration
                                experts for Your <span style="color: #ff5757;">Study Visa</span></h2>
                            <p class="study-text font-normal text-[#202020] text-[16px] opacity-75">Choose the right
                                expert for you among the best and most trusted Immigration Consultants. Get expert
                                guidance and personalized recommendations to secure Admission at your Dream University.
                            </p>
                        </div>
                        <span @click="goToSearch('business-listing', 'Study Visa')"
                            class="mt-2 text-[#666276] study-visa-view text-[14px] cursor-pointer opacity-75">View all
                            →
                        </span>
                    </div>
                        <div class="imigartion">
                        <div class="grid grid-cols-2 gap-4 max-[1250px]:grid-cols-1 w-[-webkit-fill-available] max-[1300px]:mx-auto">
                            <BaseCard
                                v-for="item in studydata.slice(0, 8)"
                                :key="item._id"
                                :item="item"
                                :me="me"
                                :wish="wish"
                                @add-bookmark="addBookmark"
                                @show-alert="successAlert"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useFetch } from '#app'
import BaseCard from '~/components/Home/BaseCard/BaseCard.vue'

export default {
    components: {
        BaseCard
    },

    props: {
        studydata: Array
    },

    async setup() {
        const { data: me } = await useFetch('/api/users/admin')
        return { me }
    },

    data() {
        return {
            slug: null,
            wish: null,
        }
    },

    async mounted() {
        this.userWishlist()
    },

    methods: {
        async userWishlist() {
            if (this.me?.isLogged) {
                await userGet(`/user-wishlist-list/`).then((response) => {
                    if (response.data.status) {
                        this.wish = response.data.data
                    }
                })
            }
        },

        async addBookmark(_id) {
            if (this.isCompanyBookmarked(_id)) {
                await this.removeWishlists(_id)
                successAlert("Wishlist Removed successfully")
            } else {
                await userGet(`/add-user-wishlist/${_id}`)
                successAlert("Wishlist Added successfully")
            }
            this.userWishlist()
        },

        isCompanyBookmarked(company_id) {
            if (this.me?.isLogged && this.wish && this.wish?.length > 0) {
                return this.wish.some(item => item.company_id === company_id)
            }
            return false
        },

        async removeWishlists(id) {
            await userDelete(`/remove-homepage-wishlist/${id}`)
        },

        goToSearch(activeButtonValue, categoryValue) {
            this.$router.push({
                path: '/search',
                query: {
                    activeButton: activeButtonValue,
                    category: categoryValue
                },
            })
        }
    }
}
</script>