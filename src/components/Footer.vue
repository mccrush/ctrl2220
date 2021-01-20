<template>
  <div class="row border-top pt-2">
    <div class="col">
      Полный контроль
      <small class="d-block mb-3 text-muted">&copy; 2008 — {{ tecYear }}</small>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.tecYear = new Date().getFullYear()
  },
}
</script>