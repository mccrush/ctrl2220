<template>
  <div class="list-group list-group-flush mt-1">
    <LoadIcon v-if="!razdels.length" class="m-auto" />
    <button
      type="button"
      v-for="(razdel, index) in razdels"
      :key="'raz'+index"
      class="list-group-item list-group-item-action p-1"
      :class="{selected: razdel.id === id}"
      @click="$emit('select-razdel', {id: razdel.id, alias: razdel.alias})"
    >{{razdel.title}}</button>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon.vue'

export default {
  components: {
    LoadIcon
  },
  props: ['id'],
  computed: {
    razdels() {
      return this.$store.getters.razdels
    }
  }
}
</script>

<style scoped>
.selected {
  background-color: #ffc107;
}
</style>