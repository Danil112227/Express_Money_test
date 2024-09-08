<template>
  <v-card
    class="card card__title mb-5"
    elevation="2"
    width="100%"
    height="100%"
  >
    <div class="card__appbar d-flex justify-space-between">
      <v-card-title class="font-weith-normal text-md-body-1">
        {{ card.name }}
      </v-card-title>
      <v-card-subtitle class="subtitle__card">
        {{ card.time }}
      </v-card-subtitle>
    </div>
      
    <v-card-text class="pt-0 card__text__color">
      {{ card.comment }}
    </v-card-text>
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
    .subtitle__card {
      margin: 0 !important; 
      padding: 16px !important;
      font-size: 14px;
      font-weight: 600;
      color: #949494;
    }
    .card__text__color {
      color: black !important;
    }
  </style>