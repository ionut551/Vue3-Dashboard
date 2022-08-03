<template>
  <div class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="px-4" v-for="item in navItems" :key="item.name">
        <sidenav-item :url="item.link" :navLabel="item.name" />

      </li>
    </ul>
    <div class="sidenav-footer position-absolute w-100 bottom-0">
      <div class="mx-3">
        <a class="btn mt-4 w-100" :class="`bg-gradient-${this.$store.state.color}`" href="#"
          @click="log(navItems)">Upgrade to pro</a>
      </div>
    </div>
  </div>
</template>
<script>

import SidenavItem from "./SidenavItem.vue"
import navItems from './navItems.config'
export default {
  name: "SidenavList",
  data() {
    return {
      navItems
    };
  },
  components: {
    SidenavItem
  }
};
</script>
