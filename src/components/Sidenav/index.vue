<template>
  <aside id="sidenav-main" aria-label="Sidebar" class="w-64 border-0 p-3 h-screen">
    <div class="bg-gray-800 h-full rounded-lg">
      <div class="p-6">
        <a class="flex items-center justify-center" href="/">
          <img :src="
            sidebarType === 'bg-white' ||
              (sidebarType === 'bg-transparent' && !isDarkMode)
              ? logoDark
              : logo
          " class="w-8 mr-4" alt="main_logo" />
          <span class="ms-2 font-weight-bold text-white">My Dashboard</span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2" />
      <sidenav-list />
    </div>
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "../../assets/image/logo-ct.png";
import logoDark from "../../assets/image/logo-ct-dark.png";
import { mapState } from "vuex";

export default {
  name: "SidenavIndex",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
      logoDark,
    };
  },
  computed: {
    ...mapState(["isRTL", "sidebarType", "isDarkMode"]),
  },
};
</script>
