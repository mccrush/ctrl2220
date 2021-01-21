<template>
  <div class="row">
    <div class="col">
      <h1>This is an index page</h1>
      <LoadIcon v-if="!napravs.length" />
      <p v-else>Napravs length: {{ napravs.length }}</p>
    </div>
  </div>
</template>

<script>
import LoadIcon from '@/components/LoadIcon'
export default {
  name: 'index',
  components: {
    LoadIcon,
  },
  computed: {
    napravs() {
      return this.$store.getters.napravs
    },
  },
}
</script>
