<template>
  <div class="list-group list-group-flush mt-1">
    <!-- <LoadIcon v-if="!elements.length" class="m-auto" /> -->
    <p>Сначала выберите раздел</p>
    <button
      type="button"
      v-for="(element, index) in elements"
      :key="'pag'+index"
      :class="{selected: element.id === id}"
      class="list-group-item list-group-item-action p-1"
      @click="$emit('select-element', {id: element.id, alias: element.alias})"
    >{{element.title}}</button>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon.vue'

export default {
  components: {
    LoadIcon
  },
  props: {
    id: String,
    razdelAlias: String
  },
  data() {
    return {
      elements: []
    }
  },
  watch: {
    razdelAlias() {
      if (this.razdelAlias) {
        this.elements = this.$store.getters[this.razdelAlias]
      }
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: #ffc107;
}
</style>