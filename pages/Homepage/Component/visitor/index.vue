<template>
    <section v-if="visitordata && visitordata?.length > 0" class="visa-expert-section">
        <div class="mx-auto w-md-10/12 w-[90%] study-visa-section-homepage">
            <div class="row compa-style-grid">
                <div class="col-md-12 col-12 cstm-widdth-cmpp">
                    <div class="title d-flex justify-content-between mb-[30px] near-by-clss">
                        <div class="card-content-description w-[65%]">
                            <h2 class="settle-abroad-text font-semibold text-[#000000] text-[24px]">Consult with
                                Immigration Experts to
                                <span style="color: #ff5757;">Settle Abroad</span>
                            </h2>
                            <p class="study-text font-normal text-[#202020] opacity-75 text-[16px]">Get expert
                                guidance from immigration consultants to settle abroad seamlessly. Compare services, and
                                read reviews to find the right consultant for your move abroad.</p>
                        </div>
                        <span @click="goToSearch('business-listing', 'Visitor Visa')"
                            class="study-abroad-view mt-2 text-[#666276] text-[14px] text-wrap cursor-pointer opacity-75">View
                            all→
                        </span>
                    </div>
                        <div class="imigartion">
                        <div class="grid grid-cols-2 gap-4 max-[1250px]:grid-cols-1 w-[-webkit-fill-available] max-[1300px]:mx-auto">
                            <BaseCard
                                v-for="item in visitordata.slice(0, 4)"
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useFetch, useRouter } from '#app'
import BaseCard from '~/components/Home/BaseCard/BaseCard.vue'

// Props
const props = defineProps({
  visitordata: Array
})

// Get current user info
const { data: me } = await useFetch('/api/users/admin')

// States
const wish = ref([])

onMounted(() => {
  userWishlist()
})

const userWishlist = async () => {
  if (me.value?.isLogged) {
    const res = await userGet('/user-wishlist-list/')
    if (res.data.status) wish.value = res.data.data
  }
}

const isCompanyBookmarked = (company_id) => {
  return me.value?.isLogged && wish.value?.some(item => item.company_id === company_id)
}

const addBookmark = async (_id) => {
  if (isCompanyBookmarked(_id)) {
    await userDelete(`/remove-homepage-wishlist/${_id}`)
    successAlert('Wishlist Removed successfully')
  } else {
    await userGet(`/add-user-wishlist/${_id}`)
    successAlert('Wishlist Added successfully')
  }
  await userWishlist()
}

const router = useRouter()
const goToSearch = (activeButton, category) => {
  router.push({
    path: '/search',
    query: { activeButton, category }
  })
}
</script>