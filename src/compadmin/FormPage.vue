<template>
  <form @submit.prevent="saveChange">
    <div class="row">
      <div class="col-7">
        <div class="form-group">
          <label for="title">Название страницы</label>
          <input type="text" class="form-control form-control-sm" id="title" v-model="title" />
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="alias">Алиас</label>
          <input type="text" class="form-control form-control-sm" id="alias" aria-describedby="aliasHelp" v-model="alias" />
          <small id="aliasHelp" class="form-text text-muted">Латинскими символами, с маленькой буквы, без пробелов и дефисов</small>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <textarea row="4" class="form-control" v-model="description"></textarea>
      </div>
    </div>

    <div class="form-group form-check mt-4">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="active" />
      <label class="form-check-label" for="exampleCheck1">Активна</label>
    </div>

    <button type="submit" class="btn btn-primary btn-sm float-right" :class="{disabled: !title.length || !alias.length}">Сохранить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      alias: "",
      description: "",
      posmenu: null,
      active: true
    };
  },
  created() {
    //console.log("this.$route.params.id =", this.$route.params.id);
  },
  mounted() {
    this.getValue();
  },
  computed: {
    page() {
      return this.id !== undefined
        ? this.$store.getters.pageById(this.id)
        : {
            title: "",
            alias: "",
            description: "",
            posmenu: null,
            active: true
          };
    }
  },
  methods: {
    getValue() {
      this.title = this.page.title;
      this.alias = this.page.alias;
      this.description = this.page.description;
      this.posmenu = this.page.posmenu;
      this.active = this.page.active;
    },
    saveChange() {
      if (this.title.trim() && this.alias.trim()) {
        if (this.id) {
          this.$store.dispatch("updatePage", {
            id: this.$route.params.id,
            title: this.title,
            alias: this.alias,
            description: this.description,
            posmenu: +this.posmenu,
            active: this.active,
            razdel: this.$route.params.razdel
          });
        } else {
          this.$store.dispatch("createPage", {
            id: Date.now().toString(),
            title: this.title,
            alias: this.alias,
            description: this.description,
            posmenu: +this.posmenu,
            active: this.active,
            razdel: this.$route.params.razdel
          });
        }
      }
    }
  },
  watch: {
    $route(to, from) {
      this.id = this.$route.params.id;
      this.getValue();
    }
  }
};
</script>