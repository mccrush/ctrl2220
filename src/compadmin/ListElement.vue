<template>
  <div class="list-group list-group-flush mt-1">
    <!-- <LoadIcon v-if="!elements.length" class="m-auto" /> -->
    <p>Выберите раздел</p>
    <button
      type="button"
      v-for="(element, index) in elements"
      :key="'pag'+index"
      class="list-group-item list-group-item-action p-1"
    >{{element.title}}</button>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon.vue'

export default {}
</script>