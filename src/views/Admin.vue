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

    <div class="col-2 border-right p-0">
      <button class="btn btn-success btn-sm btn-block rounded-0" @click="createRazdel">Создать</button>
      <ListRazdel @select-razdel="selectRazdel" :currentId="selectRazdelId" :razdels="razdels" />
    </div>
    <div class="col-2 border-right p-0">
      <div v-if="elements.length">
        <button class="btn btn-success btn-sm btn-block rounded-0" @click="createElement">Создать</button>
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
  mounted() {
    this.selectRazdelId = localStorage.getItem('selectRazdelId') || ''
    this.selectRazdelAlias = localStorage.getItem('selectRazdelAlias') || ''
    if (this.selectRazdelAlias) {
      this.mode = 'edit'
      this.elements = this.$store.getters[this.selectRazdelAlias]
      this.selectElementId = localStorage.getItem('selectElementId') || ''
      if (this.selectElementId) {
        this.getElement()
      }
    } else {
      this.mode = 'create'
      this.selectElementId = ''
    }
  },
  computed: {
    razdels() {
      return this.$store.getters.razdels
    }
  },
  methods: {
    getElement() {
      console.log('From getElement()')

      // Настроить работу асинхронности
      // чтобы значения в форму подставлялись после загрузки с сервера
      switch (this.selectRazdelAlias) {
        case 'napravs':
          this.element = this.$store.getters.napravById(this.selectElementId)
          break
        case 'razdels':
          this.element = this.$store.getters.razdelById(this.selectElementId)
          break
        default:
          this.element = null
      }
    },
    selectRazdel({ id, alias }) {
      this.elements = this.$store.getters[alias]
      this.selectRazdelId = id
      localStorage.setItem('selectRazdelId', id)
      this.selectRazdelAlias = alias
      localStorage.setItem('selectRazdelAlias', alias)
      this.selectElementId = ''
      localStorage.setItem('selectElementId', '')
      this.mode = 'edit'
    },
    selectElement({ id, alias }) {
      this.selectElementId = id
      localStorage.setItem('selectElementId', id)
      this.mode = 'edit'

      this.getElement()
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
      this.element = null
    }
  }
  // watch: {
  //   selectRazdelAlias() {
  //     if (this.selectRazdelAlias) {
  //       this.elements = this.$store.getters[this.selectRazdelAlias]
  //     }
  //   }
  // }
}
</script>

<style scoped>
.list-group-item {
  text-decoration: none;
  color: #2c3e50;
}
</style>