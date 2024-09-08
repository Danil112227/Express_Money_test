<template>
  <v-card
    class="card card__title"
    width="24%"
    height="100%"
  >
    <div class="card__appbar d-flex justify-space-between">
      <v-list-item-avatar>
        <v-img
          :src="card.image"
          alt="banks"
          width="40px"
          max-width="40px"
          height="40px"
          max-heigth="40px"
          contain
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title v-text="card.title" />
        <v-list-item-title v-text="card.reserve" />
      </v-list-item-content>
    </div>
  </v-card>
</template>

<script>
    export default {
        props: {
            card: { 
                type: Object,
                required: true,
    }
  }
    }
</script>

<style>
  .card { 
    padding: 8px 0 8px 8px;
    margin: 0 1% 10px 0;
  }
  .subtitle__card {
    margin: 0 !important; 
    padding: 16px !important;
    font-size: 14px;
    font-weight: 400;
    color: #949494;
  }
  .card__text__color {
    color: black !important;
  }
</style>