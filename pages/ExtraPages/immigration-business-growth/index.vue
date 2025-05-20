<script setup>
import { useHead } from '#imports';

const contactMeta = {
  title: "Expand & Grow Your Immigration Consultancy | Find and Consult",
  meta: [
   //  { name: "keywords", content: "Find & Consult helps you manage leads, expand your reach, and grow your immigration consultancy effortlessly" },
    { name: "description", content: "Find & Consult helps you manage leads, expand your reach, and grow your immigration consultancy effortlessly" },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: "Expand & Grow Your Immigration Consultancy | Find and Consult" },
    { property: "og:description", content: "Find & Consult helps you manage leads, expand your reach, and grow your immigration consultancy effortlessly" },
    { property: "og:image", content: "https://findandconsult.com/img/png/logo.png" },
    { property: "og:url", content: "https://findandconsult.com/immigration-business-growth" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Find and Consult" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Expand & Grow Your Immigration Consultancy | Find and Consult" },
    { name: "twitter:description", content: "Find & Consult helps you manage leads, expand your reach, and grow your immigration consultancy effortlessly" },
    { name: "twitter:image", content: "https://findandconsult.com/img/png/logo.png" },
    { name: "twitter:site", content: "@find&consult" },
    { name: "twitter:creator", content: "@find&consult" }
  ],
  link: [
    { rel: "canonical", href: "https://findandconsult.com/immigration-business-growth" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Find and Consult",
        "url": "https://findandconsult.com/",
        "logo":"https://findandconsult.com/img/png/logo.png",
        "sameAs": [
          "https://www.facebook.com/findandconsult/",
          "https://www.x.com/findandconsult",
          "https://www.instagram.com/findandconsult/",
          "https://www.youtube.com/@findandconsult",
          "https://www.linkedin.com/in/find-and-consult-19a379250/"
        ]
      }
    }
  ]
};

useHead({
  title: contactMeta.title,
  meta: contactMeta.meta,
  link: contactMeta.link,
  script: contactMeta.script.map(script => ({
    type: script.type,
    innerHTML: JSON.stringify(script.children)
  }))
});
</script>

<template>
   <main>
      <div class="grow-business-contn">
         <div class="grow-business-1st-back-color ">
            <div class="grow-your-1stpage-maxwidth">
               <div class="grow-business-1st-page-col6">
                  <div class="grow-business-1st-page-about-content">
                     <h1 class="grow-business-1st-page-head">Grow Your Presence,<br>Grow Your Immigration Business
                     </h1>
                     <p class="grow-business-1st-page-parag">Wondering how to grow your immigration consultancy? Get yourself listed to attract more clients and streamline operations with our integrated ERP system (LMS + CRM). Showcase your visa services through a dynamic website and a white-labeled app. Engage effectively with your customers!
                     </p>
                     <button  @click="$router.push('/for-consultants')" class="grow-business-1st-page-btn">Know more</button>
                  </div>
               </div>
               <div class="grow-business-1st-page-col6">
                  <div class="grow-business-1st-page-right-imgg">
                     <NuxtImg src="/img/png/GrowYourBusiness/Hero Image@2x.png" alt="thumb" loading='lazy' />
                  </div>
               </div>
            </div>
         </div>
         <div class="growbusiness-2ndpage-wid">
            <div class="growbusiness-2ndpage-col12 ">
               <div class="growbusiness-2ndpage-margin">
                  <div class="growbusiness-2ndpage-align">
                     <div class="growbusiness-2ndpage-col-lg2nd">
                        <div class="growbusiness-2nd-page-leftdiv">

                           <h2 id="growbusiness-2ndpage-cmpnyleadsss">Get Discovered with<br>
                              Find & Consult </h2>
                        </div>
                     </div>
                     <div class="growbusiness-2ndpage-col-lg2nd">
                        <div class="growbusiness-2nd-page-rightdiv">
                           <div class="growbusiness-2nd-page-info">
                              <div class="growbusiness-2nd-page-leadassis">
                                 <p id="growbusiness-2nd-page-assisting">List your immigration services on Find & Consult, a trusted platform designed to connect your consultancies with families and individuals seeking expert assistance.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <br>
            <div class="growbusiness-2ndpage-wid-pict">
               <div class="growbusiness-2ndpage-allphotos">
                  <article class="growbusiness-2ndpage-post-henry">
                     <div class="growbusiness-2ndpage-entry-thumb">
                        <figure class="growbusiness-2ndpage-thumb-wrap">
                           <NuxtImg src="/img/png/GrowYourBusiness/L.png" width="350px"alt="post" loading='lazy' />
                        </figure>
                     </div>
                  </article>
               </div>
               <div class="growbusiness-2ndpage-allphotos">
                  <article class="growbusiness-2ndpage-post-henry">
                     <div class="growbusiness-2ndpage-entry-thumb">
                        <figure class="growbusiness-2ndpage-thumb-wrap">
                           <NuxtImg src="/img/png/GrowYourBusiness/Frame 1707483322.png"  alt="post" loading='lazy' />
                           <div class="bottom-half-clickable" @click="$router.push('/auth/register')"></div>
                        </figure>
                     </div>
                  </article>
               </div>
               <div class="growbusiness-2ndpage-allphotos">
                  <article class="growbusiness-2ndpage-post-henry">
                     <div class="growbusiness-2ndpage-entry-thumb">
                        <figure class="growbusiness-2ndpage-thumb-wrap">
                           <NuxtImg src="/img/png/GrowYourBusiness/Frame 20.png"  width="350px" alt="post" loading='lazy' />
                        </figure>
                     </div>
                  </article>
               </div>
            </div>
         </div>

      </div>
      <section class="growyour-business-3rdpage-container">
         <div class="growyour-business-3rdpage-backclr">
            <div class="growyour-business-3rdpage-col12">
               <div class="growyour-business-3rdpage-pad">
                  <div class="growyour-business-3rdpagealign-items">
                     <div class="growyour-business-3rdpage-left">
                        <div class="growyour-business-3rdpage-work-info">
                           <div class="growyour-business-3rdpage-ourexpertse">
                              <div class="growyour-business-3rdpage-headpad">
                                 <p class="growyour-business-3rdpage-ourexpert">Our expertise</p>
                              </div>
                              <div class="growyour-business-3rdpage-infolocal">
                                 <h2 class="growyour-business-3rdpagelheadingh3">We Want You to Reach New Heights and Empower People to Achieve their Dreams Abroad.
                                 </h2>
                                 <p id="growyour-business-3rdpage-paragra-rich">Grow your Immigration business with Find & Consult’s exclusive features that help you cater to diverse visa needs across the country.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="growyour-business-3rdpage-rightdiv">
                        <div>
                           <NuxtImg src="/img/png/Shape grww.png" loading='lazy' />
                        </div>
                        <div class="growyour-business-3rdpage-how-work">
                           <div class="growyour-business-3rdpage-busnes">
                              <div class="growyour-business-3rdpage-listing-grow">
                                 <div class="grow-aeroplaneimg">
                                    <NuxtImg src="/img/png/Group 111.png" width='40' height='40' loading='lazy' />
                                 </div>
                                 <div class="growyour-business-3rdpage-throuhg">
                                    <h3>Streamlining with ERP</h3>
                                    <p>Easily manage leads, track customer engagement, and optimize workflows.
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div class="growyour-business-3rdpage-busnes">
                              <div class="growyour-business-3rdpage-listing-grow">
                                 <div class="grow-aeroplaneimg">
                                    <NuxtImg src="/img/png/Group 222.png" width='40' height='40' loading='lazy' />
                                 </div>
                                 <div class="growyour-business-3rdpage-throuhg">
                                    <h3>Your Brand, Your Platform</h3>
                                    <p>Get a custom app and website on Find & Consult to build trust and establish a strong online presence.
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div class="growyour-business-3rdpage-busnes0">
                              <div class="growyour-business-3rdpage-listing-grow">
                                 <div class="grow-aeroplaneimg">
                                    <NuxtImg src="/img/png/grow flower.png" width='40' height='40' loading='lazy' />
                                 </div>
                                 <div class="growyour-business-3rdpage-throuhg">
                                    <h3>Grow and connect easily</h3>
                                    <p>Host webinars, workshops, or events to reach and engage customers.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="growyour-business-4thpage-containerr1 ">
            <div class="growyour-business-4thpage-row">
               <div class="growyour-business-5thpage-container">
                  <div class="growyour-business-5thpage-container-wrapper ">
                     <div class="growyour-business-5thpage-left">
                        <div class="growyour-business-5thpage-info-last1">
                           <div class="growyour-business-5thpage-fandc-lst"></div>
                           <NuxtImg src="/img/png/GrowYourBusiness/pen.jpeg" loading='lazy' />
                           <div class="growyour-business-5thpage-buildstaller">
                              <div class="growyour-business-5thpage-heading-websites">
                                 <h2>Grow & List Your Immigration Business with Us!</h2>
                              </div>
                              <div class="growyour-business-5thpage-pargr-websites">
                                 <p>From a customised CRM, and a Lead management system, to enhanced customer relationships, Find & Consult is your exclusive marketplace to fulfil varied visa needs across the country.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="growyour-business-5thpage-rightdiv">
                        <div class="growyour-business-5thpage-cntct">
                           <div class="growyour-business-5thpage-margato">
                              <div class="growyour-business-5thpage-sendenquiry mb-1">
                                 <span>Send Enquiry</span>
                              </div>
                              <div class="growyour-business-5thpage-last-loremipsun">
                                 <p>Fill up the inquiry form and we will get back to you within 24 hours.
                                 </p>
                              </div>

                              <FormKit type="form" @submit="submitForm">
                                 <div class="growyour-business-5thpage-lastnameml">
                                    <input v-model="formData.name" type="text"
                                       class="growyour-business-5thpage-namegrow" placeholder="Your Name" required />

                                    <input v-model="formData.email" type="email"
                                       class="growyour-business-5thpage-emailgrow" placeholder="Email" required  style="color: white !important;"/>

                                    <input v-model="formData.phone" type="tel"
                                       class="growyour-business-5thpage-emailgrow" placeholder="Phone" required
                                       pattern="[0-9]{10}" maxlength="10" style="color: white !important;" />

                                    <input v-model="formData.subject" type="text"
                                       class="growyour-business-5thpage-questiongrow" placeholder="Subject" required  style="color: white !important;"/>

                                    <textarea v-model="formData.message" class="growyour-business-5thpage-questiongrow"
                                       placeholder="Message" required style="color: white !important;"></textarea>

                                    <div class="growyour-business-5thpage-btn-lastgrow">
                                       <button id="growyour-business-5thpage-btn-ctn" type="submit" :disabled="loading">
                                          {{ loading ? "Sending..." : "Send an Inquiry" }}
                                       </button>
                                    </div>
                                 </div>
                              </FormKit>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <div class="foruser-page-Faq">
         <FaqComponent :faq="faqItems" />
      </div>
   
   </main>
</template>

<script>
import FaqComponent from '../Terms/index.vue'
export default {
   components: {
      FaqComponent,
   },
   data() {
      return {
         faqItems: [
            {
               id: 1,
               question: "How can I list my immigration services on Find & Consult?",
               answer: "You can list your services by creating your profile on our platform, and providing details about your services. After that, you’ll gain access to potential clients actively searching for immigration services."
            },
            {
               id: 2,
               question: "How does the ERP system help my immigration company?",
               answer: "Our ERP system integrates a Lead Management System and CRM. It helps you manage leads, track customer interactions, and optimize your workflows for better efficiency and customer satisfaction."
            },
            {
               id: 3,
               question: "Can I create an app & website for my immigration company?",
               answer: "Yes, you can. We help you elevate your brand by offering a personalized app and website. This professional online presence builds trust and enhances the client experience."
            },
            {
               id: 4,
               question: "How can I engage better with potential customers?",
               answer: "We provide customized contact forms and seamless lead collection solutions. Also, you can promote events like webinars and workshops to build meaningful connections with your customers."
            },
            {
               id: 5,
               question: "Can I use Find & Consult to promote my events?",
               answer: "Yes. You can list and promote events such as webinars, workshops, and in-person sessions on our platform. "
            }
         ],
         formData: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      loading: false,

      };

   },
   methods: {
    async submitForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
        alert("Please fill all fields before submitting.");
        return;
      }

      this.loading = true;

      try {
        const response = await homePost("/home-footer-contact-lead", this.formData);

        if (response.data.status) {
          successAlert("Message sent successfully!");
          this.formData = { name: "", email: "", phone: "", subject: "", message: "" }; // Reset form
        } else {
          errorAlert(response.data.msg || "Failed to send message.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        errorAlert("An error occurred while sending the message.");
      }

      this.loading = false;
    },
  },
}
</script>

<style scoped>
@import url('./style.css');
.growbusiness-2ndpage-thumb-wrap {
  position: relative;
  display: inline-block;
}

.bottom-half-clickable {
  position: absolute;
  bottom: 0; 
  left: 0;
  width: 30%; 
  height: 18%; 
  background: rgba(0, 0, 0, 0); 
  cursor: pointer;
}

</style>