<template>
  <div>
    <v-list-item-title>
      <a src="#"> {{ privacy }} </a><br>
      <a src="#"> {{ security }} </a>
    </v-list-item-title>
  </div>
</template>

<script>
export default {
    props: {
        privacy: {
            type: String,
            required: true
        },
        security: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
    v-list-item-title {
        padding: 15px;
        line-height: 2cm;
    }
</style>