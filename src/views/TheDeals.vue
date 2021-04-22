<template>
  <div id="app-deal">
    <DealPopupAdd
      :popupHidden="popupAddDeal"
      @popup-toggle="popupAddToggle"
      @add-deal="addDeal"
    />

    <AppTopPanel header="Список сделок">
      <template #nav-buttons>
        <AppButtonIcon icon="add" size="1.8rem" title="Добавить сделки" @button-click="popupAddToggle()"/>
      </template>
    </AppTopPanel>

    <div class="app-deal-content">
      <DealsTable :deals="deals" @remove-deal="removeDeal"/>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapMutations } from 'vuex'

import AppTopPanel from '../components/AppTopPanel'
import AppButtonIcon from '../components/AppButtonIcon'
import DealPopupAdd from '../components/section/deals/DealPopupAdd'
import DealsTable from '../components/section/deals/DealsTable'

export default {
  name: 'TheDeals',

  components: {
    AppTopPanel,
    AppButtonIcon,
    DealPopupAdd,
    DealsTable
  },

  data () {
    return {
      popupAddDeal: true
    }
  },

  computed: {
    ...mapGetters([
      'deals'
    ])
  },

  created () {
    this.SET_DEALS_FROM_LOCAL_STORAGE()
  },

  methods: {
    ...mapMutations([
      'SET_DEALS_FROM_LOCAL_STORAGE',
      'SET_DEALS_FROM_SERVER'
    ]),

    popupAddToggle () {
      this.popupAddDeal = !this.popupAddDeal
    },

    removeDeal (id) {
      firebase.database().ref('/deals/' + id).remove()
        .then(() => {
          console.log('Сделка удалёна 🗑️')
          this.SET_DEALS_FROM_SERVER()
        })
    },

    addDeal (deal) {
      this.popupAddToggle()
      deal.name = deal.name[0].toUpperCase() + deal.name.substring(1)

      firebase.database().ref('/deals/' + deal.id).set(deal)
        .then(() => {
          console.log('Сделка добавлена ➕')
          this.popupAddHidden = true
          this.SET_DEALS_FROM_SERVER()
        })
    }
  }
}
</script>