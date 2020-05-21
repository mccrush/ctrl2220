<template>
  <div class="row">
    <vueHeadful title="My Title" description="My Desc" />
    <div class="col">
      <h1>This is an razdel page</h1>
      <p>Раздел: {{$route.params.razdel}}</p>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";
import { auth } from "@/main.js";

export default {
  components: {
    vueHeadful
  },
  mounted() {
    /* Реализовать проверку существования Раздела по алиасу. Иначе редирект на 404 */
    console.log(auth.currentUser);
  }
};
</script>