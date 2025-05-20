<template>
    <div class="w-[-webkit-fill-available]">
        <div class="imigartion-card bg-white">
            <NuxtLink
                :to="item?.state.replaceAll(' ', '-') + '/immigration-company/' + item.company_name?.replaceAll(' ', '-') + '/' + item?.landmark?.replaceAll(' ', '-') + '/f&c-' + item?._id + '/about-us'"
                class="background stdy-cmp-imghgtr">
                <NuxtImg :src="item.symbol ? item.symbol : '/img/svg/Star.svg'" :alt="item.company_name" loading="lazy" />
            </NuxtLink>
            <div class="card-down">
                <div style="display:flex;justify-content: space-between ;cursor:pointer">
                    <NuxtLink
                        :to="item?.state.replaceAll(' ', '-') + '/immigration-company/' + item.company_name?.replaceAll(' ', '-') + '/' + item?.landmark?.replaceAll(' ', '-') + '/f&c-' + item?._id + '/about-us'"
                        class="text-[#3C3C3C] font-bold leading-[32px]">
                        <span>{{ getSlicedContent(item.company_name, 20) }}</span>
                    </NuxtLink>
                    <div v-if="!isMobile" style="display: flex;gap:30px;justify-content: space-between;">
                        <i v-if="me?.isLogged"
                            :class="isCompanyBookmarked(item._id) ? 'pi pi-bookmark-fill text-[#ff5757] cursor-pointer' : 'pi pi-bookmark cursor-pointer hover:text-[#ff5757]'"
                            @click="addBookmark(item._id)">
                        </i>
                        <i v-if="me?.token == false" @click="$router.push('/auth/login')"
                            class="pi pi-bookmark cursor-pointer hover:text-[#ff5757]">
                        </i>
                        <i @click="copyToClipboard(item)" class="pi pi-share-alt hover:text-[#ff5757]"></i>
                    </div>
                </div>

                <div>
                    <NuxtLink>
                        <span>{{ getSlicedContent(item.overview, 65) }}</span>
                    </NuxtLink>
                </div>

                <NuxtLink
                    :to="item?.state.replaceAll(' ', '-') + '/immigration-company/' + item.company_name?.replaceAll(' ', '-') + '/' + item?.landmark?.replaceAll(' ', '-') + '/f&c-' + item?._id + '/about-us'"
                    class="d-flex align-items-center gap-2 w-fi cursor-pointert mt-2.5 mb-2.5">
                    <i class="bi bi-geo-alt"></i>
                    <span class="text-[#9691A4] cursor-pointer font-normal m-0 overflow-hidden text-ellipsis whitespace-nowrap w-auto text-[15px]">
                        {{ getSlicedContent(item.address, 30) }}
                    </span>
                </NuxtLink>

                <div v-if="!isMobile" class="card-4" style="display: flex;justify-content: space-between; margin-top: 15px;">
                    <NuxtLink
                        :to="item?.state.replaceAll(' ', '-') + '/immigration-company/' + item.company_name?.replaceAll(' ', '-') + '/' + item?.landmark?.replaceAll(' ', '-') + '/f&c-' + item?._id + '/about-us'"
                        class="flex align-items-center gap-2 w-fit cursor-pointer">
                        <div class="gap-1 pl-1.5 pr-1.5 flex bg-[#f9f9f9] border border-[#7cc5fa] rounded-md cursor-pointer">
                            <NuxtImg src='/img/svg/Star.svg' alt="star" loading="lazy" />
                            <span class="text-[#8C8C8C] font">{{ item.average_review }}</span>
                        </div>
                        <span class="text-[#8C8C8C] font">{{ item.total_reviews }} Reviews</span>
                        <span class="gap-1 text-[#666276] text-[16px] leading-[24px] flex font-normal cursor-pointer">
                            <i class="bi bi-geo-alt"></i>{{ metersToKilometers(item.distance) }}
                        </span>
                    </NuxtLink>

                    <div class="cta-redirect" style="display: flex; align-items: center;">
                        <i @click="callNow(item.phone)" class="pi pi-phone cursor-pointer hover:text-[#ff5757]"></i>
                        <template v-if="item.whatsapp_number">
                            <NuxtLink :to="`https://wa.me/${item.whatsapp_number}`" target="_blank" external>
                                <i class="pi pi-whatsapp cursor-pointer hover:text-[#ff5757]"></i>
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <i class="pi pi-whatsapp text-gray-400 cursor-not-allowed"></i>
                        </template>
                    </div>
                </div>

                <div v-else class="card-4-mobile">
                    <NuxtLink
                        :to="item?.state.replaceAll(' ', '-') + '/immigration-company/' + item.company_name?.replaceAll(' ', '-') + '/' + item?.landmark?.replaceAll(' ', '-') + '/f&c-' + item?._id + '/about-us'"
                        class="flex align-items-center gap-2 w-fit cursor-pointer">
                        <div class="gap-1 pl-1.5 pr-1.5 flex bg-[#f9f9f9] border border-[#7cc5fa] rounded-md cursor-pointer">
                            <NuxtImg src='/img/svg/Star.svg' alt="star" loading="lazy" />
                            <span class="text-[#8C8C8C] font">{{ item.average_review }}</span>
                        </div>
                        <span class="text-[#8C8C8C] font">{{ item.total_reviews }} Reviews</span>
                        <span class="gap-1 text-[#666276] text-[16px] leading-[24px] flex font-normal cursor-pointer">
                            <i class="bi bi-geo-alt"></i>{{ metersToKilometers(item.distance) }}
                        </span>
                    </NuxtLink>

                    <div class="cta-redirect-phone" style="display: flex; justify-content: flex-start;gap: 30px; margin-top: 18px;">
                        <i v-if="me?.isLogged"
                            :class="isCompanyBookmarked(item._id) ? 'pi pi-bookmark-fill text-[#ff5757] cursor-pointer' : 'pi pi-bookmark cursor-pointer hover:text-[#ff5757]'"
                            @click="addBookmark(item._id)">
                        </i>
                        <i v-if="me?.token == false" @click="$router.push('/auth/login')"
                            class="pi pi-bookmark cursor-pointer hover:text-[#ff5757]">
                        </i>
                        <i @click="copyToClipboard(item)" class="pi pi-share-alt hover:text-[#ff5757]"></i>
                        <i @click="callNow(item.phone)" class="pi pi-phone cursor-pointer hover:text-[#ff5757]"></i>
                        <template v-if="item.whatsapp_number">
                            <NuxtLink :to="`https://wa.me/${item.whatsapp_number}`" target="_blank" external>
                                <i class="pi pi-whatsapp cursor-pointer hover:text-[#ff5757]"></i>
                            </NuxtLink>
                        </template>
                        <template v-else>
                            <i class="pi pi-whatsapp text-gray-400 cursor-not-allowed"></i>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useFetch } from '#app'

export default {
    name: 'BaseCard',
    props: {
        item: {
            type: Object,
            required: true
        },
        me: {
            type: Object,
            required: true
        },
        wish: {
            type: Array,
            default: () => []
        }
    },

    setup() {
        const isMobile = ref(false)
        
        const checkScreen = () => {
            isMobile.value = window.innerWidth <= 430
        }
        
        onMounted(() => {
            checkScreen()
            window.addEventListener('resize', checkScreen)
        })
        
        onBeforeUnmount(() => {
            window.removeEventListener('resize', checkScreen)
        })

        return {
            isMobile
        }
    },

    methods: {
        getSlicedContent(content, length) {
            if (!content) return ''
            return content.length > length ? content.slice(0, length) + '...' : content
        },

        isCompanyBookmarked(company_id) {
            if (this.me?.isLogged && this.wish && this.wish?.length > 0) {
                return this.wish.some(item => item.company_id === company_id)
            }
            return false
        },

        async addBookmark(_id) {
            this.$emit('add-bookmark', _id)
        },

        copyToClipboard(item) {
            const url = `${item?.state.replaceAll(' ', '-')}/immigration-company/${item.company_name?.replaceAll(' ', '-')}/${item?.landmark?.replaceAll(' ', '-')}/f&c-${item?._id}/about-us`
            navigator.clipboard.writeText(window.location.origin + '/' + url)
                .then(() => {
                    this.$emit('show-alert', 'Link copied to clipboard!')
                })
                .catch(err => {
                    console.error('Error copying to clipboard: ', err)
                })
        },

        callNow(phone) {
            window.location.href = `tel:${phone}`
        },

        metersToKilometers(meters) {
            return (meters / 1000).toFixed(2) + " km"
        }
    }
}
</script>

<style>
/* Import styles without scoped to allow them to affect child components */
@import url('./style.css');

/* Add any component-specific styles here */
.imigartion-card {
    transition: all 0.3s ease;
}

@media (max-width: 512px) {
    .imigartion-card {
        min-width: unset !important;
    }
}
</style>