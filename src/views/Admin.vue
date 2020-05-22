<template>
  <div class="row">
    <vueHeadful title="Admin" description="Admin panel" />
    <div class="col-12 border-bottom border-top">
      <div class="row">
        <div class="col-2 border-right">
          <h5 class="mt-2">Раздел</h5>
        </div>
        <div class="col-2 border-right">
          <h5 class="mt-2">Страница</h5>
        </div>
        <div class="col-8">
          <h4 class="mt-2">Панель администратора</h4>
        </div>
      </div>
    </div>
    <div class="col-2 border-right pt-1">
      <router-link to="/admin/razdel" class="btn btn-success btn-sm btn-block mt-1">Создать</router-link>
      <div class="list-group list-group-flush mt-1">
        <LoadIcon v-if="razdels.length === 0" class="m-auto" />
        <router-link v-for="(razdel, index) in razdels" :key="'raz'+index" :to="'/admin/'+razdel.alias+'/'+razdel.id" class="list-group-item list-group-item-action p-1">{{razdel.title}}</router-link>
      </div>
    </div>
    <div class="col-2 border-right pt-1">
      <router-link :to="'/admin/'+this.$route.params.razdel+'/page'" class="btn btn-success btn-sm btn-block mt-1">Создать</router-link>
      <p v-if="!$route.params.page">Выберите страницу</p>
    </div>
    <div class="col-8 pt-1 pb-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import vueHeadful from "vue-headful";
import LoadIcon from "@/components/LoadIcon.vue";

export default {
  components: {
    vueHeadful,
    LoadIcon
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