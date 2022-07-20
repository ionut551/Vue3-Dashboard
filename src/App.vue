<template>
  <sidenav :custom_class="color" :class="[isRTL ? 'fixed-end' : 'fixed-start']" v-if="showSidenav" />
  <img alt="Vue logo" src="./assets/image/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sidenav from './components/Sidenav'
import { mapMutations, mapState } from "vuex";


export default {
  name: 'App',
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
