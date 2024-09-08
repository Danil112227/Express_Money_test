<template>
  <v-card
    height="100%"
    width="36%"
    class="pa-2 rounded-lg bank-list-shadow"
    tile
  >
    <v-list
      class="pa-0"
      dense
    >
      <v-toolbar-title class="list__title py-4 pl-5 pr-9 d-flex justify-space-between">
        <span class="list__title">Вы получаете</span>
        <span class="list__title">Курс</span>
        <span class="list__title">Резерв</span>
      </v-toolbar-title>
      <v-list-item-group
        :value="value"
        color="primary"
      >
        <BankItem
          @click="selectItem(index)"
          v-for="(item, index) in banks"
          :key="index"
          :bank="item"
        />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>


<script>
import BankItem from "@/components/BankItem.vue"


export default {
    components: {
      BankItem
    },
    props: {
        banks: {
            type: Array,
            required: true
        },
        value: {
          type: Number,
          required: true
        }
    },
    methods: {
      selectItem (index) {
            this.selectedItem = index
            this.$emit('input', index)
        },
        created () {
      this.selectItem(1)
    },
    },
    data () {
      return {
        selectedItem: 0,
      }
    }
}
</script>

<style>
  .bank-list-shadow {
    box-shadow: 0 0 5px #e1e9f2 !important;
  }

  .bank__list__title {
    font: 600 20px/20px 'IBM Plex Sans', sans-serif !important;
  }
</style>