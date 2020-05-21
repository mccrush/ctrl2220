<template>
  <div class="row">
    <vueHeadful title="My Title" description="My Desc" />
    <div class="col">
      <h1>This is an Edit page</h1>
      <p v-if="$route.params.razdel">Редактируется раздел: {{$route.params.razdel}}</p>
      <p v-if="$route.params.page">Редактируется страница: {{$route.params.page}}</p>
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";

export default {
  components: {
    vueHeadful
  }
  /* Реализовать проверку существования Раздела и Страницы по алиасу. Иначе редирект на 404 */
};
</script>