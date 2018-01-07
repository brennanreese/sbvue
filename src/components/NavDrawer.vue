<template>
  <v-navigation-drawer v-model="drawer" fixed app>
    <div style="padding-left: 5em">
      <v-switch :label="(!dark ? 'light' : 'dark') + ' theme'" v-model="dark"></v-switch>
    </div>
    <v-list>
      <v-list-tile :to="{ name: 'home' }">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{ name: 'schedule' }">
        <v-list-tile-action>
          <v-icon>schedule</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Schedule</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      drawer: {
        get: function () {
          return this.$store.getters.drawer
        },
        set: function () {
          return true
        }
      },
      dark: {
        get: function () {
          return this.$store.getters.dark
        },
        set: function () {
          this.$store.dispatch('toggleDark')
        }
      }
    }
  }
</script>

<style scoped>

</style>
