<template>
  <div class="time__block">
    <div class="time__list d-flex justify-space-between flex-wrap">
      <QualityCard 
        v-for="(item, index) in items"
        :key="index"
        :card="item"
      />
    </div>
  </div>
</template>
  
  <script>
  import QualityCard from "@/components/QualityCard.vue"
  
  export default {
      components: {
        QualityCard,
      },
      data () {
          return {
              items: [ 
                  { image: require("@/assets/1 (1).png"), title: "Выгодный обмен", description: "Качественно меняем валюту онлайн." },
                  { image: require("@/assets/1 (1).png"), title: "Надежность на высоком уровне", description: "Если что-то пошло не так, мы всегда вернем вам деньги." },
                  { image: require("@/assets/1 (1).png"), title: "Быстрый обмен", description: "Мы обеспечим не только надежность и лучший курс, но и за быстрый обмен." },
                  { image: require("@/assets/1 (1).png"), title: "Много направлений обмена", description: "Совершаем обмены в самых популярных направлениях. Вы всегда сможете обменять свои средства." },
                  { image: require("@/assets/1 (1).png"), title: "100% гарантия обмена", description: "Многочисленные положительные отзывы подтверждают высокое качество нашей работы." },
                  { image: require("@/assets/1 (1).png"), title: "Экономичный обмен", description: "У нас всегда лояльные курсы. Мы всегда открыты к сотрудничеству, обращайтесь." }
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