<template>
  <div class="item__wrapper d-flex align-center pb-5">
    <img
      :src="selectedCurrency.image"
      alt="currencyLogo"
      width="40px"
      max-width="40px"
      height="40px"
      max-heigth="40px"
      contain
    >
    <span class="pl-1">{{ selectedCurrency.title }}</span>
  </div>
</template>

<script>
    export default {
        props: {
            selectedCurrency: {
                type: Object,
                require: true
            },
        }
    }
</script>