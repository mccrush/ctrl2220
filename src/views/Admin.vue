<template>
  <div class="row">
    <vueHeadful title="Admin" description="Admin panel" />
    <div class="col-12 border-bottom border-top">
      <div class="row">
        <div class="col-2 border-end">
          <h6 class="text-center mt-2">Раздел</h6>
        </div>
        <div class="col-2 border-end">
          <h6 class="text-center mt-2">Элемент</h6>
        </div>
        <div class="col-2 p-0">
          <button
            class="btn btn-success btn-sm rounded-0 h-100 w-100"
            @click="createElement"
            :disabled="!selectRazdelAlias"
          >
            Создать
          </button>
        </div>
        <div class="col-2 p-0">
          <button
            class="btn btn-danger btn-sm rounded-0 h-100 w-100"
            @click="deleteElement"
            :disabled="!selectRazdelAlias || !selectElementId"
          >
            Удалить
          </button>
        </div>
        <div class="col-4">
          <h6 class="text-center mt-2">
            {{ mode === 'create' ? 'Режим создания' : 'Режим редактирования' }}
          </h6>
        </div>
      </div>
    </div>

    <div class="col-2 border-end p-0">
      <ListRazdel
        @select-razdel="selectRazdel"
        :currentId="selectRazdelId"
        :razdels="razdels"
      />
    </div>
    <div class="col-2 border-end p-0">
      <div v-if="elements.length">
        <ListElement
          @select-element="selectElement"
          :currentId="selectElementId"
          :elements="elements"
        />
      </div>
    </div>
    <div class="col-8 pt-3 pb-3">
      <FormNaprav
        v-if="
          selectRazdelAlias === 'napravs' &&
          (mode === 'create' || selectElementId)
        "
        :element="element"
      />
      <FormVidNaprav
        v-if="
          selectRazdelAlias === 'vid_napravs' &&
          (mode === 'create' || selectElementId)
        "
        :element="element"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vueHeadful from 'vue-headful'
import ListRazdel from '@/compadmin/ListRazdel'
import ListElement from '@/compadmin/ListElement'
import FormNaprav from '@/compadmin/FormNaprav'
import FormVidNaprav from '@/compadmin/FormVidNaprav'

export default {
  components: {
    vueHeadful,
    ListRazdel,
    ListElement,
    FormNaprav,
    FormVidNaprav,
  },
  data() {
    return {
      selectRazdelId: '',
      selectRazdelAlias: '',
      selectElementId: '',
      element: null,
      mode: 'create',
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(['razdels', 'napravs', 'reshens', 'vid_napravs', 'abouts']),
    elements() {
      return this[this.selectRazdelAlias] || []
    },
  },
  methods: {
    deleteElement() {
      this.$store.dispatch('deleteElement', {
        razdel: this.selectRazdelAlias,
        id: this.selectElementId,
      })
      this.selectElementId = ''
    },
    selectRazdel({ id, alias }) {
      this.selectRazdelId = id
      this.selectRazdelAlias = alias
      this.selectElementId = ''
      this.mode = 'edit'
    },
    selectElement({ id, alias }) {
      this.selectElementId = id
      this.mode = 'edit'
    },
    createElement() {
      this.selectElementId = ''
      this.mode = 'create'
    },
  },
  watch: {
    selectElementId() {
      if (this.selectElementId) {
        this.element = this[this.selectRazdelAlias].find(
          (elem) => elem.id === this.selectElementId
        )
      } else {
        this.element = null
      }
    },
  },
}
</script>

<style scoped>
.list-group-item {
  text-decoration: none;
  color: #2c3e50;
}
</style>