<template>
  <router-link :to="url">
    <div class="h-[40px] flex items-center text-white cursor-pointer rounded-md pl-3 hover:bg-sky-600">
      {{ navLabel }}
    </div>
  </router-link>
</template>
<script>

export default {
  name: "SidenavItem",
  props: ['url', 'navLabel']
}
</script>