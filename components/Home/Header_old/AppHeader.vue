<template>
  <header class="header-log-out">
    <div class="container-fluid">
      <div class="header-inner">
        <div class="row align-items-center">
          <div class="col-md-9">
            <div class="navbar-left">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <div class="logo-sec">
                    <a class="logo" href="/"><img src="/img/png/logo.png" width="211" /></a>
                  </div>
                </div>
                <div class="col-md-8 px-0">
                  <nav class="navbarNav">
                    <ul class="d-flex list-unstyled align-items-center">
                      <li class="dropdown location">
                        <!-- <img src="/img/pin.svg" class="d-inline-block" />&nbsp;&nbsp; -->
                        <B>
                          <div id="userCity">Ahmedabad</div>
                        </B>
                      </li>
                      <li class="dropdown">
                        <a class="dropbtn">Explore <i class="fa fa-angle-down"></i></a>
                        <div class="dropdown-content">
                          <NuxtLink to="/for-user"><i class="material-icons d-inline-block">account_circle</i>
                            F&C For User</NuxtLink>
                          <NuxtLink to="/for-consultants"><i
                              class="material-icons d-inline-block">manage_accounts</i>F&C For
                            Consultants</NuxtLink>
                          <NuxtLink to="/crm"><i class="material-icons d-inline-block">dashboard</i>CRM
                            by F&C</NuxtLink>
                          <NuxtLink to="/whitelabel-app"><i class="material-icons d-inline-block">terminal</i>App &
                            Website by
                            F&C</NuxtLink>
                        </div>
                      </li>
                      <li class="dropdown">
                        <a class="dropbtn">Top Cities <i class="fa fa-angle-down"></i></a>
                        <div class="dropdown-content">
                          <a>Ahmedabad</a>
                        </div>
                      </li>
                      <li class="dropdown">
                        <a class="dropbtn">Help <i class="fa fa-angle-down"></i></a>
                        <div class="dropdown-content">
                          <NuxtLink to="/contact-us"><i
                              class="material-icons d-inline-block">phone_in_talk</i>Contact
                            Us</NuxtLink>
                          <NuxtLink to="/business"><img src="/img/svg/horn.svg" alt="">Grow
                            Your Business</NuxtLink>
                          <NuxtLink to="/terms"><i class="material-icons d-inline-block">verified_user</i>
                            Terms
                            of Use</NuxtLink>
                        </div>
                      </li>
                      <li class="nav-item">
                        <NuxtLink class="nav-link" to="/Blogs">Blog</NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 ps-0">
            <div v-if="!data?.isLogged" class="loginNav navbarNav float-end nav-log-out">
              <ul class="d-flex align-items-center list-unstyled">
                <li>
                  <NuxtLink to="/auth/login" style="margin: 0">
                    <button class="sign-in-btn site-btn-1">
                      <span><i class="fa fa-user me-2"></i></span>
                      Sign in
                    </button>
                  </NuxtLink>
                </li>

                <li class="nav-item">
                  <NuxtLink to="/auth/register">
                    <button class="site-btn-2">
                      <span><i class="fa fa-plus me-2"></i></span>Sign Up
                    </button>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <div v-if="data?.isLogged" class="loginNav navbarNav float-end nav-log-out d-block">
              <ul class="d-flex align-items-center list-unstyled">
                <li class="dropdown">
                  <span class="user-profile-img">
                    <img :src="data.user.profile_image" alt="user" class="me-2" />
                    <a href="#" class="dropbtn">{{ data.user.name }}
                      <i class="fa fa-angle-down ms-1"></i>
                    </a>
                  </span>
                  <div class="dropdown-content ms-5">
                    <hr />
                    <NuxtLink :to="'/' + data.user.role.toLocaleLowerCase() + '/dashboard'">Dashboard</NuxtLink>
                    <a @click="logout()" class="logout-btn">Logout</a>
                    <hr />
                    <p><a href="#">Need a help?</a></p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div class="mobile-toggle-btn-outer d-flex justify-content-between align-items-center py-3">

        <div v-if="!data?.isLogged" class="loginNav navbarNav float-end nav-log-out">
          <ul class="d-flex align-items-center list-unstyled">
            <li>
              <NuxtLink to="/auth/login" style="margin: 0">
                <button class="sign-in-btn site-btn-1">
                  <span><i class="fa fa-user me-2"></i></span>
                  Sign in
                </button>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="data?.isLogged" class="loginNav navbarNav float-end nav-log-out d-block">
          <ul class="d-flex align-items-center list-unstyled">
            <li class="dropdown">
              <span class="user-profile-img">
                <img :src="data.user.profile_image" alt="user" class="me-2" />
                <a href="#" class="dropbtn">{{ data.user.name }}
                  <i class="fa fa-angle-down ms-1"></i>
                </a>
              </span>
              <div class="dropdown-content ms-5">
                <hr />
                <NuxtLink :to="'/' + data.user.role.toLocaleLowerCase() + '/dashboard'">Dashboard</NuxtLink>
                <a @click="logout()" class="logout-btn" style="cursor: pointer;">Logout</a>
                <hr />
                <p><a href="#">Need a help?</a></p>
              </div>
            </li>
          </ul>
        </div>



        <div class="logo-sec">
          <a class="logo" href="#"></a>
        </div>
        <button class="mobile-toggle-btn" @click="handleButtonClick">
          <i class="fa fa-bars" style="font-size: 30px; color: #ff5757;"></i>
        </button>
        <div class="mobile-nav-element" id="mySidenav">
          <nav class="mobile-nav">
            <ul class="d-flex list-unstyled flex-column">
              <li class="dropdown">
                <button class="dropbtn">
                  Punjab
                  <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Punjab</a>
                  <a href="#">Punjab</a>
                  <a href="#">Punjab</a>
                </div>
              </li>
              <li class="dropdown">
                <button class="dropbtn">
                  Explore <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Explore</a>
                  <a href="#">Explore</a>
                  <a href="#">Explore</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Top cities</a>
              </li>
              <li class="dropdown">
                <button class="dropbtn">
                  Help <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Help</a>
                  <a href="#">Help</a>
                  <a href="#">Help</a>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/Blogs">Blog</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url('./header.css');
</style>

<script>
// import { dataStore } from "@/stores/auth";

export default {
  data() {
    return {
      token: null,
      user: null,
      data: useNuxtApp()
    }
  },
  mounted() {
  },
  methods: {
    logout() {
      // dataStore().logout()
      location.reload()
    }
  }
}
</script>