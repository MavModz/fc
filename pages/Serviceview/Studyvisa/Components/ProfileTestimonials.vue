<template>
  <div v-if="achievers.length > 0" class="carousel-section">
    <h2>Program Title Required here</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur. Mollis feugiat porttitor arcu suscipit a sagittis.
      Habitant a arcu duis ullamcorper
    </p>

    <div class="carousel">
      <div class="card" v-for="(item, ele) in achievers">
        <img :src="item.image" alt="Person 1" />
      </div>
    </div>

    
  </div>

</template>

<script>


export default {
  data() {
    return {
      achievers: [],
      loading: false,
      achievers_length: 0,
    };
  },
  async mounted() {
    await this.init()
  },
  methods: {
    async init() {
      this.loading = true;
      const id = this.$route.query.id; // Get ID from query parameters

      if (id) {
        await homeGet(`/admin-study_visa-acheverlist/${id}`).then((response) => {
          this.achievers = response.data.data;
          this.achievers_length = this.achievers.length

          this.$router.replace({
            query: {
              ...this.$route.query,
              length: this.achievers_length,
            },
          });
        }).catch((error) => {
          console.error("Error fetching achievers:", error);
        });
      }

      this.loading = false;
    }

  }
};
</script>


<style scoped>
.carousel-section {
  padding: 40px 20px 0px;
  text-align: center;
  margin-top: 28px;
}

.carousel-section h2 {
  font-size: 26px;
  margin-bottom: 19px;
  color: #000000;
  font-weight: 600;
  line-height: 100%;
}

.carousel-section p {
  color: #202020;
  max-width: 900px;
  margin: 0 auto 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  opacity: 75%;
}

.carousel {
  margin-top: 24px;
  display: flex;
  gap: 58px;
  justify-content: center;
  overflow-x: auto;
 margin-bottom: 52px;
 padding-bottom: 32px;
}

.card {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 230px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  background: white;
}

.card img {
  width: 100%;
  height: 340px;
  display: block;
  border-radius: 16px;
}



@media (max-width: 425px) {
  .carousel-section {
    padding: 20px 20px 0px;
  }

  .carousel-section p {
    margin: 0 auto 20px;
    line-height: 130%;
  }

  .carousel-section h2 {
    font-size: 23px;
    margin-bottom: 14px;
    line-height: 130%;
  }

  .carousel {
    margin-top: 20px;
    gap: 28px;
    padding-bottom: 0px;
  }

  .card {
    width: 190px;
  }
}

@media (max-width: 767px) {
  .carousel {
    gap: 30px;
  }
}
</style>