<template>
  <form @submit.prevent="saveChange">
    <div class="form-group">
      <label for="title">Название раздела</label>
      <input type="text" class="form-control form-control-sm" id="title" v-model="title" />
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="alias">Алиас</label>
          <input type="text" class="form-control form-control-sm" id="alias" aria-describedby="aliasHelp" v-model="alias" />
          <small id="aliasHelp" class="form-text text-muted">Латинскими символами, с маленькой буквы, без пробелов и дефисов</small>
        </div>
      </div>
      <div class="col-3">
        <div class="form-group">
          <label for="posmenu">Позиция в меню</label>
          <input type="number" class="form-control form-control-sm" id="posmenu" min="1" max="99" step="1" v-model="posmenu" />
        </div>
      </div>
      <div class="col-3">
        <div class="form-group form-check mt-4">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="active" />
          <label class="form-check-label" for="exampleCheck1">Активен</label>
        </div>
      </div>
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
    razdel() {
      return this.id !== undefined
        ? this.$store.getters.razdelById(this.id)
        : { title: "", alias: "", posmenu: null, active: true };
    }
  },
  methods: {
    getValue() {
      this.title = this.razdel.title;
      this.alias = this.razdel.alias;
      this.posmenu = this.razdel.posmenu;
      this.active = this.razdel.active;
    },
    saveChange() {
      if (this.title.trim() && this.alias.trim()) {
        if (this.id) {
          this.$store.dispatch("updateRazdel", {
            id: this.$route.params.id,
            title: this.title,
            alias: this.alias,
            posmenu: +this.posmenu,
            active: this.active
          });
        } else {
          this.$store.dispatch("createRazdel", {
            id: Date.now().toString(),
            title: this.title,
            alias: this.alias,
            posmenu: +this.posmenu,
            active: this.active
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