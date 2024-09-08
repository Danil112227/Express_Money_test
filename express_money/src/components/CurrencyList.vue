<template>
  <v-card
    width="26%"
    height="100%"
    class="pa-2 rounded-lg currency_list_media"
    tile
  >
    <v-list
      class="pa-0"
      dense
    >
      <v-toolbar-title class="too py-4 pl-5 list__title">
        <span class="list__title">Вы отдаёте</span>
      </v-toolbar-title>
      <v-list-item-group
        color="primary"
      >
        <CurrencyItem
          @click="$emit('input', item.ticker)"
          v-for="(item) in items"
          :key="item.title"
          :title="item.title"
          :image="item.image"
        />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import CurrencyItem from "@/components/CurrencyItem.vue";

export default {
    components: {
        CurrencyItem,
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: true
        },
    },
}
</script>

<style>
  .currency_list_media {
    box-shadow: 0 0 5px #e1e9f2 !important;
  }





    /* @media (min-width: 840px) {
  .currency_list_media {
    width: 32% !important;
  }
}


@media (min-width: 960px) {
  .currency_list_media {
    width: 42% !important;
    float: left !important;
  }
}  */


</style>