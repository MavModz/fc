<template>
 <div class="cards mt-[48px]" >
      <div class=" r-card ">
        <img src="/public/img/png/dummy-image.png" alt="college" class="card-image" />
        <div class="card-content">
          <h3>Olds College of Agriculture & Technology</h3>
          <p class="address d-flex align-items-center gap-[7px]"><i class="bi bi-geo-alt"></i> 4500 50 St, Olds, AB T4H
            1R6, Canada</p>
          <p class="status approved mt-4">Successfully Approved <span>On <strong>31st JUN 2023</strong></span></p>
          <div class="d-flex align-items-center justify-content-between">
            <span class="tag">Company Recommended</span>
            <a href="#"  class="comments-link">view comments</a>
          </div>
        </div>
        <input type="radio" value="yes" class="checkbox" checked/>
      </div>

      <div class=" r-card mt-3">
        <img src="/public/img/png/dummy-image.png" alt="college" class="card-image" />
        <div class="card-content">
          <h3>Olds College of Agriculture & Technology</h3>
          <p class="address d-flex align-items-center gap-[7px]"><i class="bi bi-geo-alt"></i> 4500 50 St, Olds, AB T4H
            1R6, Canada</p>
          <p class="status approved mt-4">Applied On <span>On <strong>31st JUN 2023</strong></span></p>
          <a href="#" class="comments-link">view comments</a>
        </div>
        <input type="radio"  class="checkbox" />
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
        <button class="shortlist-btn">Finalize Selected</button>
      </div>
    </div>
</template>
<style scoped>
@import url('style.css');
</style>