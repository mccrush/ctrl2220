<template>
  <div class="row">
    <vueHeadful title="Admin" description="Admin panel" />
    <div class="col-12 border-bottom border-top">
      <div class="row">
        <div class="col-2 border-right">
          <h6 class="text-center mt-2">Раздел</h6>
        </div>
        <div class="col-2 border-right">
          <h6 class="text-center mt-2">Элемент</h6>
        </div>
        <div class="col-2 p-0">
          <button
            class="btn btn-success btn-sm btn-block rounded-0 h-100"
            @click="createElement"
            :disabled="!selectRazdelAlias"
          >Создать</button>
        </div>
        <div class="col-6">
          <h6
            class="text-center mt-2"
          >{{mode === 'create' ? 'Режим создания' : 'Режим редактирования'}}</h6>
        </div>
      </div>
    </div>

    <div class="col-2 border-right p-0">
      <ListRazdel @select-razdel="selectRazdel" :currentId="selectRazdelId" :razdels="razdels" />
    </div>
    <div class="col-2 border-right p-0">
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
        v-if="selectRazdelAlias === 'napravs' && (mode === 'create' || selectElementId)"
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

export default {
  components: {
    vueHeadful,
    ListRazdel,
    ListElement,
    FormNaprav
  },
  data() {
    return {
      selectRazdelId: '',
      selectRazdelAlias: '',
      selectElementId: '',
      elements: [],
      element: null,
      mode: 'create'
    }
  },
  mounted() {},
  computed: mapGetters([
    'razdels',
    'napravs',
    'reshens',
    'vid_napravs',
    'abouts'
  ]),
  methods: {
    selectRazdel({ id, alias }) {
      this.elements = this[alias]
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
    }
  },
  watch: {
    selectElementId() {
      if (this.selectElementId) {
        this.element = this[this.selectRazdelAlias].find(
          elem => elem.id === this.selectElementId
        )
      } else {
        this.element = null
      }
    }
  }
}
</script>

<style scoped>
.list-group-item {
  text-decoration: none;
  color: #2c3e50;
}
</style>