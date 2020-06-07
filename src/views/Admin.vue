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
        <div class="col-8">
          <h6
            class="text-center mt-2"
          >{{mode === 'create' ? 'Режим создания' : 'Режим редактирования'}}</h6>
        </div>
      </div>
    </div>

    <div class="col-2 border-right pt-1">
      <button class="btn btn-success btn-sm btn-block mt-1" @click="createRazdel">Создать</button>
      <ListRazdel @select-razdel="selectRazdel" :currentId="selectRazdelId" :razdels="razdels" />
    </div>
    <div class="col-2 border-right pt-1">
      <div v-if="elements.length">
        <button class="btn btn-success btn-sm btn-block mt-1" @click="createElement">Создать</button>
        <ListElement
          @select-element="selectElement"
          :currentId="selectElementId"
          :elements="elements"
        />
      </div>
    </div>
    <div class="col-8 pt-1 pb-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'
import ListRazdel from '@/compadmin/ListRazdel'
import ListElement from '@/compadmin/ListElement'

export default {
  components: {
    vueHeadful,
    ListRazdel,
    ListElement
  },
  data() {
    return {
      selectRazdelId: '',
      selectElementId: '',
      selectRazdelAlias: '',
      elements: [],
      mode: 'create'
    }
  },
  mounted() {
    this.selectRazdelId = localStorage.getItem('selectRazdelId') || ''
    this.selectRazdelAlias = localStorage.getItem('selectRazdelAlias') || ''
    if (this.selectRazdelAlias) {
      this.elements = this.$store.getters[this.selectRazdelAlias]
      this.selectElementId = localStorage.getItem('selectElementId') || ''
      this.mode = 'edit'
    } else {
      this.selectElementId = ''
      this.mode = 'create'
    }
  },
  computed: {
    razdels() {
      return this.$store.getters.razdels
    }
  },
  methods: {
    selectRazdel({ id, alias }) {
      this.selectRazdelId = id
      this.selectRazdelAlias = alias
      localStorage.setItem('selectRazdelId', id)
      localStorage.setItem('selectRazdelAlias', alias)
      this.mode = 'edit'
    },
    selectElement({ id, alias }) {
      this.selectElementId = id
      localStorage.setItem('selectElementId', id)
      this.mode = 'edit'
    },
    createRazdel() {
      this.elements = []
      this.selectRazdelId = ''
      this.selectRazdelAlias = ''
      localStorage.setItem('selectRazdelId', '')
      localStorage.setItem('selectRazdelAlias', '')
      this.mode = 'create'
    },
    createElement() {
      this.selectElementId = ''
      localStorage.setItem('selectElementId', '')
      this.mode = 'create'
    }
  },
  watch: {
    selectRazdelAlias() {
      if (this.selectRazdelAlias) {
        this.elements = this.$store.getters[this.selectRazdelAlias]
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