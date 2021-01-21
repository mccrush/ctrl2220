<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Navbar />
    </transition>

    <div class="container pt-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <transition name="fade" mode="out-in">
        <Footer />
      </transition>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    // this.$store.dispatch("getRazdels");
    this.$store.dispatch('getPages', 'razdels')
    this.$store.dispatch('getPages', 'napravs')
    // this.$store.dispatch("getPages", "reshen");
    // this.$store.dispatch('getPages', 'vid_napravs')
    // this.$store.dispatch("getPages", "about");
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap');

#app {
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
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
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
