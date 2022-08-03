<template>
  <sidenav :custom_class="color" v-if="showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100 overflow-x-hidden">
    <!-- nav -->
    <!-- <navbar :class="[isNavFixed ? navbarFixed : '', isAbsolute ? absolute : '']"
      :color="isAbsolute ? 'text-white opacity-8' : ''" :minNav="navbarMinimize" v-if="showNavbar" /> -->
    <router-view />
    <!-- <app-footer v-show="showFooter" /> -->
    <!-- <configurator :toggle="toggleConfigurator" :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']" /> -->
  </main>
</template>

<script>
import Sidenav from './components/Sidenav'
import { mapMutations, mapState } from "vuex";


export default {
  name: 'App',
  components: {
    Sidenav
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    ...mapState([
      "isRTL",
      "color",
      "isAbsolute",
      "isNavFixed",
      "navbarFixed",
      "absolute",
      "showSidenav",
      "showNavbar",
      "showFooter",
      "showConfig",
      "hideConfigButton"
    ])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
