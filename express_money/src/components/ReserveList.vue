<template>
  <div class="reserve__block">
    <h1 class="info__card__title mb-6">
      Резерв валюты
    </h1>
    <div class="wrapper d-flex justify-space-between flex-wrap">
      <ReserveCard 
        v-for="(item, index) in items"
        :key="index"
        :card="item"
      />
    </div>
    <div class="feedback__btn__rules__wrapper d-flex justify-center">
      <v-btn 
        class="text-capitalize"
        color="accent"
        elevation="2"
        outlined
      >
        <router-link :to="{ name: 'rules' }">
          <span>Показать <span class="text-lowercase">все</span></span>
        </router-link>
      </v-btn>
    </div>
  </div>
</template>
  
  <script>
  import ReserveCard from "@/components/ReserveCard.vue"
      
  export default {
      components: {
        ReserveCard,
      },
      data () {
      return {
        items: [
          { image: require("@/assets/Bitcoin.png"), title: "Любой Банк UAH", reserve: "0"},
          { image: require("@/assets/Bitcoin.png"), title: 'Альфа Cash-in USD', reserve: "12300" },
          { image: require("@/assets/Bitcoin.png"), title: 'USDT (TRC-20) USD', reserve: "39266.933CT" },
          { image: require("@/assets/Bitcoin.png"), title: 'TRX TRX', reserve: "274321.2" },
          { image: require("@/assets/Bitcoin.png"), title: 'BNB BNB', reserve: "59.213" },
          { image: require("@/assets/Bitcoin.png"), title: 'USDC USDC', reserve: "39266.933" },
          { image: require("@/assets/Bitcoin.png"), title: 'DOGE DOGE', reserve: "107165.55" },
          { image: require("@/assets/Bitcoin.png"), title: 'XXMR XMR', reserve: "96.93" },
        ],
        
    }
  }
}
  </script>
  
  <style>
    .wrapper {
      margin-bottom: 30px;
    }
    .reserve__block {
        padding-bottom: 35px;
    }
  </style>