<template>

  <section v-if="nearmedata && nearmedata?.length > 0" class="visa-expert-section bg-[#f8f7fc]">
    <div class="mx-auto w-md-10/12 w-[90%] study-visa-section-homepage"">
      <div class="row compa-style-grid">

        <div class="col-md-12 col-12 cstm-widdth-cmpp">
          <div class="title mb-[30px] near-by-clss mt-[20px]">
            <span class="text-[#ff5757] text-left uppercase mb-[5px] text-[14px]">Connect with Immigration
              Experts</span>
            <h2 class="immigration-near-you-heading font-bold text-[#1f1b2d] text-left">Find Immigration Consultants
              <span style="color: #ff5757;">Near You</span>
            </h2>
            <p class="text-left  study-text  font-normal text-[#202020] opacity-75">Now, you can easily connect with
              Consultants in your area. Get personalized guidance for your needs and take the first step toward your
              Global Journey.</p>
          </div>
          <div>
            <div class="imigartion">
                        <div class="grid grid-cols-2 gap-4 max-[1250px]:grid-cols-1 w-[-webkit-fill-available] max-[1300px]:mx-auto">
                            <BaseCard
                                v-for="item in nearmedata.slice(0, 8)"
                                :key="item._id"
                                :item="item"
                                :me="me"
                                :wish="wish"
                                @add-bookmark="addBookmark"
                                @show-alert="successAlert"
                            />
              </div>
            </div>

            <div class="mt-[10px] near-you-explore-all-button">
              <span @click="goToSearch('business-listing', 'Study Visa')"
                class="cursor-pointer opacity-75 text-[14px] near-you-explore-all-button">Explore all →

              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useFetch, useRouter } from '#app'
import BaseCard from '~/components/Home/BaseCard/BaseCard.vue'

// ✅ Fetch user data
const { data: me } = await useFetch('/api/users/admin')

// ✅ Prop
const props = defineProps({
  nearmedata: Array
})

// ✅ isMobile detection
const isMobile = ref(false)

const checkScreen = () => {
  isMobile.value = window.innerWidth <= 590
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})

// ✅ Bookmark logic
const wish = ref([])
const fetchWishlist = async () => {
  if (me.value?.isLogged) {
    const response = await userGet(`/user-wishlist-list/`)
    if (response.data.status) {
      wish.value = response.data.data
    }
  }
}
onMounted(fetchWishlist)

const isCompanyBookmarked = (company_id) => {
  return me.value?.isLogged && wish.value?.some(item => item.company_id === company_id)
}

const addBookmark = async (_id) => {
  if (isCompanyBookmarked(_id)) {
    await userDelete(`/remove-homepage-wishlist/${_id}`)
    successAlert("Wishlist Removed successfully")
  } else {
    await userGet(`/add-user-wishlist/${_id}`)
    successAlert("Wishlist Added successfully")
  }
  await fetchWishlist()
}

const router = useRouter()
const goToSearch = (activeButton, category) => {
  router.push({
    path: '/search',
    query: {
      activeButton,
      category
    }
  })
}
</script>

