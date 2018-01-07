<template>
  <v-app :dark="dark">
    <app-bar></app-bar>
    <nav-drawer></nav-drawer>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <foot-bar></foot-bar>
  </v-app>
</template>

<script>
  import NavDrawer from '@/components/NavDrawer'
  import AppBar from '@/components/AppBar'
  import FootBar from '@/components/FootBar'

  export default {
    computed: {
      dark: {
        get: function () {
          return this.$store.getters.dark
        }
      }
    },
    components: {
      NavDrawer,
      FootBar,
      AppBar
    }
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
