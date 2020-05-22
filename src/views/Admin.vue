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
        <LoadIcon v-if="!razdels.length" class="m-auto" />
        <router-link v-for="(razdel, index) in razdels" :key="'raz'+index" :to="'/admin/'+razdel.alias+'/'+razdel.id" class="list-group-item list-group-item-action p-1">{{razdel.title}}</router-link>
      </div>
    </div>
    <div class="col-2 border-right pt-1">
      <router-link :to="'/admin/'+this.$route.params.razdel+'/page'" class="btn btn-success btn-sm btn-block mt-1">Создать</router-link>
      <div class="list-group list-group-flush mt-1">
        <!-- <LoadIcon v-if="!pages.length" class="m-auto" /> -->
        <p>Выберите раздел</p>
        <router-link v-for="(page, index) in pages" :key="'pag'+index" :to="'/admin/'+this.$route.params.razdel+'/page/'+pages.id" class="list-group-item list-group-item-action p-1">{{page.title}}</router-link>
      </div>
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
  data() {
    return {
      pages: []
    };
  },
  created() {
    //console.log("razdels = ", this.razdels);
  },
  computed: {
    razdels() {
      return this.$store.getters.razdels;
    },
    naprav() {
      return this.$store.getters.naprav;
    },
    reshen() {
      return this.$store.getters.reshen;
    },
    vid_naprav() {
      return this.$store.getters.vid_naprav;
    },
    about() {
      return this.$store.getters.about;
    }
  },
  methods: {
    getPages(razdel) {
      console.log("razdel", razdel);
      //this.pages = this(razdel);
    }
  },
  watch: {
    $route(to, from) {
      this.getPages(to.params.razdel);
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