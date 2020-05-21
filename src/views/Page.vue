<template>
  <div class="row">
    <div class="col">
      <h1>This is an Page page</h1>
      <p>Страница: {{$route.params.razdel}}/{{$route.params.page}}</p>
    </div>
  </div>
</template>

<script>
export default {
  /* Реализовать проверку существования Раздела и Страницы по алиасу. Иначе редирект на 404 */
};
</script>