<template>
  <div>
    <WorkerPopupAdd
      :popupHidden="popupAddHidden"
      @add-worker="addWorker"
      @popup-toggle="popupAddToggle"
    />

    <AppTopPanel header="Список рабочих">
      <template #nav-buttons>
        <AppButtonIcon icon="search" size="1.8rem" title="Поиск" @button-click="$router.push('/workers/search')"/>
        <AppButtonIcon icon="add" size="1.8rem" title="Добавить рабочего" @button-click="popupAddToggle"/>
      </template>
    </AppTopPanel>

    <section>
      <WorkersTable
        v-if="workers"
        @remove-worker="removeWorker"
        :workers="workers"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import firebase from 'firebase/app'

import AppTopPanel from '@/components/AppTopPanel'
import AppButtonIcon from '@/components/AppButtonIcon'
import WorkersTable from '../components/section/workers/WorkersTable'
import WorkerPopupAdd from '../components/section/workers/WorkerPopupAdd'

export default {
  name: 'Workers',

  components: {
    AppTopPanel,
    AppButtonIcon,
    WorkersTable,
    WorkerPopupAdd
  },

  data () {
    return {
      popupAddHidden: true
    }
  },

  computed: {
    ...mapGetters([
      'workers'
    ])
  },

  created () {
    this.SET_WORKERS_FROM_LOCAL_STORAGE()
  },

  methods: {
    ...mapMutations([
      'SET_WORKERS_FROM_SERVER',
      'SET_WORKERS_FROM_LOCAL_STORAGE'
    ]),

    popupAddToggle () {
      this.popupAddHidden = !this.popupAddHidden
    },

    removeWorker (id) {
      firebase.database().ref('/workers/' + id).remove()
        .then(() => {
          this.SET_WORKERS_FROM_SERVER()
          console.log('Рабочий удалён 🗑️')
        })
    },

    addWorker (worker) {
      firebase.database().ref('/workers/' + worker.id).set(worker)
        .then(() => {
          this.SET_WORKERS_FROM_SERVER()
          console.log('Рабочий добавлен ➕')
        })
    }
  }
}
</script>
