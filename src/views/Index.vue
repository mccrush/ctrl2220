<template>
  <div class="row">
    <div class="col">
      <h1>This is an index page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "index",
  components: {
    Navbar
  }
};
</script>
