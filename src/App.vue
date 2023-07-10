<template>
  <navbar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import { useLoginStore } from "@/store/loginStore";
import router from "./router/router";

export default {

  components: {
    Navbar
  },
  data() {
    return {
      loginStore: useLoginStore(),
      accessToken: useLoginStore().accessToken
    }
  },
  watch: {
    accessToken: function () {

    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: azure;
}
</style>
