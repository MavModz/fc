<template>
  <div class="doc-wrapper">
    <section class="user-details">
      <div class="languages">
        <div class="gallery-media-action">
          <div class="gallery-action">
            <div class="d-flex gap-3">
              <div class="search-container">
                <img src="/public/img/svg/search-icon.svg" />&nbsp;&nbsp;
                <input type="text" placeholder="Search" />
              </div>
              <div class="todo-row1">
                <button class="todo-row1-button dark-active">
                  All
                </button>
                <div class="dropdown">
                  <button class="todo-row1-button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Type</span>
                    <span><img class="arrow-down" src="/public/img/svg/down.svg" /></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Educational</a></li>
                    <li><a class="dropdown-item" href="#">Finance</a></li>
                    <li><a class="dropdown-item" href="#">Residential</a></li>
                    <li><a class="dropdown-item" href="#">Others</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="todo-row1-button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Category</span>
                    <span><img class="arrow-down" src="/public/img/svg/down.svg" /></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Educational</a></li>
                    <li><a class="dropdown-item" href="#">Finance</a></li>
                    <li><a class="dropdown-item" href="#">Residential</a></li>
                    <li><a class="dropdown-item" href="#">Others</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="relative ">
            <div class="addDocumnetButton d-flex gap-2 align-items-center" @click="addMediaOpen = true">
              + Add Document <i class="bi bi-chevron-down"></i>
            </div>
            <div class="upload-card absolute mt-2 right-0 z-10" v-if="addMediaOpen">
              <div class="upload-option relative"   @click="openUploadSidebar" >
                <span class="icon"><i class="bi bi-pencil-square"></i></span>
                <span class="text">Add new Documnent</span>
                <!-- <UploadDoc v-show="showUpload" :visible="showUpload" @update:visible="showUpload = $event" /> -->
                <!-- <UploadDoc :visible="showUpload" @update:visible="showUpload = $event" /> -->
              </div>
              <div class="upload-option relative" @click="openUploadSidebarWithFile">
                <span class="icon"><i class="bi bi-file-earmark-plus"></i></span>
                <span class="text">Link Existing Document</span>
                
              </div>
            </div>
            </div>
          </div>
</div>
          <section>
            <div class="ms-3">
              <div class="row">
                <!-- Render My Documents only -->
                <DocumentCards />
              </div>
            </div>

            <!-- Loading / Empty States -->
            <!-- <p v-if="loading" class="text-center mt-[150px]">Loading documents...</p>
            <p v-if="!loading && filteredDocuments.length === 0" class="text-center mt-[150px]">
              No documents found.
            </p> -->
          </section>

          <!-- <Paginator
            v-if="totalDocuments > 0"
            :rows="rows"
            :totalRecords="totalDocuments"
            :first="first"
            @page="onPageChange"
          /> -->
        </div>
    </section>

    <!-- Sidebars / Modals -->
    <!-- <UploadDoc :visible="upload" :documentData="selectedDocumentData" @close="closeUploadSidebar" /> -->

    <!-- <Dialog  modal header="Comment" :style="{ 'width': '571px !important' }">
        <div v-if="selectedComment" class="flex flex-col gap-2">
          <p class="comment-modal-admin">Admin • <span></span></p>
          <h4 class="comment-modal-company"></h4>
        </div>
        <div class="my-10">
          <p class="modal-comment-area"></p>
        </div>
        <div>
          <p class="modal-comment-date"> • <span>Update Request</span></p>
        </div>
      </Dialog> -->
  </div>

  <UploadDoc
      :visible="showUpload"
      @update:visible="showUpload = $event"
    />
    <UploadDocWithFile
      :visible="showUploadFile"
      @update:visible="showUploadFile = $event"
    />
</template>

<script>

import UploadDoc from './Components/UploadDoc/UploadDoc.vue';
import DocumentCards from './Components/DocumentCards/DocumentCards.vue';
import UploadDocWithFile from './Components/UploadDocWithFile/index.vue';


export default {
  components: { UploadDoc, DocumentCards, UploadDocWithFile },
  data() {
    return {
      access: false,
      upload: false,
      searchQuery: "",
      selectedType: "All",
      documents: [],
      modalVisible: false,
      selectedCompanies: [],
      loading: true,
      first: 0,
      addMediaOpen: false,
      rows: 8, showUpload: false,
      showUploadFile:false,
      totalDocuments: 0,
      page: 1,
      selectedDocumentTitle: null,
      documentLink: "",
      selectedDocumentData: null,
      commentModal: false,
      selectedComment: null,
    };
  },
  methods: {
    openUploadSidebar() {
      this.showUpload = true;  
      this.addMediaOpen = false; 
       
    },
    openUploadSidebarWithFile(){
      this.showUploadFile = true;  
      this.addMediaOpen = false; 
    }
  },

}
</script>
<style scoped>
@import url('style.css');
</style>