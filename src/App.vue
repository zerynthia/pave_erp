<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/main/MainLayout'

export default {
  components: {
    EmptyLayout,
    MainLayout
  },

  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
