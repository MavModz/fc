<template>
  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="row">
          <div class="col-lg-7">
            <div class="footer-left">
              <div class="row">
                <div class="col-sm-5 px-0">
                  <div class="footer-left-inside">
                    <div class="footer-logo">
                      <NuxtLink to="/"><img src="/img/svg/footer-logo.svg" alt="footer-logo" /></NuxtLink>
                    </div>
                    <ul class="list-unstyled">
                      <li>
                        <span><i class="fa fa-envelope"></i></span><span
                          href="mailto:findandconsult@gmail.com">findandconsult@gmail.com</span>
                      </li>
                      <li>
                        <span><i class="fa fa-mobile-phone"></i></span>
                        <span href="tel:+917009008834">+91 7009008834</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-7 px-0">
                  <div class="footer-menu footer-left-menu">
                    <div class="footer-left-menu-inner">
                      <h4>Find & Consult</h4>
                      <ul class="list-unstyled">
                        <li>
                          <span to="/about-us">About F&C</span>
                        </li>
                        <li>
                          <span to="/works">How It Works</span>
                        </li>
                        <li>
                          <NuxtLink to="/for-user">F&C For Users</NuxtLink>
                        </li>
                        <li>
                          <span to="/for-consultants">F&C For Consultants</span>
                        </li>
                      </ul>
                    </div>
                    <div class="footer-left-menu-inner">
                      <h4>Profile</h4>
                      <ul class="list-unstyled">
                        <li>
                          <NuxtLink to="/crm">CRM</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/Benefit-of-immigration-listing">Benefits of Listing</NuxtLink>
                        </li>
                        <li>
                          <span to="/immigration-business-growth">Grow your Business</span>
                        </li>
                        <li>
                          <NuxtLink to="/whitelabel-app">App & Website</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/blogs">Blogs</NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="footer-right">
              <h3>Subscribe to our newsletter</h3>
              <p>Don’t miss any relevant vacancies!</p>
              <div class="hero-search-field footer-newsletter position-relative footer-btn">
                <span class="footer-mailicnd"><i class="bi bi-envelope"></i></span>
                <input type="email" class="" name="email" placeholder="Your Email" />
                <button class="site-btn-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-inner d-flex justify-content-between align-items-center">
          <p class="mb-0">
            Copyright ©Find & Consult.com | All rights reserved
          </p>
          <div class="footer-bottom-nav">
            <div class="footer-bottom-menus d-flex align-items-center">
              <div class="footer-menu">
                <ul class="list-unstyled d-flex">
                  <li>
                    <span to="/contact-us">Contact Us</span>
                  </li>
                  <li>
                    <NuxtLink to="/PrivacyPolicy">Privacy Policy</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/Terms-&-Condition">Term of Use</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="footer-social-menu">
                <ul class="list-unstyled d-flex">

                  <li>
                    <a href="https://facebook.com"><i class="bi bi-facebook"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com"><i class="bi bi-twitter"></i></a>
                  </li>
                  <li>
                    <span href="https://telegram.com"><i class="bi bi-send"></i></span>
                  </li>
                  <li>
                    <a href="https://messenger.com"><i class="bi bi-messenger"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="./fotter.css"></style>