<template>
  <div class="row">
    <vueHeadful title="Admin" description="Admin panel" />
    <div class="col-12 border-bottom border-top">
      <div class="row">
        <div class="col-2 border-right">
          <h5 class="mt-2">Раздел</h5>
        </div>
        <div class="col-2 border-right">
          <h5 class="mt-2">Элемент</h5>
        </div>
        <div class="col-8">
          <h4 class="mt-2">Панель администратора</h4>
        </div>
      </div>
    </div>

    <div class="col-2 border-right pt-1">
      <button class="btn btn-success btn-sm btn-block mt-1">Создать</button>
      <ListRazdel @select-razdel="selectRazdel" />
    </div>
    <div class="col-2 border-right pt-1">
      <button class="btn btn-success btn-sm btn-block mt-1">Создать</button>
      <ListElement />
    </div>
    <div class="col-8 pt-1 pb-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
import ListRazdel from '@/compadmin/ListRazdel'
import ListElement from '@/compadmin/ListElement'

export default {
  components: {
    vueHeadful,
    ListRazdel,
    ListElement
  },
  data() {
    return {
      pages: []
    }
  },
  created() {
    //console.log("razdels = ", this.razdels);
  },
  // computed: {
  //   naprav() {
  //     return this.$store.getters.naprav
  //   },
  //   reshen() {
  //     return this.$store.getters.reshen
  //   },
  //   vid_naprav() {
  //     return this.$store.getters.vid_naprav
  //   },
  //   about() {
  //     return this.$store.getters.about
  //   }
  // },
  methods: {
    selectRazdel(id, alias) {
      console.log('Select razdel: id=', id, ', alias=', alias)
    }
  },
  watch: {
    // $route(to, from) {
    //   this.getPages(to.params.razdel)
    // }
  }
}
</script>

<style scoped>
.list-group-item {
  text-decoration: none;
  color: #2c3e50;
}
</style>