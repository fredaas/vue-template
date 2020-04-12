<template>
  <div align="center">
    <v-btn class="mb-6" small outlined color="primary" @click="hidden = !hidden">Click Me</v-btn>
    <div v-if="!hidden">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      hidden: true,
      msg: "Hello, World!",
    }
  }
}
</script>
