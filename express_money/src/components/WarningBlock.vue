<template>
  <div class="notice__message">
    <div class="exchange__list__title">
      <span>Внимание!</span>
    </div>
    <ul class="mb-5 ml-5 pl-0">
      <li
        v-for="(item, key) in content"
        :key="key"
      >
        <p
          :class="{
            req:item.accent
          }"
        >
          {{ item.content }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: Array,
                required: true
            },
        },
        data () {
            return {
                
        }
        }
    }
</script>