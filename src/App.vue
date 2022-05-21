<template>
  <div :class="`${darkMode ? 'dark' : ''}`">
    <div class="text-gray-700 dark:bg-gray-600 dark:text-white">
      <router-view/>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'App',  

  computed: {
    ...mapState(['darkMode']),
  },

  provide: {
    appName : 'TITANShop'
  },
}
</script>



<style>
body{
  background: rgb(245, 245, 245);
}
</style>
