<template>
  <div class="row">
    <div class="col">
      <h1>This is an index page</h1>
      <LoadIcon v-if="!razdels.length" />
      <p v-else>razdels length: {{ razdels.length }}</p>
      <hr />
      <LoadIcon v-if="!napravs.length" />
      <p v-else>Napravs length: {{ napravs.length }}</p>
      <hr />
      <LoadIcon v-if="!vid_napravs.length" />
      <p v-else>vid_napravs length: {{ vid_napravs.length }}</p>
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
    razdels() {
      return this.$store.getters.razdels
    },
    napravs() {
      return this.$store.getters.napravs
    },
    vid_napravs() {
      return this.$store.getters.vid_napravs
    },
  },
}
</script>
