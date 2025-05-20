<template>
    <Sidebar
    header="Upload Document"
    position="right"
    :visible="visible"
    @update:visible="visible = $event"
    :style="{ width: '500px' }" :transitionOptions="{ duration: 100 }" 
  >
  <div class="d-flex flex-col justify-content-between h-[73vh] ">
    <div>
        <div class="update-events-1stfrm">
            <div class="update-events-1sttitle">
                <span class="update-events-titleedit">
                    <p>Document Title</p>
                </span>
            </div>
            <div class="update-events-1stdrop">
                <div class="mb-3">
                    <input type="text" id="update-event-selet" disabled  placeholder="10th Class Marksheet"/>
                </div>
            </div>
        </div>

        <div class="upload-container">
            <label for="file-upload" class="upload-label">
                <img src="/img/png/Rectangle 2758.png" alt=""  />
                <span>
                    <img src="/img/svg/upload-doc.svg" alt="upload icon" width="65" height="65" />
                </span>
                <p ></p>
                <p >Upload Document</p>
                <input type="file" id="file-upload" accept="application/pdf"  hidden />
            </label>
            <span  class="text-danger"></span>
            <p class="text-[#64748B]">Allowed File Type: PDF & Image</p>
        </div>
        <div class="update-events-1stfrm ">
            <div class="update-events-1sttitle pt-2">
                <span class="update-events-titleedit">
                    <p>Select An Existing File</p>
                </span>
            </div>
            <div class="update-events-1stdrop">
                <div class="select-option cursor-pointer">
          <select  class="custom-select cursor-pointer" required
           >
            <option value="" disabled>Select a Country</option>
            <option >hello
            </option>
          </select>
        </div>
            </div>
        </div>

</div>
        <div class="d-flex  justify-content-between gap-2 pt-4">
            <button class="btn-white" @click="$emit('update:visible', false)" >Go Back</button>
            <button class="btn-red" type="submit" >
                
                Upload
            </button>
        </div>
        </div>
    </Sidebar>


    
</template>
<script>
export default {
  name: 'UploadSidebarWithFile',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:visible'],
};
</script>



<style>
@import url('style.css');
</style>