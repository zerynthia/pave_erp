<template>
  <div>
    <AppTopPanel :header='`Информация о клиенте "${customer.name}`'>
      <template #nav-buttons>
        <CustomerNavigation :customer="customer"/>
      </template>
    </AppTopPanel>

    <section class="info-content">
<!--      <div class="margin-fix w20rem">-->
<!--        <h5 class="flex-start-center"><i class="material-icons">business_center</i> Договоры</h5>-->
<!--        <h6 v-if="customer.contractNumber !== '' || null ">Номер договора: <wbr> <span>{{customer.contractNumber}}</span></h6>-->
<!--        <h6 v-if="customer.contractDate !== '' || null ">Дата договора: <wbr> <span>{{customer.contractDate}}</span></h6>-->
<!--      </div>-->

      <div class="margin-fix w20rem">
        <h5 class="flex-start-center"><i class="material-icons">comment</i> Примечание</h5>
        <h6 v-if="customer.notes !== '' || null">
          <p v-for="(note, i) in customer.notes" :key="i">
            {{ note }}
          </p>
        </h6>
        <h6 v-show="customer.uploadImageNote !== undefined || ''">Изображение: <wbr> <span><a v-bind:href="customer.uploadImageNote" target="_blank">Открыть</a></span></h6>
      </div>

<!--      <div class="margin-fix w20rem">-->
<!--        <h5 class="flex-start-center"><i class="material-icons">local_phone</i> Контакты</h5>-->
<!--        <h6 v-if="customer.number !== '' || null ">Номер: <wbr> <span><a :href="'tel:' + customer.number">{{customer.number}}</a></span></h6>-->
<!--        <h6 v-if="customer.fax !== '' || null ">Факс: <wbr> <span>{{customer.fax}}</span></h6>-->
<!--        <h6 v-if="customer.email !== '' || null ">Почта: <wbr> <span><a :href="'mailto:' + customer.email">{{customer.email}}</a></span></h6>-->
<!--        <h6 v-if="customer.site !== '' || null ">Сайт: <wbr> <span><a target="_blank" :href="customer.site">{{customer.site}}</a></span></h6>-->
<!--        <h6 v-if="customer.address !== '' || null ">Адрес: <wbr> <span>{{customer.address}}</span></h6>-->
<!--      </div>-->

      <div class="margin-fix w20rem">
        <h5 class="flex-start-center"><i class="material-icons">assessment</i> Системная информация</h5>
        <h6 v-if="customer.name !== '' || null ">Наименование: <wbr> <span>{{customer.name}}</span></h6>
<!--        <h6 v-if="customer.manager !== '' || null ">Менеджер: <wbr> <span>{{customer.manager}}</span></h6>-->
<!--        <h6 v-if="customer.status !== '' || null ">Состояние: <wbr>-->
<!--          <span v-if="customer.status === 'Действующий'" class="green-text">{{customer.status}}</span>-->
<!--          <span v-else class="red-text">{{customer.status}}</span>-->
<!--        </h6>-->
        <h6 v-if="customer.id !== '' || null ">Идентификационный номер: <wbr> <span>{{customer.id}}</span></h6>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import AppTopPanel from '../../AppTopPanel'
import CustomerNavigation from './CustomerNavigation'

export default {
  name: 'AboutCustomer',

  components: {
    AppTopPanel,
    CustomerNavigation
  },

  filters: {
    booleanToWord: function (boolean) {
      return (boolean === true) ? 'Да' : 'Нет'
    }
  },

  data () {
    return {
      customer: ''
    }
  },

  computed: {
    ...mapGetters([
      'customers'
    ]),

    customerId () {
      return this.$route.params.id
    }
  },

  created () {
    this.SET_CUSTOMERS_FROM_LOCAL_STORAGE()
    this.customer = this.customers[this.customerId]
  },

  methods: {
    ...mapMutations([
      'SET_CUSTOMERS_FROM_LOCAL_STORAGE'
    ])
  }
}
</script>
