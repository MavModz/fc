<template>
    Clearing Cache
</template>

<script>
export default{
    async mounted(){
        localStorage.clear();
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        }
        location.replace('/');
    }
}
</script>