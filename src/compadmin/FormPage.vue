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

    <transition name="fade" mode="out-in">
      <h5 id="success" v-if="success">
        <span class="badge badge-success">Success</span>
      </h5>
    </transition>
    <transition name="fade" mode="out-in">
      <h5 id="error" v-if="error">
        <span class="badge badge-danger">Error</span>
      </h5>
    </transition>
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
      active: true,
      success: false,
      error: false
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
          this.showSuccess();
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
          this.showSuccess();
        }
      }
    },
    showSuccess() {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000);
    },
    showError() {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
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

<style scoped>
#success,
#error {
  position: fixed;
  top: 10px;
  right: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>