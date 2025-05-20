<template>
  <div class="app align-content-stretch d-flex flex-wrap">
    <div class="app-sidebar">
      <NuxtLink to="/">
        <div class="logo">
          <img src="/public/logo.jpg" width="230" />
        </div>
      </NuxtLink>

      <div class="app-menu relative">
        <ul class="accordion-menu" id="sidebar">
          <li class="men" id="dashboard">
            <NuxtLink to="/subadmin/dashboard">
              <i class="bi bi-columns-gap"></i> Dashboard
            </NuxtLink>
          </li>
          <li class="men cursor-pointer" id="business"
            v-if="me.user.permission.gallery.image.view || me.user.permission.achievers.view">
            <NuxtLink class="page-list flex gap-[20px]">
              <i class="bi bi-buildings"></i>My Business
              <BootstrapIcon name="chevron-down" class="material-icons has-sub-menu w-[20px]" />
            </NuxtLink>
            <ul class="sub-menu ps-4">
              <li v-if="me.user.permission.gallery.image.view">
                <NuxtLink to="/subadmin/gallery/image" id="b2" class="sub-men">
                  <span class="text-[#A3AED0]">Gallery</span>
                </NuxtLink>
              </li>
              <li v-if="me.user.permission.achievers.view">
                <NuxtLink to="/subadmin/achievers" id="b4" class="sub-men">
                  <span class="text-[#A3AED0]">Testimonials</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="men cursor-pointer" id="lead" v-if="me.user.permission.leads.view">
            <NuxtLink class="page-list flex gap-[20px]">
              <i class="bi bi-people"></i>Leads
              <BootstrapIcon name="chevron-down" class="material-icons has-sub-menu" />
            </NuxtLink>
            <ul class="sub-menu ps-4">
              <li v-if="me.user.permission.leads.view">
                <NuxtLink to="/subadmin/leads/view" id="l1" class="sub-men">
                  <span class="text-[#A3AED0]">My Leads</span>
                </NuxtLink>
              </li>
              <li v-if="me.user.permission.leads.appointment.view">
                <NuxtLink to="/subadmin/appointments" id="l2" class="sub-men"><span class="text-[#A3AED0]">Appointments
                  </span></NuxtLink>
              </li>
            </ul>
          </li>
          <li class="men" id="visitorRegister" v-if="me.user.permission.forms.view">
            <NuxtLink to="/subadmin/forms">
              <i class="bi bi-person-badge"></i>Visitor Register
            </NuxtLink>
          </li>
          <!-- 
          <li class="men" id="services">
            <NuxtLink to="/subadmin/Categories">
              <i class="bi bi-tools"></i>Services
            </NuxtLink>
          </li> -->
          <li v-if="me.user.permission.blogs.view" class="men" id="blogs">
            <NuxtLink to="/subadmin/blogs/published">
              <i class="bi bi-journal-richtext"></i>Blogs
            </NuxtLink>
          </li>
          <li class="men" id="events" v-if="me.user.permission.events.view">
            <NuxtLink to="/subadmin/events">
              <i class="bi bi-calendar2-day"></i>Events
            </NuxtLink>
          </li>

          <li class="men cursor-pointer" id="customer" v-if="me.user.plan.crm">
            <NuxtLink class="page-list flex gap-[20px]">
              <i class="bi bi-people"></i>Customers
              <BootstrapIcon name="chevron-down" class="material-icons has-sub-menu" />
            </NuxtLink>
            <ul class="sub-menu ps-4">
              <li>
                <NuxtLink to="/subadmin/customers/view" id="c1" class="sub-men"><span class="text-[#A3AED0]">Client
                    Dashboard</span></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/subadmin/customers/view" id="c1" class="sub-men"><span class="text-[#A3AED0]">Customer
                    List
                  </span></NuxtLink>
              </li>
              <li>
                <NuxtLink to="/subadmin/invoice" id="admin-invoices" class="sub-men"><span
                    class="text-[#A3AED0]">Invoices</span></NuxtLink>
              </li>
            </ul>
          </li>

          <li class="men" id="Todos" v-if="me.user.permission.todos.view">
            <NuxtLink to="/subadmin/Todos"><i class="bi bi-list-task"></i>Todos</NuxtLink>
          </li>

          <li class="men" id="Agrement" v-if="me.user.permission.forms.view">
            <NuxtLink to="/subadmin/Agreement">
              <BootstrapIcon name="gear" />Agreement Form
            </NuxtLink>
          </li>

          <li class="men" id="Pipeline" v-if="me.user.permission.pipeline.view">
            <NuxtLink to="/subadmin/Pipeline">
              <BootstrapIcon name="gear" />Pipeline
            </NuxtLink>
          </li>

          <!-- <hr>

          <li class="men" id="Services">
            <NuxtLink to="/commingSoon">
              <i class="bi bi-telephone-plus"></i>My Contacts
            </NuxtLink>
          </li>
          <li class="men" id="Services">
            <NuxtLink to="/commingSoon">
              <i class="bi bi-hand-thumbs-up"></i>Recommendation
            </NuxtLink>
          </li>
          <li class="men" id="Services">
            <NuxtLink to="/commingSoon">
              <i class="bi bi-calendar2-date"></i>Appointments
            </NuxtLink>
          </li>
          <li class="men" id="Services">
            <NuxtLink to="/commingSoon">
              <i class="bi bi-journals"></i>Documentation
            </NuxtLink>~
          </li> -->

        </ul>
        <!-- <div
          class="flex justify-between items-center gap-2 px-[35px] py-[20px] bg-[#09244B08] shadow-lg absolute w-[-webkit-fill-available] bottom-[-12px]">
          <div class="flex flex-col gap-2">
            <span class="text-[#1F1F1F] font-[500] text-[18px]">
              {{ me?.user.user.name }}
            </span>
            <span class="text-[#FF5757] font-normal text-[18px]">{{ me?.user.role }}</span>
          </div>
          <img @click="logout()" src="/img/svg/logouts.svg" alt="" />
     
        </div> -->
      </div>
    </div>

    <div class="app-container mainbody">
      <div class="app-header">
        <nav class="navbar navbar-light navbar-expand-lg">
          <div class="container-fluid">
            <div class="navbar-nav" id="navbarNav">
              <ul class="navbar-nav w-100">
                <li class="nav-item d-flex align-items-center justify-content-between gap-2">
                  <!-- Back Button -->

                  <div class="title-container">
                    <a class="nav-link hide-sidebar-toggle-button" href="#">
                      <span class="d-flex">
                        <i class="material-icons h1" id="smallmenu"></i>
                        <button id="backbtn1" class="back-button" onclick="window.history.back()"><img
                            src="/public/img/svg/backBtn.svg"></button>
                        <span class="h6" id="title1"></span>
                      </span>
                    </a>
                    <a class="nav-link hide-sidebar-toggle-button2" href="#">
                      <span class="d-flex">
                        <i class="material-icons h2" id="smallmenu"></i>
                        <button id="backbtn2" class="back-button" onclick="window.history.back()"><img
                            src="/public/img/svg/backBtn.svg"></button>
                        <span class="h6" id="title2"></span>
                      </span>
                    </a>
                  </div>

                </li>
              </ul>
            </div>
            <div class="d-flex right-div">
              <div class="nav-item">
                <a class="nav-link notification-dropdown-toggle mt-2 me-3" href="#" data-bs-toggle="dropdown">
                  <img src="https://c.animaapp.com/blutJVDd/img/vector-4.svg" height="10" />
                </a>
                <div class="dropdown-menu dropdown-menu-end notifications-dropdown"
                  aria-labelledby="notificationsDropDown">
                  <h6 class="dropdown-header">Notifications</h6>
                  <div class="notifications-dropdown-list">
                    <a v-for="i in messages">
                      <div class="notifications-dropdown-item">
                        <div class="notifications-dropdown-item-image">
                          <span v-if="i.type == 'warning'" class="notifications-badge bg-warning text-white">
                            <i class="material-icons text-white">warning</i>
                          </span>
                          <span v-if="i.type == 'success'" class="notifications-badge bg-success text-white">
                            <i class="material-icons text-white">check</i>
                          </span>
                          <span v-if="i.type == 'error'" class="notifications-badge bg-error text-white">
                            <i class="material-icons text-white">error</i>
                          </span>
                          <span v-if="i.type == 'info'" class="notifications-badge bg-info text-white">
                            <i class="material-icons text-white">info</i>
                          </span>
                        </div>
                        <div class="notifications-dropdown-item-text">
                          <p class="bold-notifications-text">{{ i.title }}</p>
                          <small class="bold-notifications-text">{{
                            i.message
                            }}</small>
                          <br />
                          <b>{{ DateFormat(time).time12 }}</b>
                        </div>
                      </div>
                    </a>
                    <div v-if="messages.length == 0" class="notifications-dropdown-item">
                      <p>No notification found</p>
                    </div>

                    <center v-if="messages.length>0">
                      <button class="btn btn-light" @click="clearMessages">
                        Clear Messages
                      </button>
                    </center>
                  </div>
                </div>
              </div>
              <div class="nav-item">
                <AdminGuide />
                <ul class="dropdown-menu dropdown-menu-end language-dropdown me-5" aria-labelledby="languageDropDown">
                  <li>
                    <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Guide</a>
                  </li>
                </ul>
              </div>
              <div class="nav-item">
                <div class="nav-item flex items-center">
                  <a class="nav-link language-dropdown-toggle" href="#" id="languageDropDown" data-bs-toggle="dropdown">
                    <img :src="me?.user.user.profile_image" alt="Help" style="width: 40px"
                      class="w-[30px] rounded-full mr-2" />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end language-dropdown menu-sub-dropdown w-[275px] top-[15px!important]"
                    aria-labelledby="languageDropDown" style="
                      position: absolute;
                      inset: 0px 0px auto auto;
                      margin: 0px;
                    ">
                    <div class="flex gap-3 px-[20px]">
                      <img :src="me?.user.user.profile_image" alt=""
                        class="w-[55px!important] h-[55px!important] rounded-[50%]" />
                      <div class="">
                        <div class="flex gap-2 items-center">
                          <span class="font-[700]">{{ me?.user.user.name.length > 5 ? me.user.user.name.slice(0, 5) +
                            '...' : me.user.user.name }}
                          </span>
                          <span class="text-[#50cd89] bg-[#e8fff3] text-[12px] px-2 h-[max-content] rounded-lg">{{
                            me?.user.role }}</span>
                        </div>
                        <span class="text-[#a1a5b7] text-[13px]">
                          {{ me?.user.user.email.length > 25 ? me.user.user.email.slice(0, 24) + '...' :
                            me.user.user.email }}
                        </span>

                      </div>
                    </div>
                    <div class="border-[1px] bg-[#f4f4f4] relative my-2"></div>
                    <div class="px-3 flex flex-col">
                      <NuxtLink :to="'/subadmin/dashboard'" class="link py-2 px-2 text-[#7e8299]">Dashboard</NuxtLink>
                      <NuxtLink :to="'/subadmin/wishlists'" class="link py-2 px-2 text-[#7e8299]">Wishlists</NuxtLink>
                      <!-- <TieredMenu :model="items" /> -->
                      <NuxtLink @click="logout()" class="link py-2 px-2 text-[#7e8299]" style="cursor: pointer;">Logout
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="app-content">
        <div class="content-wrapper">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import {
  ref,
  push,
  set,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  remove,
} from 'firebase/database';

export default {
  data() {
    return {
      messages: [],
    };
  },

  async setup() {
    const me = (await useFetch('/api/users/admin')).data.value;
    return { me };
  },

  async mounted() {
    const nuxtApp = useNuxtApp();
    nuxtApp.$subadminOnline(this.me);
    $(document).ready(function () {
      'use strict';
      $('.toggle-search').on('click', function (e) {
        $('.app').toggleClass('search-visible'), e.preventDefault();
      });
      $('.content-menu-toggle').on('click', function () {
        $('body').toggleClass('content-menu-shown');
      });
      !(function () {
        if ($('.horizontal-menu').length) {
          $('.hide-sidebar-toggle-button').on('click', function (e) {
            e.preventDefault(), a();
          });
          var e = $('.app-menu li:not(.open) ul'),
            n = $('.app-menu li.active-page > a');
          if ($(window).width() > 1199) null != i && (i.destroy(), (i = null));
          else {
            var t = document.querySelector('.app-menu');
            (i = null), e.hide();
          }
          $(window).resize(function () {
            if ($(window).width() > 1199 && null != i) i.destroy(), (i = null);
            else {
              var n = document.querySelector('.app-menu');
              (i = null), e.hide();
            }
          }),
            $('.app-menu li a').on('click', function (e) {
              var n = $(this).next('ul'),
                t = $(this).parent('li'),
                a = $('.app-menu .menu-list > li.open');
              if (n.length)
                return $(window).width() > 1199
                  ? void e.preventDefault()
                  : (t.hasClass('open')
                    ? (n.slideUp(200), t.removeClass('open'))
                    : (a.length &&
                      (t
                        .parent()
                        .children('.open')
                        .children('ul')
                        .slideUp(200),
                        t.parent().children('.open').removeClass('open')),
                      n.slideDown(200),
                      t.addClass('open')),
                    !1);
            });
        }
        if ($('.app-sidebar').length) {
          var i;
          (e = $('.accordion-menu li:not(.open) ul')),
            (n = $('.accordion-menu li.active-page > a')),
            e.hide(),
            $('.app.menu-hover').length && $(window).width() > 1199
              ? (i.destroy(), (i = null))
              : ((t = document.querySelector('.app-menu')), (i = null)),
            $(window).resize(function () {
              if (
                $('.app.menu-hover').length &&
                $(window).width() > 1199 &&
                !i.length
              ) {
                var e = document.querySelector('.app-menu');
                i = null;
              }
            }),
            $('.accordion-menu li a').on('click', function (e) {
              var n = $(this).next('ul'),
                t = $(this).parent('li'),
                a = $('.accordion-menu > li.open');
              if (n.length)
                return $('.app').hasClass('menu-hover') &&
                  $(window).width() > 1199
                  ? void e.preventDefault()
                  : (t.hasClass('open')
                    ? (n.slideUp(200), t.removeClass('open'))
                    : (a.length &&
                      (t
                        .parent()
                        .children('.open')
                        .children('ul')
                        .slideUp(200),
                        t.parent().children('.open').removeClass('open')),
                      n.slideDown(200),
                      t.addClass('open')),
                    !1);
            }),
            $('.active-page > ul').length &&
            ($('.app').hasClass('menu-hover')
              ? $(window).width() < 1199 && n.click()
              : n.click()),
            $('.app').hasClass('menu-off-canvas') ||
            ($(window).width() < 1199 && !$('.app').hasClass('sidebar-hidden')
              ? ($('.hide-app-sidebar-mobile').length ||
                $('.app').append(
                  '<div class="hide-app-sidebar-mobile"></div>',
                ),
                $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list'))
              : $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list-nested'),
              $(window).resize(function () {
                $(window).width() < 1199 &&
                  !$('.app').hasClass('sidebar-hidden')
                  ? ($('.hide-app-sidebar-mobile').length ||
                    $('.app').append(
                      '<div class="hide-app-sidebar-mobile"></div>',
                    ),
                    $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list'))
                  : $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list-nested');
              })),
            $('.hide-sidebar-toggle-button').on('click', function (e) {
              e.preventDefault(), a();
            }),
            $('.hide-app-sidebar-mobile').on('click', function (e) {
              e.preventDefault(), a();
            }),
            $('.menu-off-canvas .hide-sidebar-toggle-button').on(
              'click',
              function () {
                return (
                  $('.app').toggleClass('menu-off-canvas-show'),
                  $('.app').hasClass('menu-off-canvas-show')
                    ? $('.app-sidebar .logo').addClass(
                      'canvas-sidebar-hidden-logo',
                    )
                    : setTimeout(function () {
                      $('.app-sidebar .logo').removeClass(
                        'canvas-sidebar-hidden-logo',
                      );
                    }, 200),
                  !1
                );
              },
            );
        }

        function a() {
          return (
            !$('.app').hasClass('menu-off-canvas') &&
            ($('.app').toggleClass('sidebar-hidden'),
              $('.app').hasClass('sidebar-hidden')
                ? (setTimeout(function () {
                  // $(".app-sidebar .logo").addClass("hidden-sidebar-logo")
                }, 200),
                  $(window).width() > 1199
                    ? $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list')
                    : $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list-nested'))
                : ($('.app-sidebar .logo').removeClass('hidden-sidebar-logo'),
                  $(window).width() > 1199
                    ? $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list-nested')
                    : $('.hide-sidebar-toggle-button i').attr('class', 'bi bi-list')),
              !1)
          );
        }
      })(),
        window.addEventListener(
          'load',
          function () {
            var e = document.getElementsByClassName('needs-validation');
            Array.prototype.filter.call(e, function (e) {
              e.addEventListener(
                'submit',
                function (n) {
                  !1 === e.checkValidity() &&
                    (n.preventDefault(), n.stopPropagation()),
                    e.classList.add('was-validated');
                },
                !1,
              );
            });
          },
          !1,
        ),
        (() => {
          if ($('.content-menu').length) {
            const e = document.querySelector('.content-menu');
          }
        })(),
        'undefined' != typeof hljs && hljs.initHighlighting();
    }),
      $(window).on('load', function () {
        setTimeout(function () {
          $('body').addClass('no-loader');
        }, 1e3);
      });
    // this.initNotifications();
  },
  methods: {
    async logout() {
      if (await askConfirm('Do You Want To  Sure Logout', 'Logout', 'Logout', 'Cancel')) {
        localStorage.clear();
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        }
        location.replace('/');
      }
    },
    initNotifications() {
      const database = this.$database;
      const messagesRef = ref(database, `Notifications/${this.me._id}`);

      onChildAdded(messagesRef, (snapshot) => {
        const message = snapshot.val();
        message.id = snapshot.key;
        this.messages.push(message);
      });

      onChildChanged(messagesRef, (snapshot) => {
        const updatedMessage = snapshot.val();
        updatedMessage.id = snapshot.key;
        const index = this.messages.findIndex(
          (message) => message.id === updatedMessage.id,
        );
        if (index !== -1) {
          this.messages.splice(index, 1, updatedMessage);
        }
      });
      onChildRemoved(messagesRef, (snapshot) => {
        const removedMessageId = snapshot.key;
        this.messages = this.messages.filter(
          (message) => message.id !== removedMessageId,
        );
      });
    },
    async clearMessages() {
      const database = this.$database;
      const messagesRef = ref(database, `Notifications/${this.me._id}`);
      try {
        await remove(messagesRef);
        this.messages = [];
      } catch (error) { }
    },
  },
};
</script>

<style scoped>
@import url('./style.css');
</style>
