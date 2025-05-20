<template>

{{ userData }}
  this is subadmin dashboard

</template>

<script>
definePageMeta({
  layout: 'subadmin',
})

export default {
  data() {
    return {
      userData: useState('userData'),
      field: 'dashboard'
    }
  },
  async setup() {
    const data = (await useFetch('/api/users/admin')).data.value;
    return { data };
  },
  mounted() {
    activateMenu('dashboard', "Subadmin Dashboard");
  }
}

</script>

<style scoped>

</style>