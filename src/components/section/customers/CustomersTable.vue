<template>
  <AppTableWrapper>
    <template #table-content>
      <PopupDeleteWrapper
        :hidePopupStatus="popupRemoveHidden"
        @close-popup="popupRemoveToggle({})"
        @delete-element="$emit('remove-customer', customer.id); popupRemoveToggle({})"
        :header="`Удаление клиента ${customer.name}`"
      >
        <template #popup-delete-content>
          После нажатия на иконку корзины будет удалён клиент <b>{{customer.name}}</b>
        </template>
      </PopupDeleteWrapper>

      <AppTableWrapperRow>
        <template #row-content>
          <th>Наименование</th>
          <th>Почта</th>
          <th>Телефон</th>
          <th>Сайт</th>
          <th>Адрес</th>
          <th>Заметка</th>
          <th></th>
        </template>
      </AppTableWrapperRow>

      <template v-for="(element) in customers">
        <AppTableWrapperRow :key="element.id"
                            @db-click="$router.push({name : 'customerEdit', params: {id: element.id}})">
          <template #row-content>
            <td :title="element.name">{{element.name}}</td>

            <td>
              <a :href="'mailto:' + element.subdivisions['0'].email"
                 :title="'Написать на почту: ' + element.subdivisions['0'].email">
                {{element.subdivisions['0'].email}}
              </a>
            </td>

            <td>
              <a :href="'tel:' + element.subdivisions['0'].number"
                 title="Позвонить">
                {{element.subdivisions['0'].number}}
              </a>
            </td>

            <td>
              <a :href="element.subdivisions['0'].site"
                 target="_blank"
                 :title="'Посетить: ' + element.subdivisions['0'].site">
                {{element.subdivisions['0'].site}}
              </a>
            </td>

            <td :title="element.subdivisions['0'].address">{{element.subdivisions['0'].address}}</td>

            <td v-if="element.notes"
                :title="element.notes[element.notes.length - 1]"
            >
              {{element.notes[element.notes.length - 1]}}
            </td>
            <td v-else>Заметок нет</td>

            <td class="row-action">
              <AppButtonIcon icon="domain" title="Подразделения" size="1.2rem" @button-click="$router.push({name : 'customerSubdivisions', params: {id: element.id}})"/>
              <AppButtonIcon icon="timeline" title="Статистика" size="1.2rem" @button-click="$router.push({name : 'customerStatistics', params: {id: element.id}})"/>
              <AppButtonIcon icon="remove_red_eye" title="Просмотреть" size="1.2rem" @button-click="$router.push({name : 'customerAbout', params: {id: element.id}})"/>
              <AppButtonIcon icon="create" title="Редактировать" size="1.2rem" @button-click="$router.push({name : 'customerEdit', params: {id: element.id}})"/>
              <AppButtonIcon icon="delete" title="Удалить" size="1.2rem" @button-click="popupRemoveToggle(element); customer = element"/>
            </td>
          </template>
        </AppTableWrapperRow>
      </template>
    </template>
  </AppTableWrapper>
</template>

<script>
import PopupDeleteWrapper from '../../popups/PopupDeleteWrapper'
import AppTableWrapper from '../../table/AppTableWrapper'
import AppTableWrapperRow from '../../table/AppTableWrapperRow'
import AppButtonIcon from '../../AppButtonIcon'

export default {
  name: 'TableCustomers',

  components: {
    PopupDeleteWrapper,
    AppButtonIcon,
    AppTableWrapper,
    AppTableWrapperRow
  },

  props: { customers: Object },

  data () {
    return {
      customer: '',

      popupRemoveHidden: true
    }
  },

  methods: {
    popupRemoveToggle () {
      this.popupRemoveHidden = !this.popupRemoveHidden
    },

    removeCustomer (customer) {
      this.$emit('remove-customer', customer.id)
    }
  }
}
</script>
