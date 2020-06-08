<template>
  <div class="list-group list-group-flush">
    <button
      type="button"
      v-for="(element, index) in elements"
      :key="'pag'+index"
      :class="{selected: element.id === currentId}"
      class="list-group-item list-group-item-action p-1 pl-3 border-0"
      @click="$emit('select-element', {id: element.id, alias: element.alias})"
    >
      <small>{{element.title}}</small>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    elements: Array,
    currentId: String
  }
}
</script>

<style scoped>
.selected {
  background-color: #ffc107;
}
</style>