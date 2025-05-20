<template>
    This is how it works
</template>

<script setup>
import HomeMeta from '~/content/HomeMeta.json'
definePageMeta({
  layout: 'home',
})
const route = useRoute().href.split("/")[2]
// useHead({
//   title: HomeMeta[route].title,
//   meta: HomeMeta[route].meta,
//   link: HomeMeta[route].link,
// })
</script>

<script>
export default {
  components: {
    
  },
  // FcUser component logic goes here
};
</script>

<style scoped>
@import url('./style.css');
</style>