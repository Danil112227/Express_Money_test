<template>
  <v-list-item
    class="d-flex justify-space-between"
    @click="$emit('click')"
  >
    <v-list-item-avatar>
      <v-img
        :src="bank.image"
        alt="banks"
        width="40px"
        max-width="40px"
        height="40px"
        max-heigth="40px"
        contain
      />
    </v-list-item-avatar>
    
    <v-list-item-content>
      <v-list-item-title v-text="bank.title" />
    </v-list-item-content>
    <v-list-item-action class="pr-4">
      <v-list-item-title
        v-text="bank.exchange"
      />
    </v-list-item-action>
    <v-list-item-action class="pr-6">
      <v-list-item-title v-text="bank.reserved" />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "BankItem",
  props: {
    bank: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style> 
  .title__wrapper {
    width: 70px;
  }
  .title__wrapper1 {
    width: 100px;
  }

</style>