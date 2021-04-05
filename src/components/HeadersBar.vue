<template>
 <!-- eslint-disable max-len -->
 <div>
   <header></header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" :class="{elevated: scrollPosition > 0}" id="sideNav">
    <div class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">CV - João Nobre</span>
      <span class="d-none d-lg-block">
        <!-- <a href="/"> -->
          <img id="logo-bg" class="img-fluid mx-auto mb-2"
           src="../assets/images/foto_jn.png" width="140" height="140" alt="Logo" />
      </span>
    </div>
      <div>
    <b-button v-b-toggle.sidebar-backdrop class="d-lg-none" id="menuBtn" aria-label="menu-button-mobile"
    v-if="$route.path !== '/404/' && $route.path !== '/404'"><i class="fa fa-bars"></i></b-button>
    <b-sidebar
      id="sidebar-backdrop"
      :title="Menu"
      backdrop
      shadow=""
      v-if="$route.path !== '/404/' && $route.path !== '/404'"
    >
      <div class="px-0 py-2">
        <ul class="list-unstyled">
        <li class="nav-item">
          <router-link :to="'/'" class="nav-link js-scroll-trigger">Quem Sou Eu?</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/experience'" class="nav-link js-scroll-trigger">O que faço?</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/hobbies'" class="nav-link js-scroll-trigger">Hobbies</router-link>
        </li>
        </ul>
        </div>
    </b-sidebar>
  </div>
    <!-- <div class=" navbar-collapse" id="navbarSupportedContent"> -->
      <b-collapse id="nav-collapse" is-nav>
      <!-- <ul id="mainMenu" class="navbar-nav" v-bind:class="{'menu-active': show,'menu': !show}"> -->
        <b-navbar-nav v-if="$route.path !== '/404/' && $route.path !== '/404'">
        <li class="nav-item">
          <router-link :to="'/'" class="nav-link js-scroll-trigger">Quem Sou Eu?</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/experience'" class="nav-link js-scroll-trigger">O que faço?</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/hobbies'" class="nav-link js-scroll-trigger">Hobbies</router-link>
        </li>
        <li class="nav-item">
        </li>
      <!-- </ul> -->
    <!-- </div> -->
        </b-navbar-nav>
      </b-collapse>
  </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String,
  },
  data() {
    return {
      show: false,
      scrollPosition: null
    };
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
};
</script>

<style scoped>
a.nav-link.js-scroll-trigger.router-link-exact-active.router-link-active{
  color:white;
}

#sideNav{
  transition:all 100ms ease;
}
.navbar-dark .navbar-toggler{
  border-color:transparent;
}
@media only screen and (max-width: 991px){
.elevated{
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
  #mainMenu{
 transition:all 200ms ease;
 -webkit-transition:all 200ms ease;
 max-height:360px;
}
.menu{
height: 0;
    visibility: hidden;
    opacity: 0;
}
.menu-active {
    height: 100%;
    visibility: visible;
    opacity: 1;
}
.b-sidebar-body a.nav-link.js-scroll-trigger.router-link-exact-active.router-link-active{
    color: #fff !important;
    background: #0d1679;
    margin-right: 1rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
}
}
#menuBtn{
  background: #0d1679;
    border: none;
    font-size: 1.5rem;
}
.mt-1.btn-group-vertical .btn-secondary {
    background: transparent;
    border-color: #fff;
}
.mt-1.btn-group-vertical .btn-secondary:hover {
    background:white;
    color:#0d1679;
}

.pl-3.btn-group .btn-secondary {
    background: #0d1679;
    color:white;
}
.pl-3.btn-group .btn-secondary:hover {
    background:white;
    color:#0d1679;
    border-color: #0d1679;
}
</style>
