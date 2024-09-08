<template>
  <div class="feedback__block pb-7">
    <h1 class="info__card__title mb-6">
      Отзывы
    </h1>
    <div class="wrapper d-flex justify-space-between">
      <FeedbackCard 
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
          <span>Все <span class="text-lowercase">Отзывы</span></span>
        </router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
import FeedbackCard from "@/components/FeedbackCard.vue"
    
export default {
    components: {
        FeedbackCard,
    },
    data () {
        return {
            items: [ 
                { name: 'Артём', time: "16.08.2022, 13:21", comment: "Все прошло нормально. Деньги получил быстро. рекомендую" },
                { name: 'Алекс', time: "02.06.2022, 19:45", comment: "Все прошло гладко" },
                { name: 'Дмитрий', time: "27.10.2021, 18:38", comment:"Обменял небольшое количество денег, всё прошло гладко" }
            ]
        }
    }
}
</script>

<style>
  .wrapper {
    margin-bottom: 30px;
  }
</style>