<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="col-7">
        <div class="form-group">
          <label for="title">Заголовок страницы (название элемента)</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="title"
            placeholder="Заголовок / название"
            v-model="title"
          />
        </div>
      </div>
      <div class="col-5">
        <div class="form-group">
          <label for="alias">Алиас</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="alias"
            aria-describedby="aliasHelp"
            placeholder="alias"
            v-model="alias"
          />
          <small
            id="aliasHelp"
            class="form-text text-muted"
          >Латинскими символами, с маленькой буквы, без пробелов и дефисов</small>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <textarea
          row="4"
          class="form-control"
          v-model="description"
          placeholder="Описание раздела, страницы, элемента"
        ></textarea>
      </div>
    </div>

    <div class="form-group form-check mt-4">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="active" />
      <label
        class="form-check-label"
        for="exampleCheck1"
      >{{active ? 'Активна (будет отображаться)' : 'Не активна (не будет отображаться)'}}</label>
    </div>

    <button
      type="submit"
      class="btn btn-primary btn-sm float-right shadow-sm"
      :disabled="!title.length || !alias.length"
    >Сохранить</button>

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
  props: {
    element: {
      type: Object
    }
  },
  data() {
    return {
      title: '',
      alias: '',
      description: '',
      active: true,
      success: false,
      error: false
    }
  },
  mounted() {
    console.log('From Mount this.element=', this.element)

    if (this.element) {
      this.title = this.element.title
      this.alias = this.element.alias
      this.description = this.element.description
      this.active = this.element.active
    }
  },
  methods: {
    submit() {}
  },
  watch: {
    element() {
      console.log('Elem from watch')

      if (this.element) {
        this.title = this.element.title
        this.alias = this.element.alias
        this.description = this.element.description
        this.active = this.element.active
      } else {
        this.title = ''
        this.alias = ''
        this.description = ''
        this.active = true
      }
    }
  }
}
</script>