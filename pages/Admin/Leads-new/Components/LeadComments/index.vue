<template>
 <div class="main-container mt-[32px]">
    <!-- Comments & Follow Up Section -->
    <div class="comments-section">
      <div class="header">
        <h2>Comments & Follow Up</h2>
        <button class="add-btn">+ Add <i class="bi bi-chevron-down" ></i></button>
      </div>

      <!-- Comment Card -->
      <div class="comment-card d-flex justify-content-between align-items-center">
<div class="w-[65%]">
        <h4>Comment Title</h4>
        <p class="desc">Lorem ipsum dolor sit amet consectetur. Feugiat tempor quis suscipit sit et sed. Amet.</p>
        
          <span class="footer">12 May 2025</span>
        </div>
        
        <span class="tag comment">Comment</span>
      </div>

      <!-- Follow-up Card -->
      <div class="comment-card followup">
        <div class="w-[65%]">
        <h4>Lorem ipsum dolor sit amet consectetur. Orci.</h4>
        <strong class="followup-text">FOLLOW UP</strong>
        <p class="desc">Lorem ipsum dolor sit amet consectetur. Feugiat tempor quis suscipit sit et sed. Amet.</p>
        <p class="status"><span class="text-[#ff5757] font-medium">STATUS</span> <span class="text-[#000000]">•</span> 12 May 2025 | 08:10 AM</p>
      </div>
    </div>

      <!-- Call Connected -->
      <div class="comment-card d-flex justify-content-between align-items-center">
        <div class="w-[65%]">
        <h4>Lorem ipsum dolor sit amet consectetur. Orci.</h4>
        <strong class="comment-label">COMMENT</strong>
        <p class="desc">Lorem ipsum dolor sit amet consectetur. Feugiat tempor quis suscipit sit et sed. Amet.</p>
        <span class="footer call">12 May 2025 | 08:10 AM</span>
        </div>
        <div class="d-flex flex-col gap-[9px]">
          <span class="call-status connected">Call Connected</span>
          <small class="call-info ">CALL DURATION</small>
          <p class="call-info-text d-flex align-items-center gap-2"><i class="bi bi-clock"></i>08 Min 32 sec</p>
        </div>
      </div>

      <!-- Call Not Picked -->
      <div class="comment-card d-flex justify-content-between align-items-center">
        <div class="w-[65%]" >
            <h4>Lorem ipsum dolor sit amet consectetur. Orci.</h4>
        <strong class="comment-label">COMMENT</strong>
        <p class="desc">Lorem ipsum dolor sit amet consectetur. Feugiat tempor quis suscipit sit et sed. Amet.</p>
        <span class="footer call">12 May 2025 | 08:10 AM</span>
        </div>
        <div class="d-flex flex-col gap-[9px]">
          <span class="call-status not-picked">Call Not Picked</span>
            <small class="call-info">CALL LOG</small>
            <p class="call-info-text d-flex align-items-center gap-2"><i class="bi bi-clock"></i>Nil</p>
          </div>
        </div>
    </div>

    <!-- Logs Section -->
    <div class="logs-section">
      <h2>Logs</h2>
      <div class=" max-h-[420px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-[#d5d2dc]-200 p-4 d-flex flex-col gap-[23px] ">
        <div class="log">
        <p class="log-title">Title • Action</p>
        <small>Time & Date • User</small>
      </div>
      <div class="log">
        <p class="log-title">Blog Applied For Promotion <span class="log-action update">• UPDATE</span></p>
        <small>02:30 PM, 21st Jan 2024 • Admin Name</small>
      </div>
      <div class="log">
        <p class="log-title">Blog Applied For Pro.... <span class="log-action add">• ADD</span></p>
        <small>02:30 PM, 21st Jan 2024 • Admin Name</small>
      </div>
      <div class="log">
        <p class="log-title">Blog Applied For Promotion <span class="log-action delete">• DELETE</span></p>
        <small>02:30 PM, 21st Jan 2024 • Admin Name</small>
      </div>
      <div class="log">
        <p class="log-title">Blog Applied For Promotion <span class="log-action delete">• DELETE</span></p>
        <small>02:30 PM, 21st Jan 2024 • Admin Name</small>
      </div>
      <div class="log">
        <p class="log-title">Blog Applied For Promotion <span class="log-action delete">• DELETE</span></p>
        <small>02:30 PM, 21st Jan 2024 • Admin Name</small>
      </div>
    </div>
    </div>
  </div>

</template>

<style scoped>
@import url('style.css');
</style>