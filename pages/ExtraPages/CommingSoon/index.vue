<template>
    <body>
    <!-- 01 Preloader -->
    <div class="loader-wrapper" id="loader-wrapper" style="display: none;">
        <div class="loader"></div>
    </div>
    <!-- Preloader end -->
    <!-- 02 Main page -->
    <section class="page-section">
        <div class="full-width-screen">
            <div class="container-fluid p-0">
                <div class="content-detail p-0">
                    <div class="container-txt p-0">
                        <h1><span>Coming Soon</span></h1>
                        <div class="blobs_1"></div>
                        <div class="blobs_2"></div>
                        <div class="blobs_3"></div>
                        <div class="blobs_4"></div>
                        <div class="blobs_5"></div>
                        <div class="blobs_6"></div>
                        <div class="blobs_7"></div>
                    </div>
                    <h4 class="sub-title">Good Things Takes Time</h4>

                    <p class="detail-text">We're sorry,<br> The page Is Under Process .</p> 

                    <div class="back-btn">
                        <a class="btn" @click="goBack">Back to page</a>
                    </div>
                </div>
            </div>
        </div>
    </section>




</body>
</template>
<script setup>
const goBack = () => {
  window.history.back();
}
</script>



<style scoped>
@import url('./style.css');
</style>