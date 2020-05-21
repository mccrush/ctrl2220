<template>
  <div class="row">
    <vueHeadful title="My Title" description="My Desc" />
    <div class="col">
      <h1>This is an admin page</h1>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";

export default {
  components: {
    vueHeadful
  }
};
</script>