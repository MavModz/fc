<!-- @format -->

<template>
  <div class="cnt">

    <div class="blog-publs">
      <div class="blog-drft">
        <NuxtLink to="/subadmin/blogs/published">
          <div class="pbl-clr">
            <p>Published</p>
          </div>
        </NuxtLink>
        <NuxtLink to="/subadmin/blogs/draft">
          <div class="dft-clr">
            <p>Draft</p>
          </div>
        </NuxtLink>
      </div>
      <div class="blog-add" v-if="userData.user.permission.blogs.add">
        <NuxtLink to="/subadmin/blogs/add">
          <button class="your-events-btn"><i class="bi bi-plus" style="font-size: 1.25rem;"></i> Add Blog</button>
        </NuxtLink>
      </div>
    </div>

    <DataView :value="allblogs" paginator :rows="8" :alwaysShowPaginator="false">
      <template #empty>
        <div v-if="loading" class="row">
          <div class="col-lg-4 mb-lg-0" v-for="i in 9">
            <div class="card mb-4 shadow shadow-xs">
              <div class="card-body">
                <div class="card">
                  <div class="border-round border-1 surface-border p-4 surface-card">
                    <div class="flex mb-3"></div>
                    <Skeleton width="100%" height="180px"></Skeleton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EmptyContent :title="'Add First Blog'" :desc="'No Blogs Found'" />
      </template>
      <template #list="s">
        <div class="row m-3">
          <div class="col-sm-3 mb-sm-0 " v-for="(i, index) in s.items" :key="index">
            <div class="card mb-4 divhover2">
              <img :src="i.cover_image" alt="image" />
              <div class="card-img-overlay m-0 p-0">
                <div class="category">
                  {{ i.category_name }}
                </div>
                <div class="tooltip-gallery-cont-blog">

                  <div class="dropdown-center">
                    <button class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      <BootstrapIcon name="three-dots-vertical" class="icon2" />
                    </button>
                    <ul class="dropdown-menu">
                      <li v-if="userData.user.permission.blogs.delete">
                        <a class="dropdown-item" @click="deleteBlog(i._id)">
                          <BootstrapIcon name="trash" class="icon5" />Delete
                        </a>
                      </li>
                      <li v-if="userData.user.permission.blogs.edit">
                        <a class="dropdown-item" @click="editBlog(i._id)">
                          <BootstrapIcon name="pencil-square" class="icon5" />Edit
                        </a>
                      </li>
                      <li v-if="userData.user.permission.blogs.edit">
                        <a class="dropdown-item" @click="draftBlog(i._id)">
                          <BootstrapIcon name="star" class="icon5" />Publish Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card-body">
                <div id="blogs-row" class="row">
                  <div class="col-sm-12 name">
                    <h6 class="blog-head-stl">{{ i.title }}</h6>

                    <span class="text-secondary">{{ getPreviewText(i.html_content, 10) }}

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>

</template>

<script>
import EmptyContent from '~/components/ExtraComponents/EmptyContent.vue';
definePageMeta({
  layout: 'subadmin',
  middleware: ['subadmin'],
});

export default {
  name: 'BusinessBlogs',
  components: { EmptyContent },
  data() {
    return {
      userData: useState('userData'),
      loading: false,
      allblogs: null,
      current_id: null,
    };
  },
  async mounted() {
    activateMenu('blogs', "Blogs");
    this.init();
  },
  methods: {
    extractText(html) {
      if (!html) return ''; // Handle empty or undefined HTML content
      const text = html.replace(/<\/?[^>]+(>|$)/g, ""); // Remove all HTML tags
      return text;
    },
    getPreviewText(html, wordLimit = 10) {
      const plainText = this.extractText(html); // Extract plain text
      const words = plainText.split(/\s+/); // Split into words by spaces
      return words.slice(0, wordLimit).join(' '); // Return the first `wordLimit` words
    },
    generateMenuItems(imageId) {
      return [
        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => this.deleteBlog(imageId),
        },
        {
          label: "Edit",
          icon: "pi pi-pen-to-square",
          command: () => this.editBlog(imageId),
        },
        {
          label: "Set Draft",
          icon: "pi pi-file-o",
          command: () => this.draftBlog(imageId),
        },

      ];
    },
    async init() {
      this.loading = true;
      await adminGet(`/company-blogs/publish`).then((response) => {
        this.allblogs = response.data.data;
      });
      this.loading = false;
    },
    setId(i) {
      this.current_id = i;
    },
    async featuredBlog(i) {
      this.loading = true;
      await adminDelete(`/company-featured-blogs/${i}`);
      this.init();
    },
    async deleteBlog(i) {
      this.loading = true;
      if (await deleteConfirm("Do You Want to delete this Blog")) {
        await adminDelete(`/company-blogs/${i}`)
        this.init();
        successAlert("Blog Deleted")
      }
    },
    async draftBlog(i) {
      if (await askConfirm('Do You Want to UnPublish This Blog', 'Confirm UnPublish', 'Set Draft', 'No')) {
        this.loading = true;
        await adminPut(`/company-blogs/deactivate/${i}`)
        this.init();
        successAlert("Blog UnPublished")
      }
    },
    async editBlog(i) {
      this.$router.push({
        path: `/subadmin/blogs/update/${i}`,
        state: { fromForm: true },
      });
    }
  },
};
</script>

<style scoped>
@import url('../style.css');

.p-splitbutton-defaultbutton {
  display: hidden;
}
</style>
