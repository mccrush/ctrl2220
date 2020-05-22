<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Navbar />
    </transition>

    <div class="container pt-4">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>

      <transition name="fade" mode="out-in">
        <Footer />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
  mounted() {
    // this.$store.dispatch("getRazdels");
    // this.$store.dispatch("getPages", "naprav");
    // this.$store.dispatch("getPages", "reshen");
    // this.$store.dispatch("getPages", "vid_naprav");
    // this.$store.dispatch("getPages", "about");
  }
};
</script>

<style>
#app {
  font-family: "Exo 2", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f2f2;
}

#app .container {
  max-width: 1130px;
  background: #fff;
  padding-bottom: 24px;
}

.fw700 {
  font-weight: 700;
}

.fw400 {
  font-weight: 400;
}

a {
  color: #0056b3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
