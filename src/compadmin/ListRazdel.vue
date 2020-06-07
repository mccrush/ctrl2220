<template>
  <div class="list-group list-group-flush mt-1">
    <LoadIcon v-if="!razdels.length" class="m-auto" />
    <button
      type="button"
      v-for="(razdel, index) in razdels"
      :key="'raz'+index"
      class="list-group-item list-group-item-action p-1"
      @click="$emit('select-razdel', (razdel.id, razdel.alias))"
    >{{razdel.title}}</button>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon.vue'

export default {
  computed: {
    razdels() {
      return this.$store.getters.razdels
    }
  }
}
</script>