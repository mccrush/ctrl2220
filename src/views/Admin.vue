<template>
  <div class="row">
    <vueHeadful title="Admin" description="Admin panel" />
    <div class="col-12 border-bottom">
      <h5 class="pb-2">Admin panel</h5>
    </div>
    <div class="col-2 border-right pt-1">
      <p class="border-bottom pb-2 mb-2">Раздел</p>
      <router-link to="/admin/razdel" class="btn btn-success btn-sm btn-block">Создать</router-link>
      <div class="list-group list-group-flush">
        <router-link v-for="(razdel, index) in razdels" :key="'raz'+index" :to="'/admin/razdel/'+razdel.id+'?alias='+razdel.alias" class="list-group-item list-group-item-action p-1">{{razdel.title}}</router-link>
      </div>
    </div>
    <div class="col-2 border-right pt-1">
      <p class="border-bottom pb-2 mb-2">Страница</p>
      <router-link to="/admin/page" class="btn btn-success btn-sm btn-block">Создать</router-link>
      <p v-if="!$route.params.page">Выберите страницу</p>
    </div>
    <div class="col-8 pt-1 pb-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";

export default {
  components: {
    vueHeadful
  },
  computed: {
    razdels() {
      return this.$store.getters.razdels;
    }
  }
};
</script>

<style scoped>
.list-group-item {
  text-decoration: none;
  color: #2c3e50;
}
</style>