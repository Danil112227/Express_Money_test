<template>
  <v-list-item
    class="d-flex align-center rounded-lg"
    @click="$emit('click')"
  >
    <v-list-item-avatar>
      <v-img
        width="40px"
        max-width="40px"
        height="40px"
        max-heigth="40px"
        contain
        :src="image"
      />
    </v-list-item-avatar>
    <v-list-item-content class="d-flex">
      <v-list-item-title v-text="title" />
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-title v-text="count" />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: {
    image:{
      type: String,
      required: true
      },
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 1
    },
    
  },
  data: () => ({
    
  }),
  
}
</script>

<style>
  .main__wrapper {
    max-width: 1150px;
    padding-top: 40pxpx;
    margin: 0 auto;
  }
</style>