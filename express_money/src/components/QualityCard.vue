<template>
  <v-card 
    class="mx-auto card d-flex align-center flex-column pl-0"
  >
    <v-img
      max-height="70px"
      max-width="70px"
      :src="card.image"
      alt="time"
      height="200px"
    />
  
    <v-card-title class="text-lg-h6 px-0 pt-3">
      {{ card.title }}
    </v-card-title>
  
    <v-card-subtitle class="px-0 pt-5">
      {{ card.description }}
    </v-card-subtitle>
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
      box-shadow: none !important;
    }
  
    .font-weight-bold {
      font-size: 30px !important;
    }
    
    @media (min-width: 900px) {
      .card {
        width: 32%;    }
    }
  </style>1