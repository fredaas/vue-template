<template>
  <v-app>
    <div class="mx-auto">
      <router-link class="router-style" to="/">Home</router-link> /
      <router-link class="router-style" to="/X">X</router-link> /
      <router-link class="router-style" to="/Y">Y</router-link>

      <div class="my-12" align="center" id="color-header">
        Vue App
      </div>

      <img class="mb-12" style="width: 100px" :src="require('assets/logo.png')"><br>

      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style lang="scss">
@import "styles/_colors";

#color-header {
  color: $primary;
}

.router-style {
  text-decoration: none;
}

// * { border: 1px solid red; }
</style>
