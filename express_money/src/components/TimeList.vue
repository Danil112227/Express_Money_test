<template>
  <div class="time__block">
    <div class="time__list d-flex justify-space-between">
      <TimeCard 
        v-for="(item, index) in items"
        :key="index"
        :card="item"
      />
    </div>
  </div>
</template>

<script>
import TimeCard from "@/components/TimeCard.vue"

export default {
    components: {
        TimeCard,
    },
    data () {
        return {
            items: [ 
                { image: require("@/assets/1.png"), title: "12 мин", description: "Время обработки последней заявки" },
                { image: require("@/assets/1.png"), title: "30 мин", description: "Среднее врем обработки заявки" },
                { image: require("@/assets/1.png"), title: "1 мин", description: "Среднее врем обработки заявки" },
                { image: require("@/assets/1.png"), title: "1 год", description: "Как давно работаем" },
                { image: require("@/assets/1.png"), title: "239", description: "Пользователей зарегистрировано" },
                { image: require("@/assets/1.png"), title: "12 мин", description: "Отзывов о нас на Bestchange.ru" }
            ]
        }
    }
}
</script>

<style>
    .time__block {
        width: 100%;
        background-color: #fff; 
        margin-top: 40px;

    }
    .time__list {
        width: 1150px;
        padding: 30px 0 30px 0;
        margin: 0 auto; 
    }
</style>