<template>
  <div class="list-group list-group-flush">
    <LoadIcon v-if="!razdels.length" class="m-auto" />
    <button
      type="button"
      v-for="(razdel, index) in razdels"
      :key="'raz'+index"
      class="list-group-item list-group-item-action p-1 pl-3 border-0"
      :class="{selected: razdel.id === currentId}"
      @click="$emit('select-razdel', {id: razdel.id, alias: razdel.alias})"
    >
      <small>{{razdel.title}}</small>
    </button>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon.vue'

export default {
  components: {
    LoadIcon
  },
  props: {
    razdels: Array,
    currentId: String
  }
}
</script>

<style scoped>
.selected {
  background-color: #ffc107;
}
</style>