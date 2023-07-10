<template>
  <navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import { useAuthorizationStore } from "@/store/authorizationStore";
import router from "./router/router";

export default {

  components: {
    Navbar
  },
  data() {
    return {
      loginStore: useAuthorizationStore(),
    }
  },


}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: rgb(145, 188, 253);
}
</style>
