<template>
  <form>
    <div class="form-group">
      <label for="title">Название раздела</label>
      <input type="text" class="form-control form-control-sm" id="title" />
    </div>

    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="alias">Алиас</label>
          <input type="text" class="form-control form-control-sm" id="alias" aria-describedby="aliasHelp" />
          <small id="aliasHelp" class="form-text text-muted">Латинскими символами, с маленькой буквы, без пробелов и дефисов</small>
        </div>
      </div>
      <div class="col-3">
        <div class="form-group">
          <label for="alias">Позиция в меню</label>
          <select class="form-control form-control-sm" id="alias">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div class="col-3">
        <div class="form-group form-check mt-4">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Активен</label>
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary btn-sm float-right">Сохранить</button>
  </form>
</template>

<script>
export default {};
</script>