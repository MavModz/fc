<template>
  <div class="r-container mt-[32px]">
    <div class="top-bar">
      <div class="search-wrapper">
        <span class="search-icon"><i class="bi bi-search"></i></span>
        <input type="text" placeholder="Search" />
      </div>
      <div class="tabs">
        <div class="tab active" :class="{ active: activeTab === 'recommend' }" @click="activeTab = 'recommend'">
          Recommendations</div>
        <div class="tab" :class="{ active: activeTab === 'shortlist' }" @click="activeTab = 'shortlist'">Shortlisted
        </div>
        <div class="tab" :class="{ active: activeTab === 'finalize' }" @click="activeTab = 'finalize'">Finalized</div>
      </div>
    </div>

    <div class="cards mt-[48px]" v-if="activeTab === 'recommend'">
      <div class=" r-card ">
        <img src="/public/img/png/dummy-image.png" alt="college" class="card-image" />
        <div class="card-content">
          <h3>Olds College of Agriculture & Technology</h3>
          <p class="address d-flex align-items-center gap-[7px]"><i class="bi bi-geo-alt"></i> 4500 50 St, Olds, AB T4H
            1R6, Canada</p>
          <p class="status approved mt-4">Successfully Approved <span>On <strong>31st JUN 2023</strong></span></p>
          <a href="#" @click="viewcomments = true" class="comments-link">view comments</a>
        </div>
        <input type="checkbox" class="checkbox" />
      </div>

      <div class=" r-card mt-3">
        <img src="/public/img/png/dummy-image.png" alt="college" class="card-image" />
        <div class="card-content">
          <h3>Olds College of Agriculture & Technology</h3>
          <p class="address d-flex align-items-center gap-[7px]"><i class="bi bi-geo-alt"></i> 4500 50 St, Olds, AB T4H
            1R6, Canada</p>
          <p class="status approved mt-4">Successfully Approved <span>On <strong>31st JUN 2023</strong></span></p>
          <div class="d-flex align-items-center justify-content-between">
            <span class="tag">Company Recommended</span>
            <a href="#" @click="viewcomments = true" class="comments-link">view comments</a>
          </div>
        </div>
        <input type="checkbox" class="checkbox" />
      </div>


      <div class=" r-card mt-3 ">
        <img src="/public/img/png/dummy-image.png" alt="college" class="card-image" />
        <div class="card-content">
          <h3>Olds College of Agriculture & Technology</h3>
          <p class="address d-flex align-items-center gap-[7px]"><i class="bi bi-geo-alt"></i> 4500 50 St, Olds, AB T4H
            1R6, Canada</p>
          <p class="status approved mt-4">Successfully Approved <span>On <strong>31st JUN 2023</strong></span></p>
          <a href="#" @click="viewcomments = true" class="comments-link">view comments</a>
        </div>
        <input type="checkbox" class="checkbox" checked />
      </div>
      <div class="recommendation-footer d-flex align-items-center justify-content-between">
        <div class="pagination ">
          <span class="page active">1</span>
          <span class="page">2</span>
          <span class="page">3</span>
          <span class="dots">...</span>
          <span class="page">8</span>
          <span class="arrow"><i class="bi bi-chevron-right"></i></span>
        </div>
        <button class="shortlist-btn">Shortlist Selected</button>
      </div>
    </div>




    <ShortlistedTab v-if="activeTab === 'shortlist'" />
    <FinalizeTab v-if=" activeTab === 'finalize'" />

  </div>
  <Sidebar v-model:visible="viewcomments" position="right" class="w-[90vw] sm:w-[30rem] md:w-[25rem] lg:w-[33rem]">



    <div class="comments-section">
      <div class="d-flex justify-content-between align-items-start">
        <div class="comments-header">
          <h2>Comments</h2>
          <span class="comment-count">10</span>
        </div>
        <div>
          <button @click="viewcomments = false" class="text-black-500 hover:text-black text-2xl mt-[-30px]">
            ✕
          </button>
        </div>
      </div>
      <div class="comment-item">
        <div class="d-flex align-items-center gap-3">
          <div class="marker bg-[#1BC5BD]"></div>
          <div class="marker-sq bg-[#C9F7F5]"></div>
        </div>
        <div class="comment-content">
          <p>The Offer Letter of this College will be <strong>Costing $200</strong> and It can be waved Off</p>
          <span class="timestamp">15m ago</span>
        </div>
      </div>
      <div class="comment-item">
        <div class="d-flex align-items-center gap-3">
          <div class="marker bg-[#8950FC]"></div>
          <div class="marker-sq bg-[#EEE5FF]"></div>
        </div>
        <div class="comment-content">
          <p>This College has Free 1 Month Hostel</p>
          <span class="timestamp">15m ago</span>
        </div>
      </div>
      <div class="comment-item">
        <div class="d-flex align-items-center gap-3">
          <div class="marker bg-[#FCB42A]"></div>
          <div class="marker-sq bg-[#FFF4DE]"></div>
        </div>
        <div class="comment-content">
          <p>This College Gives a Good Placement opportunities Starting at <strong>$15 Per Hour</strong></p>
          <span class="timestamp">15m ago</span>
        </div>
      </div>
    </div>
  </Sidebar>
</template>


<script>
import ShortlistedTab from './ShortlistedTab/index.vue';
import FinalizeTab from './FinalizeTab/index.vue';
export default {
  components: {
    ShortlistedTab,
    FinalizeTab,
  },
  data() {
    return {
      viewcomments: false,
      activeTab: 'recommend'
    }
  },
}
</script>
<style scoped>
@import url('style.css');
</style>